field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2
    }
    ball.style.top = ballCoords.top + 'px';
    ball.style.left = ballCoords.left + 'px';
}