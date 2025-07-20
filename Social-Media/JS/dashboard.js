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

// navbar new post button
const newPost= document.getElementById('new-post')
newPost.addEventListener('click', async()=>{
  try {
    window.location.href ="./HTML/NewPost.html" ;
  } catch (error) {
    alert(error.message);
  }
})
const newPosts= document.getElementById('new-posts')
newPosts.addEventListener('click', async()=>{
  try {
    window.location.href="./HTML/NewPost.html";

    
  } catch (error) {
    alert(error.message)
  }
})


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
  window.location.href= "https://www.instagram.com/accounts/login/?next=httpswww.instagram.comnandokaab&is_from_rle" 
})

const sideThread= thread.addEventListener('click', async()=>{
  window.location.href= "https://www.threads.com/login" 
})

const sideLinkedin= linkedin.addEventListener('click', async()=>{
  window.location.href= "https://api.linkedin.com/login" 
})

const sideFacebook= facebook.addEventListener('click', async()=>{
  window.location.href= "https://www.facebook.com/login/" 
})

const sideTwitter= twitter.addEventListener('click', async()=>{
  window.location.href= "https://x.com/i/flow/login" 
})

const sidePintrest= pintrest.addEventListener('click', async()=>{
  window.location.href= "https://www.pinterest.com/login/" 
})

const sideQuora= quora.addEventListener('click', async()=>{
  window.location.href= "https://www.pinterest.com/login/" 
})

const sideYoutube= youtube.addEventListener('click', async()=>{
  window.location.href= "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%253Fhl%253Did%26feature%3Dredirect_login&hl=en&ifkv=AdBytiP3XotksY9eCFQCWxn-NDetS5x_98-I-KRuKRNTmvEQZu3TM4JC2grVz3mrHDJr9nvDnlkjmw&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1793214472%3A1753027699916294" 
})