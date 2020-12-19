var readlineSync = require('readline-sync');

var count =0;

var scores=[{
  name: "Sejal Rawat",
  score: 1
},]

var userName = readlineSync.question("\nWhat is your Name?");

console.log("\nWelcome! "+ userName.toUpperCase()+" to Do you Know ME?");

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("\nYou are RIGHT!");
    count++;
  }else{
    console.log("\nYou are WRONG!");
    count--;
  }

  console.log("\nYour Score is :"+ count);
  console.log("-------------------\n");
}

var questions=[{
  question:"What is my name?",
  answer:"Sheetal Jain"
},{
  question:"Where do I live?",
  answer:"Indore"
},{
  question:"What is my favourite food?",
  answer:"Sandwich"
},{
  question:"What is my birthday date? in (dd/mm/yyyy)",
  answer:"22/05/2000"
},{
  question:"How many siblings do I have?",
  answer:"2"
}];

for(i=0;i<questions.length;i++){
  var currQuestion = questions[i];
  quiz(currQuestion.question,currQuestion.answer);
}
for(i=0;i<scores.length;i++){
  var currScore = scores[i];
  if(count>=currScore.score){
  console.log("\nYay! You scored more than "+currScore.name);
}else{
  console.log("\nYou scored less than "+currScore.name);
}
}
