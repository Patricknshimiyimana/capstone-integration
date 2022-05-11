// RETRIEVE POSTS
// Get posts from 

let posts;

const displayPosts = () => {

    fetch('https://mybrand-blog-api.herokuapp.com/feed/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      posts = data.posts;

      posts.forEach(post => {

        postElement = `
       
        <div class="blog-card">
        <input id="post-id" type="hidden" value="${post._id}" />
        <div class="blog-card-banner">
          <img src="${post.imageUrl}" alt="" width="250" class="blog-banner-img">
        </div>

        <div class="blog-content-wrapper">

          <button onclick="getId(${post._id})" class="blog-topic text-tiny">other</button>

          <h3>
            <a href="./assets/html/post.html" class="h3" id="post-title">${post.title}</a>
          </h3>

          <p class="blog-text"> ${post.content} </p>

          <div class="wrapper-flex">
            <div class="wrapper">
              <p class="text-sm">
                <time datetime="2021-09-13">Publish date ${post.createdAt}</time>
              </p>
            </div>

          </div>

        </div>

        </div> `;

    let blogPost = document.createElement('div');
    //  postCard.className = 'post-card';
     blogPost.classList.add('blog__post');
     blogPost.innerHTML = postElement;

     document.querySelector('.blog-card-group').appendChild(blogPost);

     blogPost.addEventListener('click', e => {
       console.log(post._id);
       localStorage.setItem('postId', post._id)
     })
      });
      
    })
    .catch(err => console.log(err));
        
}

displayPosts();

// login and logout btn if user is logged in or out
const isLoggedIn = localStorage.getItem('userId');

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

if (isLoggedIn) {
  loginBtn.style.display = "none";
}

else logoutBtn.style.display = "none";

logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  logout();
})

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.setItem('isLoggedIn', false);
  location.reload();
};




