import './appQuiz.css';
import questions from '../../data/db'
import {useState, useEffect} from 'react'

export default function AppQuiz(){
    const [actualQuestion, setActualQuestion] = useState(0) // to review wich Question we are
    const [puntuation, setPuntuation] = useState(0) // to review the Puntuation
    const [isFinished, setIsFinished] = useState(false) // to Review is the quiz is finished or not, we havent finished from the beginning
    const [timeLeft, setTimeLeft] = useState(40); // to setting out the time to respond Questions
    const [areDisabled, setAreDisabled] = useState(false) // To Disabled the button options when the time is over




    function handleAnswerSubmit(isCorrect, e){
        // This funtion will add Puntuation
        if(isCorrect) setPuntuation(puntuation + 1);

        // This function will add style to the Answers to determine if is right the response
        e.target.classList.add(isCorrect? "correct" : "incorrect");
        // This function will change the next Question
       setTimeout(() => {
        if(actualQuestion === questions.length - 1){
            setIsFinished(true);
        }else{
            setActualQuestion(actualQuestion + 1)
        }

       },1500);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(timeLeft > 0) setTimeLeft((prev) => prev - 1);
            if(timeLeft === 0) setAreDisabled(true);
        
        }, 1000)
        return () => clearInterval(interval);

    }, [timeLeft]);
    
if(isFinished) return(
    <section className="background">
    <main className='app'> 
        <div className='game-over'>
           <span>{""} You got {puntuation} of {questions.length} {""}</span>
           <button onClick={() => window.location.replace("/quiz")} className="button-option">Retry</button>
        </div>
    </main>
    </section>
)

    

    return(
        <section className='background'>
            <main className='app'>
                <div className='left-side'>
                    <div className='numbers-question'>
                        <span>Question {actualQuestion + 1}  Of {questions.length}</span> 
                    </div>
                    <div className='questions-title'>
                        {questions[actualQuestion].title}
                    </div>
                    <div>
                        {!areDisabled ? (
                             <span className="timeLeft"> Time Remaining: {timeLeft} {""}</span>
                        ) : (
                       <button className='button-option' onClick={() => {
                        setTimeLeft(40);
                        setAreDisabled(false);
                       }} >Continue</button>
                        )}
                       
                    </div>
                </div>




                <div className='right-side'>
                   {questions[actualQuestion].options.map((response) => (
                       <button  disabled={areDisabled}
                        key={response.responseText} className="button-option" 
                       onClick={(e)=> handleAnswerSubmit(response.isCorrect, e)}>
                        {response.responseText}</button>
                   ))}
                
                </div>
            </main>
        </section>
    )
}