import style from './notification.module.css'

const Notification = ({message}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default Notification