import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import SuperheroSource from "./SuperheroSource";

const Item = (id) => {
  function generateRandom(min, max, no1, no2) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === no1|| num === no2) ? generateRandom(min, max) : num;
}

  const [item, setItem] = useState(null);
  const [wrongItem1, setWrongItem1] = useState(null);
  const [wrongItem2, setWrongItem2] = useState(null);

  const rand1 =  generateRandom(1, 731, id, 0);
  const rand2 =  generateRandom(1, 731, id, rand1);

    useEffect(() => {
      SuperheroSource.getSuperheroById("71").then(data=>setItem(data)).catch(err=>console.log(err));
      SuperheroSource.getSuperheroById("63").then(data=>setWrongItem1(data)).catch(err=>console.log(err));
      SuperheroSource.getSuperheroById("54").then(data=>setWrongItem2(data)).catch(err=>console.log(err));
    }, []);
    console.log("item: " + item);

    if(item && wrongItem1 && wrongItem2)
    { console.log("item exist: " + item);
      return <Quiz item={item} wrongItem1={wrongItem1} wrongItem2={wrongItem2}/>
    }

    return(
      <h1>hej</h1>
    )
}
export default Item;

export const BuildQuiz = (item, wrongItem1, wrongItem2) =>{

  const alter_ego = item.biography["alter-egos"];
  const nemesis = "hej";
  const sidekick = "hej";
  const relatives = item.connections.relatives;
  let eye_color = item.appearance["eye-color"];
  if(eye_color === "-") eye_color = "Unknown";
  const alignment = item.biography.alignment;
  const race = item.appearance.race;
  let place_of_birth = item.biography["place-of-birth"];
  if(place_of_birth === "-") place_of_birth = "Unknown";
  const work = item.work.occupation;
  let work_base = item.work.base;
  if(work_base === "-") place_of_birth = "Unknown";
  const publisher = item.biography.publisher;
  const alias = item.biography.aliases;
  const real_name = item.biography["full-name"];

  
  let wrong_place_of_birth1 = wrongItem1.biography["place-of-birth"];
  if(wrong_place_of_birth1 === "-") place_of_birth = "Unknown";
  let wrong_work_base1 = wrongItem1.work.base;
  if(wrong_work_base1 === "-") place_of_birth = "Unknown";
 
  let wrong_place_of_birth2 = wrongItem2.biography["place-of-birth"];
  if(wrong_place_of_birth2  === "-") place_of_birth = "Unknown";
  let wrong_work_base2 = wrongItem2.work.base;
  if(wrong_work_base2 === "-") place_of_birth = "Unknown";
  
   const QuizData = [
    {
      id: 0,
      question: "Alter ego?",
      options: [alter_ego, wrongItem1.biography["alter-egos"], wrongItem2.biography["alter-egos"]],
      answer: alter_ego
    },
    {
      id: 1,
      question: "Relatives?",
      options: [relatives, wrongItem2.connections.relatives, wrongItem1.connections.relatives],
      answer: relatives
    },
    {
      id: 2,
      question: "Eye color?",
      options: [eye_color, wrongItem1.appearance["eye-color"], wrongItem2.appearance["eye-color"]],
      answer: eye_color
    },
    {
      id: 3,
      question: "Alignment?",
      options: [alignment, wrongItem1.biography.alignment, wrongItem2.biography.alignment],
      answer: alignment
    },
    {
      id: 4,
      question: "Race?",
      options: [race, wrongItem2.appearance.race, wrongItem1.appearance.race],
      answer: race
    },
    {
      id: 5,
      question: "Place of birth",
      options: [place_of_birth, wrong_place_of_birth1, wrong_place_of_birth2],
      answer: place_of_birth
    },
    {
      id: 6,
      question: "Works with?",
      options: [work, wrongItem1.work.occupation, wrongItem2.work.occupation],
      answer: work
    },
    {
      id: 7,
      question: "Works at?",
      options: [work_base, wrong_work_base2, wrong_work_base1],
      answer: work_base
    },
    {
      id: 8,
      question: "Aliases",
      options: [alias, wrongItem2.biography.aliases, wrongItem1.biography.aliases],
      answer: alias
    },
    {
      id: 9,
      question: "Publisher?",
      options: [publisher, wrongItem1.biography.publisher, wrongItem2.biography.publisher],
      answer: publisher
    },
    {
      id: 10,
      question: "Real name?",
      options: [real_name, wrongItem2.biography["full-name"], wrongItem1.biography["full-name"]],
      answer: `hell`
    },
    {
      id: 11,
      question: "Nemesis?",
      options: [nemesis, "vne", "huh"],
      answer: nemesis
    },
    {
      id: 12,
      question: "Side-kick?",
      options: [sidekick, "vne", "huh"],
      answer: sidekick
    } 
  ];

 
for (var i = QuizData.length - 1; i > 0; i--) {  
  // Generate random number  
  var j = Math.floor(Math.random() * (i + 1));             
  var temp = QuizData[i]; 
  QuizData[i] = QuizData[j]; 
  QuizData[j] = temp; 
}   

return QuizData.slice(0, 8); 
}

/*
export const QuizData = shuffle(Quiz);

// Re-arranges and cuts array
function shuffle(array) { 
   for (var i = array.length - 1; i > 0; i--) {  
       // Generate random number  
       var j = Math.floor(Math.random() * (i + 1));             
       var temp = array[i]; 
       array[i] = array[j]; 
       array[j] = temp; 
   }    
   return array.slice(0, 8); 
} */
