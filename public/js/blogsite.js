const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titlePost').value.trim();
   
    const message = document.querySelector('#post').value.trim();
  
    if (title && message) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({title, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };
  document.getElementById("BlogpostBtn").addEventListener("click", newFormHandler );