function loadProxy() {
    let url = document.getElementById('urlInput').value;

    // Check if the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    fetch(proxyUrl, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest' // Include required header
        }
    })
    .then(response => response.text())
    .then(data => {
        const iframe = document.getElementById('proxyFrame');
        iframe.srcdoc = data; // Use srcdoc if you’re loading HTML content
    })
    .catch(error => console.error('Error:', error));
}
