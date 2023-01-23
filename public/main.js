const form = document.getElementById('form');
const prompt = document.getElementById('prompt');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const requestBody = { prompt: prompt.value };
    fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.text())
        .then((data) => {
            result.innerHTML = data;
        });
});
