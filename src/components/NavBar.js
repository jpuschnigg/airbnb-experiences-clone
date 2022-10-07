import logo from "../images/logo.svg"

export default function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} className='nav-logo' alt='logo'></img>
        </nav>
    )
}