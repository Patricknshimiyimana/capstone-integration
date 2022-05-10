// RETRIEVE POST
// Get post from 

const viewSinglePost = id => {

  fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}`)
  .then(res => res.json())
  .then(result => {
      console.log(result);

      let post = result.post

      let postElement = `
      
        <div class="blog-container">
        <div class="blog-content">
                <img src="${post.imageUrl}" alt="" >
                <h2>
                    ${post.title}
                </h2>
          
                <p class="blog-body">
                    ${post.content}
                </p>

              <div id="comments-container">
              <div class="comment-card" id="comment-card">
                <div class="flex">
                <h2>patrick</h2>
                <h3>Commented 12/5/2022</h3>
                </div>
                <p>comment</p>
              </div>
              </div>

                <div class="comment-section">
                    <h2>Please leave a comment</h2>
                    <div class="comment__form">
                        <form id="comment-form">
                        <label for="body" class="comment__label">Your Name</label>
                        <textarea name="" id="username" cols="0" rows="2" class="comment__input"></textarea>                    
                        <label for="body" class="comment__label">Your Comment</label>
                        <textarea name="" id="user-comment" cols="0" rows="7" class="comment__input"></textarea>
                        <button type="submit" class="submit__btn" id="post-btn"> <a href="#"> Post comment </a> </button>
                        </form>
                    </div>
                </div>
              </div> 
              </div> `;

        let blogContainer = document.querySelector('.div-container').innerHTML = postElement;

        const commentForm = document.getElementById('comment-form');

        commentForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(post._id);
        postComment(post._id)
    })
      })
    .catch(err => console.log(err));
}

let postId = localStorage.getItem("postId");
let token = localStorage.getItem('token')

viewSinglePost(postId)

const fetchComments = id => {
  fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}/comments`, {
    method: 'GET',
    headers: {
    Authorization: `Bearer ${token}`
        }
  }
  )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let comments = data.comments;
        let commentElement;
        comments.forEach(comment => {
          commentElement = `
          <div class="flex">
          <h4>${comment.username}</h4>
          <h5>Commented ${comment.createdAt}</h5>
          </div>
          <p>${comment.comment}</p> `

          let commentCard = document.getElementById('comment-card');
          commentCard.innerHTML = commentElement;

          let commentsContainer = document.getElementById('comments-container');
          commentsContainer.appendChild(commentCard);
        });
      
      })
      .catch(err => console.log(err));
}

fetchComments(postId)

const postComment = id => {
  const username = document.getElementById('username').value;
  const comment = document.getElementById('user-comment').value;

  fetch(`https://mybrand-blog-api.herokuapp.com/feed/post/${id}/comment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          username: username,
          comment: comment
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert(data.message);
        location.reload();
      })
      .catch(err => console.log(err));
}



