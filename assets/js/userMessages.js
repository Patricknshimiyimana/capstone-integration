
// SAVE A MESSAGE
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    fetch("https://mybrand-blog-api.herokuapp.com/query/message", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          message: messageInput
        })
      })
      .then(res => res.json())
          .then(data => {
            console.log(data);
            alert('Message sent! We will get back to you through email');
            location.reload();
          })
          .catch(err => console.log(err));

});
