const slides = document.querySelectorAll(".slide-pic");
let activeSlide = 0;
function renderSliders() {
	slides.forEach((slide, index) => {
        if (activeSlide === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}
function nextSlide() {
	if (activeSlide === slides.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}
    renderSliders();
}
setInterval(nextSlide, 3000);
// -----------------------
const sideMenu = document.querySelector(".side-ul");
const projPictures = document.querySelectorAll(".proj-pic");
sideMenu.addEventListener("click",(e)=>{
    if(e.target.classList.contains("filter")){
        sideMenu.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const filterValue = e.target.getAttribute("data-filter");
        projPictures.forEach(pic =>{
            if(pic.classList.contains(filterValue) || filterValue ==="All"){
                pic.classList.add("show");
                pic.classList.remove("hide");
            }
            else{
                pic.classList.add("hide");
            }
        })  
    }
});
//--------------------------
const url ="https://borjomi.loremipsum.ge/api/send-message";
const formEl = document.querySelector(".form");
const fullName = document.getElementById("your-name");
const mailData = document.getElementById("email");
const webPage = document.getElementById("url");
const textMessage = document.getElementById("message");
const modal = document.getElementById("myModal");
const close = document.querySelector(".close");
let checkError = function(response){
    if(!response.ok){
        const errorText = `There is an error "${response.status} ${response.statusText} ${response.url}"`
        throw new Error(errorText);
    }
    return response;
}
formEl.addEventListener("submit",(e) =>{
    e.preventDefault();
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name:fullName.value,
            email:mailData.value,
            website:mailData.value,
            message:textMessage.value
        })
    })
    .then(checkError)
    .then(res => res.json())
    .then(data =>{
        modal.style.display = "flex";
    })
    .catch(error => console.log(error));
    formEl.reset();
});
close.onclick = function(){
    modal.style.display = "none";
}
