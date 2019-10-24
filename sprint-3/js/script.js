const apiKey = '?api_key=0cLaQ2bZ3V9DA35aHiyyZPUOHeA0C5uCAW9eMKEI';
const url = 'http://project-1-api.herokuapp.com/comments/';

//post the comment to the API
getComments = () => {
    axios.get(url + apiKey)
        .then(response => {
            let comment = response.data;
            comment.reverse();
            comment.forEach(Element => {
                displayComment(Element)
            })
        })
}
addComments = (userName, userComment) => {
    let commentdata = {
        "name": userName,
        "comment": userComment
    }
    axios({
        method: 'post',
        url: url + apiKey,
        data: commentdata
    })
        .then(data => {
            console.log('its added')
        })
}
getComments()
function displayComment(response) {
    let showComment = document.querySelector('.main__content-comment');
    let newDiv = makeCommentNode(response);
    showComment.appendChild(newDiv);
}

function makeCommentNode(comment) {
    // add the inner html for the node
    let parentDiv = document.createElement('div');
    parentDiv.className = 'main__content-comment-div';
    parentDiv.id = '';

    let image = document.createElement('img');
    image.className = 'main__content-comment-picture';
    image.setAttribute('alt', "");
    image.setAttribute('src', "");

    let divSection = document.createElement('div');
    divSection.className = 'main__content-comment-section';

    let divHeading = document.createElement('div');
    divHeading.className = 'main__content-comment-heading';

    let commentName = document.createElement('h4');
    commentName.className = 'main__content-comment-heading-h4';
    commentName.textContent = comment.name;

    let commentDate = document.createElement('span');
    commentDate.className = 'main__content-comment-heading-date';
    // commentDate.textContent = newCommentDate();

    let commentMessage = document.createElement('p');
    commentMessage.className = 'main__content-comment-heading-date';
    commentMessage.textContent = comment.comment;

    let commentDelete = document.createElement('button');
    commentDelete.className = 'main__content-comment-button';
    commentDelete.setAttribute('method', 'POST');
    commentDelete.setAttribute('type', 'delete');

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    //assigned every child with its parent "check the html hirarechy"
    parentDiv.appendChild(image);
    parentDiv.appendChild(divSection);
    divSection.appendChild(divHeading);
    divSection.appendChild(commentMessage);
    divSection.appendChild(commentDelete);
    divHeading.appendChild(commentName);
    divHeading.appendChild(commentDate);
    commentDelete.appendChild(deleteIcon);

    return parentDiv;
}

const form = document.querySelector('.main__content-comments-form');
form.addEventListener('submit', (event) => {
    //to prevent the page from reloading
    event.preventDefault();

    let commentObject = {
        commentName: form.name.value,
        commentMessage: form.comment.value
    }
    if (commentObject.commentName !== '' && commentObject.commentMessage !== "") {
        addComments(commentObject.commentName, commentObject.commentMessage);

        //to delete the input values after submitting
        event.target.name.value = '';
        event.target.comment.value = '';
    }
});

// let btn = document.querySelector('.main__content-comment-button')
// console.log(btn)
//     for (let i = 0; i < btn.length; i++) {
//         //get the element reference from the event object
//         event.preventDefault();

//         let commentObject = {
//             commentName: form.name.value,
//             commentMessage: form.comment.value
//         }
//         btn[i].addEventListener('click', function (e) {
//             console.log())
//            registerDeleteCallback(commentObject.commentName, commentObject.commentMessage)
//             // //button has two div parents and we need the grandparent :-)
//             // e.currentTarget.parentNode.parentNode.remove();

//         });
//     }


// function newCommentDate() {
//     let comment = new Date();

//     let commentDatee = comment.getDate();
//     let commentMonth = comment.getMonth()
//     let commentYear = comment.getFullYear();

//     return commentMonth + '/' + commentDatee + '/' + commentYear;
// }

function registerDeleteCallback(userName, userComment) {
    let commentdata = {
        "name": userName,
        "comment": userComment
    }
    axios.delete(
        url + apiKey,
        {headers: {
          Authorization: authorizationToken
        },
        data:{
          source:commentdata
        }}
      )
}
 /**** to DELETE the parent of the button after clicking ****/
    