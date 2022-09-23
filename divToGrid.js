
// Set DIV to match grid
function divToGrid(w, columns){
    // div "Jakob Zebralöw"
    document.getElementById("title").style.top =  (w * 12.5).toString()             + "px";
    document.getElementById("title").style.left = (w * (columns - 10.5)).toString() + "px";

    // set circly DIV to match size
    // small circle at bottom of canvas
    document.getElementById("circly").style.width  = (w*2).toString() + "px";
    document.getElementById("circly").style.height = (w*2).toString() + "px";
}