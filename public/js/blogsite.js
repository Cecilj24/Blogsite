const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#Name').value.trim();

  const message = document.querySelector('#form-control').value.trim();

  if (title && message) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ title, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/messages');
    } else {
      alert('Failed to create blog post');
    }
  }
};
// document.querySelector('.submitBtn').addEventListener("submit", newFormHandler);