// Create a Post
const form = document.getElementById('new-post-form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
        const title = document.getElementById("title").value;
        const body = document.getElementById("body").value;
        const image = document.getElementById("image-url").value;

        const token = localStorage.getItem('token')

    fetch("https://mybrand-blog-api.herokuapp.com/feed/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: title,
          content: body,
          image: image
        })
      })
      .then(res => res.json())
          .then(data => {
            console.log(data);
            alert(data.message);
            location.reload();
          })
          .catch(err => console.log(err));

});


