const QuizData = [
    {
        question: "Who is Batman?",
        answers: ["Bruce Wayne", "Clark Kent", "Barry Allen", "Tony Stark"],
        correct: "Bruce Wayne",
        id: 0
    },

    {
        question: "This Marvel superhero is often called \"The man without fear\".",
        answers: ["Daredevil", "Thor","Wolverine","Hulk"],
        correct: "Daredevil",
        id: 1
    },

    {
        question: "What is the alter-ego of the DC comics character \"Superman\"?",
        answers: ["Bruce Wayne", "Arthur Curry", "Clark Kent", "John Jones"],
        correct: "Clark Kent",
        id: 2
    },

    {
        question: "In the Batman comics, by what other name is the villain Dr. Jonathan Crane known?",
        answers: ["Bane", "Scarecrow", "Calendar Man", "Clayface"],
        correct: "Scarecrow",
        id: 3
    },

    {
        question: "Which of the following superheros did Wonder Woman NOT have a love interest in?",
        answers: ["Green Arrow", "Superman","Batman", "Steve Trevor"],
        correct: "Green Arrow",
        id: 4
    },

    {
        question: "Which \"Green Arrow\" sidekick commonly wears a baseball cap?",
        answers: ["Black Canary", "Emiko Queen", "Roy Harper", "Dick Grayson"],
        correct: "Roy Harper",
        id: 5
    },

    {
        question: "Better known by his nickname Logan, what is Wolverine's birth name?",
        answers: ["Logan Wolf", "James Howlett", "Thomas Wilde", "John Savage"],
        correct: "James Howlett",
        id: 6
    },

    {
        question: "Which of the following rings from the DC Comics' \"Lantern Corps\" are classified as Parasitic?",
        answers: ["Green (Willpower)", "White (Life)", "Indigo (Compassion)", "Yellow (Fear)"],
        correct: "Indigo (Compassion)",
        id: 7
    },

    {
        question: "When Batman trolls the online chat rooms, what alias does he use?",
        answers: ["JonDoe297", "iAmBatman", "BWayne13", "BW1129"],
        correct: "JonDoe297",
        id: 8
    },

    {
        question: "What's the name of Batman's parents?",
        answers: ["Joey & Jackie", "Jason & Sarah", "Thomas & Martha", "Todd & Mira"],
        correct: "Thomas & Martha",
        id: 9
    }
];

export default (n = 5) =>
    Promise.resolve(QuizData.sort(() => 0.5 - Math.random()).slice(0, n));

