function loadProxy() {
    let url = document.getElementById('urlInput').value;

    // Check if the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    // Load the URL through the proxy
    fetch(proxyUrl)
        .then(response => response.text())
        .then(data => {
            const iframe = document.getElementById('proxyFrame');
            iframe.srcdoc = data; // Embed the HTML content
        })
        .catch(error => console.error('Error:', error));
}
