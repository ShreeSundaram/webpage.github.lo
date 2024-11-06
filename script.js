function handleSubmit(event) {
    event.preventDefault(); // Prevent 
    
    // Get 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    
    document.getElementById('Form').style.display = 'none';

    // display 
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `${name}, thank you for your details. We will be in touch via ${email} shortly.`;
    thankYouMessage.style.display = 'block';
}


