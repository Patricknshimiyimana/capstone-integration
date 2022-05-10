
 // RETRIEVE A MESSAGES AND DISPLAY IN DASHBOARD

// get messages from the api
let messages;

const displayMessages = () => {

    const token = localStorage.getItem('token');

    fetch("https://mybrand-blog-api.herokuapp.com/query/messages", {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${token}`
            }
    })
    .then(res => res.json())
    .then(data => {

        let messages = data.queries
        let messageElement;
        
        messages.forEach(element => {
        messageElement = `
       
            <div class="message-content">
                <div class="flex">
                <h2>${element.username}</h2>
                <button class="btn btn-delete" id="delete-msg-btn">Delete</button>
                </div>
                <h4>${element.email}</h4>
                <p>${element.message}</p>
            </div>
      `;

     let messageCard = document.createElement('div');
    //  messageCard.className = 'message-card';
     messageCard.classList.add('message-card');
     messageCard.innerHTML = messageElement;

     document.querySelector('.messages-container').appendChild(messageCard)

     messageCard.addEventListener('click', e => {
         console.log(element._id)
         deleteMsg(element._id)
     })

    

        });
    })
    .catch(err => console.log(err));
}

displayMessages();

// DELETE A MESSAGE

function deleteMsg(id) {
      console.log(id)

      let token = localStorage.getItem('token');
      
      fetch(`https://mybrand-blog-api.herokuapp.com/query/message/${id}`, {
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

