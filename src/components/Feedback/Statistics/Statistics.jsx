import style from './statistics.module.css'

const Statistics = (props) => {
    const {good, neutral, bad, total, positivePercentage} = props
    return (
            <div>
                <span className={style.option}>Good: {good}</span>
                <span className={style.option}>Neutral: {neutral}</span>
                <span className={style.option}>Bad: {bad}</span>
                <span className={style.option}>Total: {total}</span>
                <span className={style.option}>Positive feedback: {positivePercentage}</span>
            </div>
    )
}

export default Statistics