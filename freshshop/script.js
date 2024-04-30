let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    console.log("slides : ", slides);

    slideIndex++;

    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }


    slides.forEach((slide, index) => {
        if(slideIndex === index) {
            slide.style.display = "block";
            slide.classList.add('fadeable');
        }else {
            slide.style.display = "none";
            slide.classList.add('fadeable');

        }
    })
}

showSlides();
setInterval(showSlides, 2000);