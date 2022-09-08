
const WorkerDetails = (props) =>{

    return(
        <div className="worker-details">
            {props.icon}
            <p className="social-detail"> {props.detail}</p>
        </div>
    )
}

export default WorkerDetails