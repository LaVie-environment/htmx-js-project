document.addEventListener('DOMContentLoaded', () => {
    const jsButton = document.getElementById('jsButton');
    const jsResult = document.getElementById('jsResult');

    jsButton.addEventListener('click', () => {
        jsResult.textContent = 'Hello from JavaScript!';
    });
});
