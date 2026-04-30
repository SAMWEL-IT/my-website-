document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('You liked this video!');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('You commented on this video!');
    });
});
