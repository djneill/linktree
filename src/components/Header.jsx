import headshot from '/headshot.jpg'

const Header = () => {
    return (
        <div className="header">
            <img className="headshot" src={headshot} alt="headshot" />
        </div>
    )
}
export default Header