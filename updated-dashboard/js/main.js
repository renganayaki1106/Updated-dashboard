var sideBar = document.querySelector('.sidebar');
var control = document.querySelector('.right');

control.addEventListener('click', () => {
    sideBar.classList.toggle('open');

});

var li_elements = document.querySelectorAll('.sidebar ul li');
var item_elements = document.querySelectorAll('.item');
for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function() {
        li_elements.forEach(function(li) {
            li.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item) {
            item.style.display = "none";
        })
        if (li_value == "heading") {
            document.querySelector("." + li_value).style.display = "block";
        }else if (li_value == "user") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "component") {
            document.querySelector("." + li_value).style.display = "block";
        }else if (li_value == "tables") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "form") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "about") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "settings") {
            document.querySelector("." + li_value).style.display = "block";
        }else {
            console.log("");
        }
    });
};