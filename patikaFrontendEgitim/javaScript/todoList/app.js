let myList = document.getElementsByTagName("LI");

for (var i = 0; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


let list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

function newElement() {

    //karakter unicode'u : \u00D7
    let list = document.createElement("li");
    let input = document.getElementById("task").value;
    let text = document.createTextNode(input);
    list.appendChild(text);
    if (input === "" || input.replace("").length === 0) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        document.getElementById("list").appendChild(list);
        localStorage.setItem("list", JSON.stringify(myList));
    }


    document.getElementById("task").value = "";
    let span = document.createElement("span");
    let closeIcon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeIcon);
    list.appendChild(span);


    for (var i = 0; i < close.length; i++) {
        close[i].onClick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


}
