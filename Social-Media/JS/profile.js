import { auth, db } from "../firebase-config.js";

const home= document.getElementById('logo')
home.addEventListener('click',()=>{
  window.location.href='../dashboard.html'
})

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


const instagram= document.getElementById('insagram-url').value;
const thread= document.getElementById('thread-url').value;
const linkedin= document.getElementById('linkedin-url').value;
const facebook= document.getElementById('facebook-url').value;
const twitter= document.getElementById('twitter-url').value;
const pintrest= document.getElementById('pintrest-url').value;
const quora= document.getElementById('quora-url').value;
const youtube= document.getElementById('youtube-url').value;

//input Links
async function ProfileInputs(){
    const link= instagram
    let data= localStorage.setItem('URL', JSON.stringify( instagram))
    if(instagram){
      window.location.href='dashboard.html'
    }
}
ProfileInputs()
