
// RETRIEVE POSTS FROM DB AND DISPLAY IN DASHBOARD
// Get posts from DB

let posts;

const displayPosts = () => {

  fetch('https://mybrand-blog-api.herokuapp.com/feed/posts')
    .then(res => res.json())
    .then(data => {

      posts = data.posts;

      posts.forEach(element => {
        postElement = `
       
        <div class="blog-card">
      
        <div class="blog-card-banner">
          <img src="${element.imageUrl}" alt="" width="250" class="blog-banner-img">
        </div>
      
        <div class="blog-content-wrapper">
      
          <button class="btn">${element.category}</button>
      
          <h3>
            <a href="./assets/html/post.html" class="h3">${element.title}</a>
          </h3>
      
          <p class="blog-text"> ${element.content} </p>
      
          <div class="wrapper-flex">
            <div class="wrapper">
              <p class="text-sm">
                <time datetime="2021-09-13">Published ${element.createdAt}</time>
              </p>
            </div>
      
          </div>
          <div class="wrapper-flex">
               <button class="btn btn-edit">Edit</button>
               <button class="btn btn-delete" id="delete-btn">Delete</button>
            </div>
        </div>
        </div>
      `;
      
      let blogPost = document.createElement('div');
      //  postCard.className = 'post-card';
      blogPost.classList.add('blog__post');
      blogPost.innerHTML = postElement;
      
      document.querySelector('.blog-card-group').appendChild(blogPost);

      let deleteBtn = document.getElementById('delete-btn');
      deleteBtn.addEventListener('click', e => {
        console.log(element._id);
        deletePost(element._id)
      })
      });
    })
}

displayPosts();

const deletePost = id => {
console.log(id)

const token = localStorage.getItem("token");

fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}`,
  {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
  }
  })
.then(res => res.json)
.then(result => console.log(result))
.catch(err => console.log(err))
location.reload();
}


// const updatePost = id => {
//   console.log(id)

//   const token = localStorage.getItem('token')

//   const title = document.getElementById("title").value;
//   const body = document.getElementById("body").value;
//   const image = document.getElementById("image-url").value;

//   fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify({   
//         title: title,
//         content: body,
//         image: image
//     }),
//     referrer: 'no-referrer'
// })
// .then(res => res.json())
// .then(result => console.log(result))
// .catch(err => console.log(err));
// };
