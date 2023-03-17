var readlineSync=require('readline-sync');
var name=readlineSync.question("Enter your name ");
console.log("Hey "+name+" Welcome!");
var score=0;
function play(question,answer)
{
  var userAns=readlineSync.question(question);
  if(userAns===answer)
  {
    score=score+1;
    console.log("Your are right");
  }
  else
    console.log("You are wrong");
  console.log("------------------------------------")
}
//array of objects
var arr=[
  Q1={
    question: "Baahubali has how many parts? ",
    answer: "2"
  },
  Q2={
    question: "Which cartoon uses gadjets? ",
    answer: "doraemon"
  },
  Q3={
    question: "In which OTT platform Wednesday series was launched ",
    answer:"netflix"
  },
  Q4={
    question: "How many seasons of stranger things were released? ",
    answer: "4" 
  },
  Q5={
  question:"RRR won oscar in which year? ",
  answer:"2023"
  }
]
for(var i=0;i<arr.length;i++)
  {
    play(arr[i].question,arr[i].answer);
  }
console.log("Your final score is "+score);