const students = [
  {
    id: 1,
    last: "Last1",
    first: "First1",
  },
  {
    id: 2,
    last: "Last2",
    first: "First2",
  },
  {
    id: 3,
    last: "Last3",
    first: "First3",
  }
];

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax

// Student route
fastify.get("/cit/student", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(students);
  });

  // Student ID route
  fastify.get("/cit/student/:id", (request, reply) => {
    // Recieve request
    console.log(request);
    let studentIDFromClient = request.params.id;
    // Do something with the info in the request
    let StudentToGiveToClient = null;

    for (studentFromArray of students){
      if (studentFromArray.id == studentIDFromClient){
        StudentToGiveToClient = studentFromArray;
        break;
      }
    }

    // Provide a response
    if (StudentToGiveToClient != null) {
      reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(StudentToGiveToClient);
    }
    else {
      reply
        .code(404)
        .header("Content-Type", "text/html; charset=utf-8")
        .send("Could not find student with given ID");
    }

  });
  
// An undefined/wildcard route
fastify.get("*", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>At Wildcard Route!</h1>");
  });



fastify.post("/cit/students/add", (request, reply) => {
  // request from the client
  let dataFromClient = JSON.parse(request.body)
  console.log(dataFromClient)
  // do something with the request
  let maxID = 0
  for (individualStudent of students) {
    if (maxID < individualStudent.id) {
        maxID = individualStudent.id;
    }
  }


  let generatedStudent =   {
      id: maxID + 1,
      last: dataFromClient.lname,
      first: dataFromClient.fname,
  }

  students.push(generatedStudent);

  // reply to the client
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedStudent);
});


// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
