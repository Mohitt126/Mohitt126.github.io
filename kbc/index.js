var all_questions = [{
    question_string: "What color is the tree?",
    choices: {
      correct: "Green",
      wrong: ["orange", "Red", "Pink"]
    }
  }, {
    question_string: "Which of the following elements aren’t introduced in HTML5?",
    choices: {
      correct: "<input>",
      wrong: ["<article>", "<footer>", "<hgroup>"]
    }
  }, {
    question_string: "How many colours in a rainbow?",
    choices: {
      correct: "Seven",
      wrong: ["Five", "Two", "Four"]
    }
  }, {
    question_string: 'How many days in a weak?',
    choices: {
      correct: "Seven",
      wrong: ["Eight", "six", "eleven"]
    }
  }];
  for(var i=0;i<kbc.length;i++){
      var output=prompt(kbc[i].question);
      if(output==kbc[i].answer){
          alert("Correct answer!");
          prizeMoney+=1000;
          score++;
      }
      else{
          alert("WRONG answerr!");
          break;
      }
  }
  