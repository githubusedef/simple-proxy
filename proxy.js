function loadProxy() {
    let url = document.getElementById('urlInput').value;

    // Check if the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    const iframe = document.getElementById('proxyFrame');
    iframe.src = `https://cors-anywhere.herokuapp.com/${url}`;
}
