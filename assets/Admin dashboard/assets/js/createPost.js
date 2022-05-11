if (localStorage.getItem('postToUpdate')) {

  let postToUpdate = JSON.parse(localStorage.getItem('postToUpdate'));
  let token = localStorage.getItem('token');

  document.getElementById("submitBtn").value = "Update Post";
  document.getElementById("create-post-heading").innerText = "Update a post";

  document.getElementById("title").value = postToUpdate.title;
  document.getElementById("body").value = postToUpdate.content;
  document.getElementById('image-url').value = postToUpdate.imageurl;

  const form = document.getElementById('new-post-form');
  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const content = document.getElementById("body").value;
      const imageUrl = document.getElementById("image-url").value;

      fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${postToUpdate.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image: imageUrl
        })
      })
        .then(response => response.text())
        .then(result => {
          console.log(result);
          alert("post updated!!");
          localStorage.removeItem('postToUpdate');
        })
        .catch(error => console.log('error', error));


    });
}  
 else {
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
}


