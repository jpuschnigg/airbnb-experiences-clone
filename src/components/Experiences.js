export default function Experiences(props) {
    return (
        <div className="experience">
            <img src={props.exp} alt="exp" id="exp-image"></img>
            <img src={props.availability} alt="availability" id="exp-avail"></img>
            <div className="exp-info">
                <img src={props.caption} alt="caption" id="caption"></img>
            </div>
        </div>
    )
}