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
