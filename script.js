function equals() {
    var element = document.getElementById("calctext")
    var value = element.value
    try {
        element.value = eval(value)
    } catch (err) {
        element.value = ""
    }
}

function append(event) {
    var element = document.getElementById("calctext")
    var value = element.value
    element.value = value + event.srcElement.innerHTML
}

var list = document.getElementsByClassName("appendable")
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", append)
}