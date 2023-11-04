document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message');
  
  // Import the throttle function from Lodash
  const throttle = _.throttle;

  form.addEventListener('input', () => {
    const feedbackData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
  });

  const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = savedState.email || '';
  messageInput.value = savedState.message || '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedbackData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(feedbackData);
    localStorage.removeItem('feedback-form-state');
  });
});