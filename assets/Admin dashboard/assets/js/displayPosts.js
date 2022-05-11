
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
               <button class="btn btn-edit" id="update-btn" onclick="updatePost('${element._id}', '${element.title}', 
               '${element.content}', '${element.imageUrl}')"><a href="./assets/html/new-post.html">Edit</a></button>
               <button class="btn btn-delete" id="delete-btn" onclick="deletePost('${element._id}')">Delete</button>
            </div>
        </div>
        </div>
      `;
      
      let blogPost = document.createElement('div');
      //  postCard.className = 'post-card';
      blogPost.classList.add('blog__post');
      blogPost.innerHTML = postElement;
      
      document.querySelector('.blog-card-group').appendChild(blogPost);

      });
    })

    
}

displayPosts();

function deletePost(id) {
  console.log(id)

  let token = localStorage.getItem('token');
  
  fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}`, {
    method: 'DELETE',
    headers: {
    Authorization: `Bearer ${token}`
        }
})
.then(res => res.json())
.then(result => {
    console.log(result);
    location.reload();
})
.catch(err => console.log(err))

}


// login and logout btn if user is logged in or out
const isLoggedIn = localStorage.getItem('userId');

const logoutBtn = document.getElementById('logout-btn');

if (isLoggedIn) {
   logoutBtn.addEventListener('click', e => {
    console.log("hello..")
    logout();
  })
} else location.href = "../../../assets/login/login.html";

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.setItem('isLoggedIn', false);
  location.href = "../../../assets/login/login.html"
};

const updatePost = (id, title, content, imageurl) => {
  console.log(id);

  const post = {
    id, title, content, imageurl
  }
  localStorage.setItem("postToUpdate", JSON.stringify(post));

}
