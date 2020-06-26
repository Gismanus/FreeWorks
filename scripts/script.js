field.onclick = function(event) {

    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top : event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left : event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2
    };
    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    if (ballCoords.left < 0){
        ballCoords.left = 0
    }
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    console.log(ballCoords);
    ball.style.top = ballCoords.top + 'px';
    ball.style.left = ballCoords.left + 'px';


}