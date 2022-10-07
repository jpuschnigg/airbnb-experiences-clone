import caption1 from "../images/caption1.png"
import exp1 from "../images/swimmer.png"
import soldOut from "../images/sold_out.png"

export default function Experiences() {
    return (
        <div className="exp-container">
            <div className="experience">
                <img src={exp1} alt="exp1"></img>
                <img src={soldOut} alt="sold-out"></img>
                <img src={caption1} alt="caption1"></img>
            </div>
        </div>
    )
}