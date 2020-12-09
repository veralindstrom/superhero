
import QuizEnd from '../view/QuizEnd';
import QuizStart from '../view/QuizStart';
import QuizView from '../view/QuizView';
import QuizSide from '../view/QuizSide';
import YourScores from './yourScores';

const QuizNav = ({quizEnd, start, startQuiz, score, quizData, reStartQuiz, markCorrect, question, 
                    currentQuestion, options, selectedAnswers, prev, next, finishQuiz, goToQuestion, 
                        checkmarkAnswered, disableNext, selected}) => {

        if(start) {
            return(
                <QuizStart
                    startQuiz={startQuiz} 
                />
            )
        }

        if(quizEnd) {         
            return(
                <>
                <YourScores 
                    s={score} 
                />
                <QuizEnd
                    score={score}
                    quiz={quizData}
                    reStart={reStartQuiz}
                    markCorrect={markCorrect}
                />
                </>
            )
        }

        if(!start){
            return(
                <>
                <QuizView
                    questions={question}
                    currentQuestion={currentQuestion}
                    quiz={quizData}
                    options={options}
                    selectedAnswers={selectedAnswers}
                    prev={prev}
                    next={next}
                    finish={finishQuiz}
                    disableNext={disableNext}
                    selected={selected}
                />
                <QuizSide 
                    goToQuestion={goToQuestion}
                    quiz={quizData}
                    check={checkmarkAnswered}
                />
                </>
            )
        }
    }
export default QuizNav;

