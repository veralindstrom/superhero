
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
  let work = item.work.occupation;
  if(work === "-") work = "Unknown";
  let work_base = item.work.base;
  if(work_base === "-") place_of_birth = "Unknown";
  const publisher = item.biography.publisher;
  const alias = item.biography.aliases;
  const real_name = item.biography["full-name"];

  
  let wrong_place_of_birth1 = wrongItem1.biography["place-of-birth"];
  if(wrong_place_of_birth1 === "-") place_of_birth = "Unknown";
  let wrong_eye_color1 = wrongItem1.appearance["eye-color"];
  if(wrong_eye_color1 === "-") wrong_eye_color1 = "Unknown";
  let wrong_work1 = item.work.occupation;
  if(wrong_work1 === "-") wrong_work1 = "Unknown";
  let wrong_work_base1 = wrongItem1.work.base;
  if(wrong_work_base1 === "-") place_of_birth = "Unknown";
 
  let wrong_place_of_birth2 = wrongItem2.biography["place-of-birth"];
  if(wrong_place_of_birth2  === "-") place_of_birth = "Unknown";
  let wrong_eye_color2 = wrongItem2.appearance["eye-color"];
  if(wrong_eye_color2 === "-") wrong_eye_color2 = "Unknown";
  let wrong_work2 = item.work.occupation;
  if(wrong_work2 === "-") wrong_work2 = "Unknown";
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
      options: [eye_color, wrong_eye_color1, wrong_eye_color2],
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
      options: [work, wrong_work2, wrong_work1],
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
