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
//to close the sign up page
document.getElementById("close-login2").addEventListener("click", () => {
    home.classList.remove("hide");
    second.classList.remove("hide");
    third.classList.remove("hide");
    fourth.classList.remove("hide");
    document.getElementById("login").classList.add("hide");
    document.getElementById("signup").classList.add("hide");
})
//to close the ogin page
document.getElementById("close-login1").addEventListener("click", () => {
    home.classList.remove("hide");
    second.classList.remove("hide");
    third.classList.remove("hide");
    fourth.classList.remove("hide");
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

//the section fade/slide in!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fade In and out
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
// fade in observed elements that are in view
        entry.target.classList.replace('fadeyOut', 'fadeyIn');
      } else {
// fade out observed elements that are not in view
        entry.target.classList.replace('fadeyIn', 'fadeyOut');
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const fadeElms = document.querySelectorAll('.fadey');
  fadeElms.forEach(el => observer.observe(el));


//the download popup
const popupDownload = document.getElementById("popup-download");

window.addEventListener("load", function() {
    setTimeout(() => {
        popupDownload.classList.remove("hide")
        popupDownload.style.opacity = "1"
    }, 5000)
});

AOS.init();


document.getElementById("close-popup").addEventListener("click", () => {
    popupDownload.classList.add("hide")
    document.getElementById("download-sec").classList.add("hide");
});
