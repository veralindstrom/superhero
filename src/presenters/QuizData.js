
export const BuildQuiz = (item, wrongItem1, wrongItem2) =>{
  function checkInfo(info) {
    const checkedInfo = [];
    info.map(ans => {
      if(ans === "-" || ans === "null" || ans === "") checkedInfo.push("Unknown");
      else if(Array.isArray(ans) && ans[0] === "-") checkedInfo.push("Unknown");
      else checkedInfo.push(ans);
      return checkedInfo;
    });
    return checkedInfo;
  }

  function generateAnswers(i) {
    const array = [
      i.biography["alter-egos"],
      i.connections.relatives,
      i.appearance["eye-color"],
      i.biography.alignment,
      i.appearance.race,
      i.biography["place-of-birth"],
      i.work.occupation,
      i.work.base,
      i.biography.aliases,
      i.biography.publisher,
      i.biography["full-name"],
      "sidekick",
      "nemesis"
    ];
    return array;
  }

  const correctAnswers = checkInfo(generateAnswers(item));
  const wrongAnswers1 = checkInfo(generateAnswers(wrongItem1));
  const wrongAnswers2 = checkInfo(generateAnswers(wrongItem2));

  
   const QuizData = [
    {
      id: 0,
      question: "Who is/are " + item.name + "s alter ego?",
      options: [correctAnswers[0], wrongAnswers1[0], wrongAnswers2[0]],
      answer: correctAnswers[0]
    },
    {
      id: 1,
      question: "Who is/are " + item.name + "s relatives?",
      options: [wrongAnswers1[1], correctAnswers[1], wrongAnswers2[1]],
      answer: correctAnswers[1]
    },
    {
      id: 2,
      question: "What is " + item.name + "s eye color?",
      options: [wrongAnswers1[2], wrongAnswers2[2], correctAnswers[2]],
      answer: correctAnswers[2]
    },
    {
      id: 3,
      question: "What is " + item.name + "s alignment?",
      options: [wrongAnswers1[3], wrongAnswers2[3], correctAnswers[3]],
      answer: correctAnswers[3]
    },
    {
      id: 4,
      question: "What is " + item.name + "?",
      options: [wrongAnswers2[4], correctAnswers[4], wrongAnswers1[4]],
      answer: correctAnswers[4]
    },
    {
      id: 5,
      question: "Where was " + item.name + " born?",
      options: [correctAnswers[5], wrongAnswers1[5], wrongAnswers2[5]],
      answer: correctAnswers[5]
    },
    {
      id: 6,
      question: "What does " + item.name + " work with?",
      options: [correctAnswers[6], wrongAnswers1[6], wrongAnswers2[6]],
      answer: correctAnswers[6]
    },
    {
      id: 7,
      question: "Where does " + item.name + " work at?",
      options: [wrongAnswers2[7], correctAnswers[7], wrongAnswers1[7]],
      answer: correctAnswers[7]
    },
    {
      id: 8,
      question: "Who is/are " + item.name + "s alias/es?",
      options: [wrongAnswers2[8], wrongAnswers1[8], correctAnswers[8]],
      answer: correctAnswers[8]
    },
    {
      id: 9,
      question: "Who published " + item.name + "?",
      options: [correctAnswers[9], wrongAnswers1[9], wrongAnswers2[9]],
      answer: correctAnswers[9]
    },
    {
      id: 10,
      question: "Who plays the character of " + item.name + "? (Real name)",
      options: [wrongAnswers2[10], correctAnswers[10], wrongAnswers1[10]],
      answer: correctAnswers[10]
    },
    {
      id: 11,
      question: "Who is/are " + item.name + "s nemesis?",
      options: [correctAnswers[11], wrongAnswers2[11], wrongAnswers1[11]],
      answer: correctAnswers[11]
    },
    {
      id: 12,
      question: "Who is/are " + item.name + "s side-kick?",
      options: [correctAnswers[12], wrongAnswers1[12], wrongAnswers2[12]],
      answer: correctAnswers[12]
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

