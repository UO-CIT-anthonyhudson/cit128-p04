const http=require('http');
const fs = require('fs');
const hostname='127.0.0.1';
const port=8080;
const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer } = require ('./p4-module.js')
// const { data } = require ('p4-data.js')

fastify.get("/cit/question", (request, reply) => {
    const QuestionReturn = getQuestions();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, questions: QuestionReturn});
  });

  fastify.get("/cit/answer", (request, reply) => {
    const AnswerReturn = getAnswers();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, questions: AnswerReturn});
  });



  fastify.get("/cit/questionanswer", (request, reply) => {
    const questionsAnswersReturn = getQuestionsAnswers();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, questions_Answers: questionsAnswersReturn});
  });




  fastify.get("/cit/question/:number", (request, reply) => {
    console.log(request);
    const questionNumberFromClient = request.params.number;
    const questionNumberReturn = getQuestion(parseInt(questionNumberFromClient));

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          error: questionNumberReturn.error, 
          statusCode: 200, 
          answer: questionNumberReturn.question, 
          number: questionNumberReturn.number
        });
  });


  fastify.get("/cit/answer/:number", (request, reply) => {
    console.log(request);
    const AnswerNumberFromClient = request.params.number;
    const answerNumberReturn = getAnswer(parseInt(AnswerNumberFromClient));

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          error: answerNumberReturn.error, 
          statusCode: 200, 
          answer: answerNumberReturn.answer, 
          number: answerNumberReturn.number
        });
  });


  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    console.log(request);
    const questionNumberFromClient = request.params.number;
    const questionNumberReturn = getQuestionAnswer(parseInt(questionNumberFromClient))

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          error: questionNumberReturn.error, 
          statusCode: 200, 
          question: questionNumberReturn.question,
          answer: questionNumberReturn.answer,
          number: questionNumberReturn.number
        });
  });


  fastify.get("*", (request, reply) => {
      const errorObject = {
        "error": "Route not found",
        "statusCode": 404
    }
    const result = JSON.stringify(errorObject);
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(result);
  });

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
