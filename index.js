field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop,
        left: event.clientX
    }
    ball.style.top = ballCoords.top + 'px';
    ball.style.left = ballCoords.left + 'px';
}