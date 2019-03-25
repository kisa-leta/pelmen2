var cat1 = document.getElementById('cat1');
cat1.onmousedown = function(e) {

var coords = getCoords(cat1);
var shiftX = e.pageX - coords.left;
var shiftY = e.pageY - coords.top;

cat1.style.position = 'absolute';
document.body.appendChild(cat1);
moveAt(e);

cat1.style.zIndex = 1000;

cat1.ondblclick = function dblclick() {
    cat2.style.zIndex = 1000; 
    cat1.style.zIndex = 1; 
}

function moveAt(e) {
    cat1.style.left = e.pageX - shiftX + 'px';
    cat1.style.top = e.pageY - shiftY + 'px';
}

document.onmousemove = function(e) {
    moveAt(e);
};

cat1.onmouseup = function() {
    document.onmousemove = null;
    cat1.onmouseup = null;
};
}

cat1.ondragstart = function() {
return false;
};

function getCoords(elem) {   
var box = elem.getBoundingClientRect();
return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
};
}

