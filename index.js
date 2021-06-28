// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html
/*Remember how you built out a question for a user. Once the user enters a word, you will:
store it;
run it through your function (which is taking the chosen scoring algorithm and applying it to the score), and then;
you will remind the user what word was used and inform them how much it scored;*/

const input = require ('readline-sync');

let zero = "0 - Scrabble: The traditional scoring algorithm.";
let one = "1 - Simple Sore: Each letter is worth 1 point.";
let two = "2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.";

let scoringChoicesArray = [zero, one, two]; 
//section A ends here; works properly. 

//function 1- Simple Score
function simpleScore (word){
let letterScore1 = 0;
  for (i=0; i<word.length; i++){
    letterScore1++;
  }return letterScore1
}
//simpleScore("kellie")
//Function 2: Bonus Vowels

function bonusVowels(word){
  let output = 0;
let vowels = ["a", "e", "i", "o", "u"];
for (i in word){
  if (vowels.includes(word[i])){
    output+=3
  } else{
    output+=1
  }
}return output;
}
//bonusVowels(myWord)
//function 3: Scrabble Score
function scrabbleScore(word, obj){
  let score = 0;
  for (i=0; i<word.length; i++) {
  score+=obj[word[i].toLowerCase()]
} return score;
}


// Code your transform function here:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function transform(obj){
  let newPointStructure = {};
  for (key in obj){
    for(let i = 0; i < obj[key].length; i++){
      newPointStructure[obj[key][i].toLowerCase()]= Number(key);
    }
  }
  return newPointStructure;
}
let newPointStructure = transform(oldPointStructure);
//transform(oldPointStructure);

// Code your initialPrompt function here:
function initialPromptFunction(){
 let greetingStatement = "Welcome to the Scrabble Score calculator! \n\nWhich scoring algorithm would you like to use?"; console.log(greetingStatement,'\n');

 let scoringChoicesArray = [zero, one, two];
 for (let i=0; i<scoringChoicesArray.length; i++){
   console.log(scoringChoicesArray[i]);
 }

 let userSelection = input.question("\nEnter 0, 1, or 2: ");
 let name = ["Scrabble", "Simple Score", "Bonus Vowels"]; 


// for (i=0; i<userSelection; i++);

 if (userSelection==0){
   console.log(`Using algorithm: ${name[0]}`)}
   else{
      if (userSelection==1){
   console.log(`Using algorithm: ${name[1]}`)}
   else{
      if (userSelection==2){
   console.log(`Using algorithm: ${name[2]}`)};
   }
   }
return userSelection;
 
}


//if userSelection


// Code your runProgram function here:
function runProgram(){
  let userSelection = initialPromptFunction(); 
  let scoringAlgorithmsArray = [scrabbleObject, simpleObject, bonusObject];
  let wordSelection = input.question("\nEnter a word to be scored or 'Stop' to quit: ");
  let score = 0;
  
  function scoreFeedback(){
    if (userSelection == 0){
      score = scrabbleObject.scorefunction(wordSelection, newPointStructure); 
      
    } else if (userSelection == 1){
      score = simpleObject.scorefunction(wordSelection);
      

   } else if (userSelection == 2){
      score = bonusObject.scorefunction(wordSelection);
  
  }
  let scoreFeedback = (`Score for '${wordSelection}': ${score}`); 
 
} return scoreFeedback()
   }

   //

    //while (wordSelection.toUpperCase() === "stop"){break;
  //let userInputPrompt = ("\nEnter a word to be scored or 'Stop' to quit: ")

  //let userScore = (`Score for '${wordSelection}': ${score}`);

  
/*    while (wordSelection !== "stop"){
   console.log(wordSelection, '\n', scoreFeedback); 
}*/
    
//while loop to stop the program from running, begins here 
//for (let i = 0; i <wordSelection.length; i++);
/*  console.log(wordSelection);
  while (i === "stop"){
  break;
  }*/

  
//while loop ends

// Here is the oldPointStructure object:

// Use the transform function to create the newPointStructure object here:

transform(oldPointStructure);

// Create your scoringAlgorithms array here:
//these are scoring objects for each algorithm

let scrabbleObject = {
name: "Scrabble",
inputID: 0,
description: "The traditional scoring algorithm.",
scorefunction: scrabbleScore
}

let simpleObject = {
  name: "Simple Score",
  iputID: 1,
  description: "Each letter is worth 1 point.",
  scorefunction: simpleScore
}

let bonusObject = {
  name:"Bonus Vowels",
  inputID: 2,
  description: "Vowels are 3 pts. consonants are 1 pt.",
  scorefunction: bonusVowels

}

let scoringAlgorithmsArray = [simpleScore, bonusVowels, scrabbleScore]; 




//scrabbleScore("Kellie",newPointScore)

// Call the runProgram function here:
runProgram();


