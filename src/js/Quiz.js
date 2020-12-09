import React from 'react';
import {BuildQuiz} from './QuizData';
import '../css/App.css';
import QuizEnd from '../view/QuizEnd';
import QuizStart from '../view/QuizStart';
import QuizView from '../view/QuizView';
import YourScores from '../presenters/YourScores';


class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            QuizData: BuildQuiz(this.props.item, this.props.wrongItem1, this.props.wrongItem2),
            userAnswer: null,
            currentQuestion: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            start: true,
            selected: [0, 0, 0, 0, 0, 0, 0, 0]
        }
    }

    loadQuiz = () => {
        const {currentQuestion, QuizData} = this.state;
        this.setState(() => {
            return {
                number: QuizData[currentQuestion].id,
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                correct: QuizData[currentQuestion].answer,
            }
        });
    }

    componentDidMount() {
        this.loadQuiz();
    }

    // Starts the quiz
    startQuiz = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion,
            start: false
        })
    }

    // Restarts the quiz
    reStartQuiz = () => {
        this.loadQuiz();
        this.setState({
            currentQuestion: 0,
            score: 0,
            quizEnd: false,
            disabled: true,
            start: false,
            selected: [0, 0, 0, 0, 0, 0, 0, 0],
        })
    }

    // Moves to next question
    nextQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }

    // Moves to previous question
    prevQuestion = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion - 1
        })
    }

    // Updates the component
    componentDidUpdate(prevProp, prevState) {
        const {currentQuestion, QuizData} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(() => {
                return {
                    number: QuizData[currentQuestion].id,
                    questions: QuizData[currentQuestion].question,
                    options: QuizData[currentQuestion].options,
                    correct: QuizData[currentQuestion].answer,
                    disabled: true
                };
            })
        }
    }

    // Handles finished quiz
    finishQuiz = () => {
        if(this.state.currentQuestion === this.state.QuizData.length - 1){
            this.setState({
                quizEnd: true
            })
            this.finalScore();
        }
    }

    // Calculate the final score of the quiz
    finalScore = () => {
        const correctAnswers = this.state.QuizData.map((item, index) => {return item.answer});
        this.setState({
            score: this.compareCorrectAnswers(this.state.selected, correctAnswers)
        })
        console.log("Correct answers: " + correctAnswers);
    }

    // Compare the array of chosen answers with the correct answers
    compareCorrectAnswers = (answers, corrects) => {
        if(answers.length !== corrects.length) {
            return false;
        }
        else { 
            let result = 0; 
            // comparing each element of array 
            for(let i=0; i<answers.length; i++) {
                if(answers[i] === corrects[i]) {
                    result += 1;
                    console.log(result);
                }
            }
            return result;     
        } 
    }

    // Checks answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    // Collect selected answer in index corresponding to question
    selectedAnswers = (index, answer) => {
        const newSelected = this.state.selected.map((element, i) => {
            if(i === index){
                return answer;
            }
            else {
                return element;
            }
        });
        // must have callback function to update state correctly, else setState is behind
        this.setState({
            selected: newSelected
        }, function(){return this.state.selected})
    }

    render() {
        const {questions, options, currentQuestion, userAnswer, quizEnd, start, score, disabled} = this.state;

        if(start) {
            return(
                <QuizStart
                    startQuiz={this.startQuiz} 
                />
            )
        }
        
        if(quizEnd) {         
            return(
                <><YourScores s={score} />
                <QuizEnd
                    score={score}
                    quiz={this.state.QuizData}
                    reStart={this.reStartQuiz}
                /></>
            )
        }
        
        return(
            <QuizView
                questions={questions}
                currentQuestion={currentQuestion}
                quiz={this.state.QuizData}
                options={options}
                userAnswer={userAnswer}
                checkAnswer={this.checkAnswer}
                selectedAnswers={this.selectedAnswers}
                prev={this.prevQuestion}
                next={this.nextQuestion}
                finish={this.finishQuiz}
                disabled={disabled}
            />
        )
    }
}
export default Quiz;
