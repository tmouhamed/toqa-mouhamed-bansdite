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

function showComment (commentArray) {
    let commentText = {
        name: commentArray[0].commentName,
        message: commentArray[0].commentMessage
    }

    makeCommentNode(commentText);
}

/***** Add a NEW node to the comments nodes */

function makeCommentNode(comment) {
    //to select the comment article in the DOM
    let newNode = document.querySelector('.main__content-comment');

    //to make a new div "look at the comment section in HTML"
    let div = document.createElement('div');
    div.className = 'main__content-comment-div';

    let insideDiv = '<img class="main__content-comment-picture" alt ="" src=""><div class="main__content-comment-section"><div class="main__content-comment-heading"><h4 class="main__content-comment-heading-h4">%Name%</h4><span class="main__content-comment-heading-date">12/18/2019</span></div><p class="main__content-comment-message">%Message%</p></div></div>'
    
    let newInsideDiv = insideDiv.replace('%Name%', comment.name);
    newInsideDiv = insideDiv.replace('%Message%', comment.message);
    newInsideDiv = insideDiv.replace('%12/11/2019%', accesstime());
    div.innerHTML = newInsideDiv;

    newNode.insertBefore(div, newNode.lastChild);
}
function accesstime() {
    let comment = new Date();

    let commentDate = comment.getDate();
    let commentMonth = comment.getMonth()
    let commentYear = comment.getFullYear();

    return  commentMonth + '/' + commentDate + '/' + commentYear;
} 





