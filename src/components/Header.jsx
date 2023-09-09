import headshot from '/headshot2.png'

const Header = () => {
    return (
        <div className="header">
            <img className="headshot" src={headshot} alt="headshot" />
        </div>
    )
}
export default Header