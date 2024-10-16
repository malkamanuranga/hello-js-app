document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is loaded and DOM is ready!");

    const changeTextButton = document.getElementById('changeText');
    const message = document.getElementById('message');

    changeTextButton.addEventListener('click', () => {
        message.textContent = 'Text Changed!'; // Changed text
        alert('Button Clicked!'); // Alert message when button is clicked
    });
});
