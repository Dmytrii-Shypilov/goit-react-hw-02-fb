import style from './feedback-options.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const elements = options.map((option) => {
        return <button type="button" onClick={()=>onLeaveFeedback(option)}>{option}</button>
    })
    return (
        <div>
            {elements}
        </div>
    )
}

export default FeedbackOptions