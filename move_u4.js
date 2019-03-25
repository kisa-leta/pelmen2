var cat1 = document.getElementById('cat1')
var startCoords = { x: 0, y: 0 }
cat1.addEventListener('mousedown', function(downEvt) {
    downEvt.preventDefault()
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
        startCoords = {
        x:downEvt.clientX,
        y:downEvt.clientY,
    }
});


var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

        var shift = {
            x:startCoords.x - moveEvt.clientX,
            y:startCoords.y - moveEvt.clientY
        }

        startCoords = {
            x:moveEvt.clientX,
            y:moveEvt.clientY
        };

    cat1.style.top = (cat1.offsetTop - shift.y) + 'px';
    cat1.style.left = (cat1.offsetLeft - shift.x) + 'px';
}; 

var onMouseUp = function(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};