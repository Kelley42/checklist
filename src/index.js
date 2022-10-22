import { todos } from './todo';

function toggleNavbar() {
    navbarContainer.classList.toggle("visible");
    // if (navbarContainer.classList.contains("hidden") == true) {
    //     console.log("show me")
    //     show_navbar();
    // } else {
    //     console.log("hide me")
    //     hide_navbar();
    // }
}

// function hide_navbar() {
//     if(navbarContainer.classList.contains("visible")) {
//         navbarContainer.classList.remove("visible");
//     } else{ //to start with
//         navbarContainer.style.display = "none"; 
//     }
//     navbarContainer.classList.add("hidden");
//     navbarContainer.visibility = "hidden";
// }

// function show_navbar() {
//     navbarContainer.style.display = "block";
//     navbarContainer.classList.remove("hidden");
//     navbarContainer.classList.add("visible");
//     navbarContainer.visibility = "visible";
// }

const navbarContainer = document.querySelector("#navbar-container");
const navbarButton = document.querySelector("#nav-button-expand");
navbarButton.addEventListener("click", toggleNavbar);

//hide_navbar();
todos();