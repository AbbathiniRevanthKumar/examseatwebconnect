const menubar = document.getElementById("menubar");

menubar.onclick = () => {
  const profile = document.getElementById("profile");
  if (profile.style.display === "none") {
    profile.style.display = "flex";
  } else {
    profile.style.display = "none";
  }
};


const signoutbtn = document.getElementById("signout");

signoutbtn.onclick= ()=>{
  window.location.href = "../index.html";
}



const clear = document.getElementById("cleardb");

clear.onclick = () => {
  fetch("/clearDb")
    .then((response) => response.json())
    .then((data) => {
      const msg = document.getElementById("errMsg");
      msg.style.display = "flex";
      msg.innerHTML = "database cleared";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    });
};



document.getElementById("back").onclick = ()=>{
    window.location.href = "../adminBranchYear.html";
}