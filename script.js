//the header animation trigger!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!S
window.onscroll = function spread() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("navbar").style.paddingLeft = "40px";
        document.getElementById("navbar").style.boxSizing = "border-box";
        document.getElementById("vert").style.transform = "translateY(-100px)";
        document.getElementById("sign").style.display = "block";
    } else {
        document.getElementById("navbar").style.width = "30%";
        document.getElementById("navbar").style.paddingLeft = "0";
        document.getElementById("vert").style.transform = "translateY(0)";
        document.getElementById("sign").style.display = "none";
    }
}


//the dropdown menu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dropTray = document.getElementById("myDropdown");
//the open dropdown menu button
const openTray = document.getElementById("dropbtn");
//the close dropdown button
const closeTray = document.getElementById("close-dropdown");
//the nav bar
const navBar = document.getElementById("mobile-navbar");
openTray.addEventListener("click", () => {
    navBar.style.backgroundColor = "#f4f7f6";
    closeTray.style.display = "block";
    dropTray.style.display = "block";
    openTray.style.display = "none";
});
closeTray.addEventListener("click", function() {
    dropTray.style.display = "none";
    closeTray.style.display = "none";
    openTray.style.display = "block";
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
});
dropTray.addEventListener("click", () => {
    dropTray.style.display = "none";
    closeTray.style.display = "none";
    openTray.style.display = "block";
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
});

//the sign up & sign in page state management!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//the home section
const home = document.getElementById("home");
//the second section
const second = document.getElementById("second");
//the third section
const third = document.getElementById("third");
//the third section
const fourth = document.getElementById("fourth");
//all login buttons
const login = document.getElementById("trigger-login");
//all sign up buttons
const signup = document.getElementById("trigger-signup");
login.addEventListener("click", () => {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.remove("hide")
    document.getElementById("signup").classList.add("hide")
});
signup.addEventListener("click", () => {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.add("hide")
    document.getElementById("signup").classList.remove("hide")
});
document.querySelector(".close-login").addEventListener("click", () => {
    home.classList.remove("hide");
    second.classList.remove("hide");
    third.classList.remove("hide");
    fourth.classList.add("hide")
    document.getElementById("login").classList.add("hide");
    document.getElementById("signup").classList.add("hide");
})
document.getElementById("trigger-login2").addEventListener("click", function() {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.remove("hide")
    document.getElementById("signup").classList.add("hide")
});
document.getElementById("trigger-signup2").addEventListener("click", function() {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.add("hide")
    document.getElementById("signup").classList.remove("hide")
});
//trigerring the mobile version
document.getElementById("trigger-login-mob").addEventListener("click", () => {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.remove("hide")
    document.getElementById("signup").classList.add("hide")
});
document.getElementById("trigger-signup-mob").addEventListener("click", () => {
    home.classList.add("hide")
    second.classList.add("hide")
    third.classList.add("hide")
    fourth.classList.add("hide")
    document.getElementById("login").classList.add("hide")
    document.getElementById("signup").classList.remove("hide")
});
