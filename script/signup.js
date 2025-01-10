let su = document.getElementById("su")
let li = document.getElementById("li")
function signupopen(){
    su.style.display = "block"
    su.style.zIndex = 1
    li.style.zIndex = 0
}
function loginopen(){
    li.style.display = "block"
    su.style.zIndex = 0
    li.style.zIndex = 1
}
function signupclose(){
    su.style.display = "none"
    su.style.zIndex = 1
    li.style.zIndex = 0
}
function loginclose(){
    li.style.display = "none"
    su.style.zIndex = 0
    li.style.zIndex = 1
}
