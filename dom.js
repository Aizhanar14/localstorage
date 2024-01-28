
const input = document.querySelector(".input");
const email = document.querySelector(".email");
const img = document.querySelector(".img");
const contacts = document.querySelector(".contact");
const cont =document.querySelector(".contacts")
const btn = document.querySelector(".btn");
const btnRead = document.querySelector(".read-btn");
const icon =document.querySelector(".icon")


redTask()
function redTask() {
    contacts.innerHTML = "";
    let ser = JSON.parse(localStorage.getItem("res")) || [];
    ser.forEach((el, index) => {
        contacts.innerHTML += `<div class="block" data-index="${index}">
            <img src="${el.image}" alt="img"/>
            <div>
                <h5>${el.text}</h5>
                <h5>${el.gmail}</h5>
            </div>
            <button class="del">DELETE</button>
        </div>`;
    });

    document.querySelectorAll(".del").forEach((button, index) => {
        button.addEventListener("click", () => {
            ser.splice(index, 1);
            localStorage.setItem("res", JSON.stringify(ser));
            
            redTask();
        });
    });
}

btn.addEventListener("click", () => {
   if (input.value==="") {
      alert("Заполните пустое поле")
   }else{
    let ser = JSON.parse(localStorage.getItem("res")) || [];
    let obj = {
        id: 1,
        text: input.value,
        image: img.value,
        gmail: email.value,
    };
    


    let res1 = [...ser, obj];
    localStorage.setItem("res", JSON.stringify(res1));
    redTask();
    input.value=""
    img.value=""
    email.value=""
   }
});

btnRead.addEventListener("click", ()=> {
    cont.style.display ="block"
})
icon.addEventListener("click", () => {
    cont.style.display="none"
})