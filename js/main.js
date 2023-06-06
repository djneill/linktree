const shareButton = document.getElementById('shareButton');
const shareOptions = {
    title: 'Share',
    text: 'Check out my Linktree!',
    url: 'https://your-linktree-url.com'
};

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share(shareOptions)
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        console.log('Web Share API not supported');
    }
});
