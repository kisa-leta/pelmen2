var cat3 = document.getElementById('cat3')
var startCoords3 = { x: 0, y: 0 }
cat3.addEventListener('mousedown', function(downEvt3) {
    downEvt3.preventDefault()
    document.addEventListener('mousemove', onMouseMove3);
    document.addEventListener('mouseup', onMouseUp3);
        startCoords3
     = {
        x:downEvt3.clientX,
        y:downEvt3.clientY,
    }
});
cat3.style.zIndex = 1000;
cat3.ondblclick = function dblclick3() {
    cat3.style.zIndex = 1000; 
    cat3.style.zIndex = 1; 
    cat1.style.zIndex = 1; 
}

var onMouseMove3 = function (moveEvt3) {
    moveEvt3.preventDefault();

        var shift = {
            x:startCoords3
        .x - moveEvt3.clientX,
            y:startCoords3
        .y - moveEvt3.clientY
        }

        startCoords3
     = {
            x:moveEvt3.clientX,
            y:moveEvt3.clientY
        };

    cat3.style.top = (cat3.offsetTop - shift.y) + 'px';
    cat3.style.left = (cat3.offsetLeft - shift.x) + 'px';
}; 

var onMouseUp3 = function(upEvt3) {
    upEvt3.preventDefault();
    document.removeEventListener('mousemove', onMouseMove3);
    document.removeEventListener('mouseup', onMouseUp3);
};