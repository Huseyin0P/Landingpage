let menulist = document.getElementById("menulist")
function menu(){
    if (menulist.style.display == "none"){
        menulist.style.display = "inline-block"
    }
    
    else if (menulist.style.display == "inline-block"){
        menulist.style.display = "none"
    }
}