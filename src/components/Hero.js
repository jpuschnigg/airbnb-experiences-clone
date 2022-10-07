import gallery from "../images/hero_gallery.png"

export default function Hero() {
    return (
        <div>
            <img src={gallery} className="hero-gallery" alt="gallery"></img>
            <div className="hero-text">
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-desc">Join unique interactive activies led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </div>
    )
}