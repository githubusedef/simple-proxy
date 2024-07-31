function loadProxy() {
    const url = document.getElementById('urlInput').value;
    const iframe = document.getElementById('proxyFrame');
    iframe.src = `https://cors-anywhere.herokuapp.com/${url}`;
}
