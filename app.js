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
formEl.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify()
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});