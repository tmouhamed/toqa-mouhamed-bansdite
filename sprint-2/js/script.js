const form = document.querySelector('.main__content-comments-form');

form.addEventListener('submit', (event) => {
    //to prevent the page from reloading
    event.preventDefault();

    let commentObject = {
        commentName: form.name.value, 
        commentMessage: form.comment.value
    }
    let newComment = [];

    if (commentObject.commentName !== '' && commentObject.commentMessage !== "") {
        newComment.unshift(commentObject);

        showComment(newComment);
    }
});

/***** Add a NEW node to the comments nodes */

function makeCommentNode(comment) {
    // to select the comment article in the DOM

    // add the inner html for the node
    let parentDiv = document.createElement('div');
    parentDiv.className = 'main__content-comment-div';
   
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
    commentMessage.textContent = comment.message;

    //assigned every child with its parent "check the html hirarechy"
    parentDiv.appendChild(image);
    parentDiv.appendChild(divSection);
    divSection.appendChild(divHeading);
    divSection.appendChild(commentMessage);
    divHeading.appendChild(commentName);
    divHeading.appendChild(commentDate);
    
    return parentDiv;
}
function showComment (commentArray) {
    let commentText = {
        name: commentArray[0].commentName,
        message: commentArray[0].commentMessage
    }

    let articleClass = document.querySelector('.main__content-comment');
    let commentNode = makeCommentNode(commentText)
    articleClass.appendChild(commentNode);

}
function newCommentDate() {
    let comment = new Date();

    let commentDatee = comment.getDate();
    let commentMonth = comment.getMonth()
    let commentYear = comment.getFullYear();

    return  commentMonth + '/' + commentDatee + '/' + commentYear;
} 





