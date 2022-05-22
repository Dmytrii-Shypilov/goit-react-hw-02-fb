import style from './section.module.css'

const Section = ({title, children})=> {
    return(
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section