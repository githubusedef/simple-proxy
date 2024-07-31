function loadProxy() {
    let url = document.getElementById('urlInput').value;

    // Check if the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(url)}`;

    fetch(proxyUrl, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest' // Optional if your proxy server does not need this
        }
    })
    .then(response => response.text())
    .then(data => {
        const iframe = document.getElementById('proxyFrame');
        iframe.srcdoc = data; // Note: Use srcdoc to embed HTML content
    })
    .catch(error => console.error('Error:', error));
}
