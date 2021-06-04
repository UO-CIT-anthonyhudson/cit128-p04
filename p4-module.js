const { data } = require ('./p4-data.js')

function getQuestions() {
    let questionNums = data.map(function(element) {
        return element.question
    });
    return questionNums;
};


function getAnswers() {
    let questionAns = data.map(function(element) {
        return element.answer
    });
    return questionAns;
};


function getQuestionsAnswers() {
    let questionsAndAnswers = JSON.parse(JSON.stringify(data));
    return questionsAndAnswers;
};


function getQuestion(number = ""){
    let fullQuestion =   {
        error: '',
        question: '',
        number: '',
    };
    if (parseInt(number) == false) {
        fullQuestion.error = 'Question number must be an integer';
    }
    else if (number < 1){
        fullQuestion.error = 'Question number must be >= 1';
    }
    else if (number >= data.length+1){
        fullQuestion.error =  `Question number must be less than the number of questions (${data.length})`
    }
    else {
        fullQuestion.question = `${data[number-1].question}`;
        fullQuestion.number = number;
    }
    return fullQuestion;
};


function getAnswer(number = ""){
    let fullAnswer =   {
        error: '',
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        fullAnswer.error = 'Answer number must be an integer';
    }
    else if (number < 1){
        fullAnswer.error = 'Answer number must be >= 1';
    }
    else if (number >= data.length+1){
        fullAnswer.error =  `Answer number must be less than the number of questions (${data.length})`
    }
    else {
        fullAnswer.answer = `${data[number-1].answer}`;
        fullAnswer.number = number;
    };
    return fullAnswer;
};

function getQuestionAnswer(number = "") {
    let questionAnswer = {
        error: '',
        question: '',
        answer: '',
        number: '', 
    };
    if (parseInt(number) == false) {
        questionAnswer.error = 'Question number must be an integer';
    }
    else if (number < 1){
        questionAnswer.error = 'Question number must be >= 1';
    }
    else if (number >= data.length+1){
        questionAnswer.error =  `Answer number must be less than the number of questions (${data.length})`
    }
    else {
        questionAnswer.question = `${data[number-1].question}`;
        questionAnswer.answer  =  `${data[number-1].answer}`;
        questionAnswer.number = number;
    };
    return questionAnswer;
}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers, 
    getQuestion,
    getAnswer,
    getQuestionAnswer,
}

// console.log(getQuestions())
// console.log(getAnswers())
// console.log(getQuestionsAnswers())
//  console.log(getQuestion(number = "3"))
// console.log(getAnswer(number = "1"))
//  console.log(getQuestionAnswer(number="1"))

/*****************************
  Module function testing
******************************/
// function testing(category, ...args) {
//     console.log(`\n** Testing ${category} **`);
//     console.log("-------------------------------");
//     for (const o of args) {
//       console.log(`-> ${category}${o.d}:`);
//       console.log(o.f);
//     }
//   }
  
//   // Set a constant to true to test the appropriate function
//   const testGetQs = true;
//   const testGetAs = true;
//   const testGetQsAs = true;
//   const testGetQ = true;
//   const testGetA = true;
//   const testGetQA = true;

//   // getQuestions()
// if (testGetQs) {
//     testing("getQuestions", { d: "()", f: getQuestions() });
//   }
  
//   // getAnswers()
//   if (testGetAs) {
//     testing("getAnswers", { d: "()", f: getAnswers() });
//   }
  
//   // getQuestionsAnswers()
//   if (testGetQsAs) {
//     testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
//   }
  
// // getQuestion()
// if (testGetQ) {
//     testing(
//       "getQuestion",
//       { d: "()", f: getQuestion() },      // Extra credit: +1
//       { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
//       { d: "(1)", f: getQuestion(1) },
//       { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
//     );
//   }
  
//   // getAnswer()
//   if (testGetA) {
//     testing(
//       "getAnswer",
//       { d: "()", f: getAnswer() },        // Extra credit: +1
//       { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
//       { d: "(1)", f: getAnswer(1) },
//       { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
//     );
//   }
  
//   // getQuestionAnswer()
//   if (testGetQA) {
//     testing(
//       "getQuestionAnswer",
//       { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
//       { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
//       { d: "(1)", f: getQuestionAnswer(1) },
//       { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
//     );
//   }
