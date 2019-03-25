var cat2 = document.getElementById('cat2');
cat2.onmousedown = function(e) {

var coords = getCoords(cat2);
var shiftX = e.pageX - coords.left;
var shiftY = e.pageY - coords.top;

cat2.style.position = 'absolute';
document.body.appendChild(cat2);
moveAt(e);

cat2.style.zIndex = 1000;

cat2.ondblclick = function dblclick() {
    cat1.style.zIndex = 1000; 
    cat2.style.zIndex = 1; 
}


function moveAt(e) {
    cat2.style.left = e.pageX - shiftX + 'px';
    cat2.style.top = e.pageY - shiftY + 'px';
}

document.onmousemove = function(e) {
    moveAt(e);
};

cat2.onmouseup = function() {
    document.onmousemove = null;
    cat2.onmouseup = null;
};
}

cat2.ondragstart = function() {
return false;
};

function getCoords(elem) {   
var box = elem.getBoundingClientRect();
return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
};
}