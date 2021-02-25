var side = document.getElementById('side');
var height = document.getElementById('height');
var button = document.getElementById('subm');
button.addEventListener("click", calculation);

function calculation(event) {
    event.preventDefault();
    var a = side.value;
    var b = height.value;
    if (a <= 0 || b <= 0) {
        alert("please enter a valid value");
        document.getElementById('side').value = 1;
        document.getElementById('height').value = 1;
    }
    else {
        alert("the area of the triangle is " + ((a * b) / 2) + " cm^2");
        document.getElementById('side').value = 1;
        document.getElementById('height').value = 1;
    }
}