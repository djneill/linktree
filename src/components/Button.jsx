
const Button = () => {
    function copyLink() {
        const link = 'https://linktreedjneill.netlify.app/'
    
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link)
                .then(() => alert('Link copied to clipboard'))
                .catch((error) => alert('Error copying link:', error));
        } else {
            console.log('Clipboard API not supported');
        }
    }
    return (
        <div className='button-section pt-2 font-Inter'>
            <a target="_blank" href="mailto:dj.r.neill@gmail.com" rel="noreferrer">
                <button className="btn btn-primary hover:animate-pulse email">
                    <i className="fa-regular fa-2xl fa-envelope"></i>Email
                </button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/dj-neill/" rel="noreferrer">
                <button className="btn btn-primary hover:animate-pulse linkedin">
                    <i className="fa-brands fa-2xl fa-linkedin"></i>LinkedIn
                </button>
            </a>
            <a target="_blank" href="https://djneill.com/" rel="noreferrer">
                <button className="btn btn-primary hover:animate-pulse portfolio">
                    <i className="fa-solid fa-2xl fa-code"></i>Portfolio
                </button>
            </a>
            <a target="_blank" href="https://github.com/djneill" rel="noreferrer">
                <button className="btn btn-primary hover:animate-pulse github">
                    <i className="fa-brands fa-2xl fa-github"></i>GitHub
                </button>
            </a>
            <a target="_blank" href="https://twitter.com/CodingGuitarist" rel="noreferrer">
                <button className="btn btn-primary hover:animate-pulse twitter">
                    <i className="fa-brands fa-2xl fa-square-twitter"></i>Twitter
                </button>
            </a>
            <button id="share-button" className="btn btn-primary hover:animate-pulse forward" onClick={copyLink}>
                <i className="fa-solid fa-2xl fa-share"></i>Forward This Card
            </button>
        </div>
    )
}

export default Button