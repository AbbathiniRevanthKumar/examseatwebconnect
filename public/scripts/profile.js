window.addEventListener("DOMContentLoaded",()=>{
    fetch("/profile")
        .then((response) => response.json()) // assuming the response is in JSON format
        .then((data) => {
          // console.log(data);
          insertData(data);
        })
        .catch((error) => {
          console.log(error);
        });
})


const insertData = (data)=>{
    const details = document.getElementById("details");
    details.innerHTML = `<div class="profile">ADMIN</div>
    <div class="item">Name : ${data[0].adminName}</div>
    <div class="item">Full Name :  ${data[0].fullname}</div>
    <div class="item">Email :  ${data[0].adminEmail}</div>`
}

