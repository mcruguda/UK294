document.getElementById('apiButton').addEventListener('click', () => {
    fetch(`/api/hello`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiResponse').innerText = data.message;
            document.getElementById('apiResponse').style.color = 'blue';
        });
});
document.getElementById('welcomeApiBtn').addEventListener('click', () => {
    fetch(`/api/welcome`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('welcomeResponse').innerText = data.message;
            document.getElementById('welcomeResponse').style.color = '#FF0000';
        })
})