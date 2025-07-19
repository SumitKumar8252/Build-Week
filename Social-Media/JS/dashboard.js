import { auth, db } from "../firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


//Menu dropdown button
const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

profileIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function (event) {
  if (!document.getElementById("profileMenu").contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});


//aside container
const all= document.getElementById('all')
const instagram= document.getElementById('instagram')
const thread= document.getElementById('thread')
const linkedin= document.getElementById('linkedin')
const facebook= document.getElementById('facebook')
const twitter= document.getElementById('twitter')
const pintrest= document.getElementById('pintrest')
const quora= document.getElementById('quora')
const youtube= document.getElementById('youtube')

const sideInsta= instagram.addEventListener('click', async()=>{
  
})