var cat2 = document.getElementById('cat2')
var startCoords2 = { x: 0, y: 0 }
cat2.addEventListener('mousedown', function(downEvt2) {
    downEvt2.preventDefault()
    document.addEventListener('mousemove', onMouseMove2);
    document.addEventListener('mouseup', onMouseUp2);
        startCoords2 = {
        x:downEvt2.clientX,
        y:downEvt2.clientY,
    }
});
cat2.style.zIndex = 1000;
cat2.ondblclick = function dblclick2() {
    cat1.style.zIndex = 1; 
    cat2.style.zIndex = 1000; 
    cat3.style.zIndex = 1; 
}

var onMouseMove2 = function (moveEvt2) {
    moveEvt2.preventDefault();

        var shift = {
            x:startCoords2.x - moveEvt2.clientX,
            y:startCoords2.y - moveEvt2.clientY
        }

        startCoords2 = {
            x:moveEvt2.clientX,
            y:moveEvt2.clientY
        };

    cat2.style.top = (cat2.offsetTop - shift.y) + 'px';
    cat2.style.left = (cat2.offsetLeft - shift.x) + 'px';
}; 

var onMouseUp2 = function(upEvt2) {
    upEvt2.preventDefault();
    document.removeEventListener('mousemove', onMouseMove2);
    document.removeEventListener('mouseup', onMouseUp2);
};