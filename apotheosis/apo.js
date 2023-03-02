var shape = document.querySelector(".shape");
var points = shape.points;



function updatePoint(evt) {
    var svgRect = shape.ownerSVGElement.getBoundingClientRect();
    var point = svgRect.width < 1 || svgRect.height < 1 ?
      points.getItem(0) :
      points.getItem(2);
    point.x = evt.clientX - svgRect.left;
    point.y = evt.clientY - svgRect.top;
    if (point === points.getItem(2)) {
      var dx = point.x - points.getItem(0).x;
      var dy = point.y - points.getItem(0).y;
      point.x = points.getItem(0).x + dx / 10;
      point.y = points.getItem(0).y + dy / 10;
    }
}

document.addEventListener("mousemove", updatePoint, false);
shape.addEventListener("mouseleave", 
    function() {
        points.getItem(2).x = 250;
        points.getItem(2).y = 300;
    }, false
);