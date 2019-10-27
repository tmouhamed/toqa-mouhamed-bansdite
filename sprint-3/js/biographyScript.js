const apiKey = '?api_key=0cLaQ2bZ3V9DA35aHiyyZPUOHeA0C5uCAW9eMKEI';
const url = 'http://project-1-api.herokuapp.com/comments/';

//get the comment from the API
getComments = () => {
    axios.get(url + apiKey)
        .then(response => {
            let comment = response.data;
            comment.reverse();
            comment.forEach(Element => {
                displayComment(Element)
            })
        })
        .catch((error) => {
            console.error(error)
        });
}
//post the comment to the API
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
        .catch((error) => {
            console.error(error)
        });
}

getComments()

function displayComment(response) {
    let showComment = document.querySelector('.main__content-comment');
    let newDiv = makeCommentNode(response);
    showComment.appendChild(newDiv);
    deleteFunction(newDiv);
}

function makeCommentNode(comment) {
    // add the inner html for the node
    let parentDiv = document.createElement('div');
    parentDiv.className = 'main__content-comment-div';
    parentDiv.id = comment.id;

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
    commentDate.textContent = newCommentDate();

    let commentMessage = document.createElement('p');
    commentMessage.className = 'main__content-comment-heading-date';
    commentMessage.textContent = comment.comment;

    let commentDelete = document.createElement('button');
    commentDelete.className = 'main__content-comment-button';
    commentDelete.id = 'main__content-comment-button';

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

function newCommentDate() {
    let comment = new Date();

    let commentDatee = comment.getDate();
    let commentMonth = comment.getMonth() + 1;
    let commentYear = comment.getFullYear();
    let commentHour = comment.getHours();
    let commentMinute = comment.getMinutes();
    let commentDay = commentMonth + '/' + commentDatee + '/' + commentYear;
    ;
    let commentTime
    if (commentHour >= 12) {
        commentTime = commentHour + ':' + commentMinute + ' PM'
    }
    return commentDay + ' ' + commentTime;
}

deleteComments = (object) => {
    removeData = axios.delete(`${url}${object}/${apiKey}`);
    removeData.then((result) => {
        console.log(result);
    })
}

function deleteFunction(comments) {
    /**** to DELETE the parent of the button after clicking ****/
    let btn = document.getElementsByClassName('main__content-comment-button')
    for (let i = 0; i < btn.length; i++) {
        //get the element reference from the event object
        btn[i].addEventListener('click', function (e) {
            //button has two div parents and we need the grandparent :-)
            e.currentTarget.parentNode.parentNode.remove();

            //to get the id of the parent button to delete from the server
            let object = e.currentTarget.parentNode.parentNode.id;
            deleteComments(object);
            displayComments();
        });
    }
}