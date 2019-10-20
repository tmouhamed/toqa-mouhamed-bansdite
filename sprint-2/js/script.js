let comments = [
    {
        name: 'Micheal Lyons',
        time: 12 / 18 / 2018,
        message: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        name: 'Gary Wong',
        time: 12 / 12 / 2018,
        message: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        name: 'Theodore Duncan',
        time: 12 / 15 / 2018,
        message: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
];


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

        displayComment(newComment);
        event.target.name.value = '';
        event.target.comment.value = '';

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

    let commentDelete = document.createElement('button');
    commentDelete.className = 'main__content-comment-button';
    commentDelete.setAttribute('method', 'POST');
    commentDelete.setAttribute('type','delete');
    
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
function displayComment(commentArray) {
    let commentText = {
        name: commentArray[0].commentName,
        message: commentArray[0].commentMessage
    }

    let articleClass = document.querySelector('.main__content-comment');
    let commentNode = makeCommentNode(commentText)
    articleClass.prepend(commentNode);

}
function newCommentDate() {
    let comment = new Date();

    let commentDatee = comment.getDate();
    let commentMonth = comment.getMonth()
    let commentYear = comment.getFullYear();

    return commentMonth + '/' + commentDatee + '/' + commentYear;
}

/**** to DELETE the parent of the button after clicking ****/
let btn = document.getElementsByClassName('main__content-comment-button')
for (let i = 0; i < btn.length; i++) {

    //get the element reference from the event object
    btn[i].addEventListener('click', function(e) {

    //button has two div parents and we need the grandparent :-)
    e.currentTarget.parentNode.parentNode.remove();
 });
}





