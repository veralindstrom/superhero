const Quiz = [
    {
      id: 0,
      question: `What do you think?`,
      options: [`Ok`, `Good`, `Bad`],
      answer: `Good`
    },
    {
      id: 1,
      question: `Right asnwer is answer or?`,
      options: [`wrong`, `answer`, `correct`],
      answer: `correct`
    },
    {
      id: 2,
      question: `No question, just guess?`,
      options: [`Guess again`, `Still wrong`, `Yippi`],
      answer: `Yippi`
    },
    {
      id: 3,
      question: `Hakuna...?`,
      options: [`Havana`, `Sahara`, `Matata`],
      answer: `Matata`
    },
    {
      id: 4,
      question: `what?`,
      options: [`yes`, `no`, `no`],
      answer: `yes`
    },
    {
      id: 5,
      question: `correct?`,
      options: [`wrong`, `wrong`, `right`],
      answer: `right`
    },
    {
      id: 6,
      question: `ok?`,
      options: [`fine`, `whatever`, `cool`],
      answer: `cool`
    },
    {
      id: 7,
      question: `i wanna?`,
      options: [`what`, `rock`, `stop`],
      answer: `rock`
    }
  ];

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
   return array.slice(0, 4); 
} 

