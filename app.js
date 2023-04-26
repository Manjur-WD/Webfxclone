$('.partner-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const buttons = document.querySelectorAll('.about-option');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                buttons.forEach(b => b.classList.remove('active-about'));
                this.classList.add('active-about');

            });
        });

        window.onload = () =>{
            document.querySelector(".digital-expert").style.display = "block";
        document.querySelector(".track-record").style.display = "none";
        document.querySelector(".reviews").style.display = "none";
        document.querySelector(".housetech-expert").style.display = "none";
        }

        buttons[0].addEventListener("click",()=>{
            document.querySelector(".digital-expert").style.display = "block";
            document.querySelector(".track-record").style.display = "none";
            document.querySelector(".reviews").style.display = "none";
            document.querySelector(".housetech-expert").style.display = "none";

        })

        buttons[1].addEventListener("click",()=>{
            document.querySelector(".digital-expert").style.display = "none";
            document.querySelector(".track-record").style.display = "block";
            document.querySelector(".reviews").style.display = "none";
            document.querySelector(".housetech-expert").style.display = "none";

        })

        buttons[2].addEventListener("click",()=>{
            document.querySelector(".digital-expert").style.display = "none";
            document.querySelector(".track-record").style.display = "none";
            document.querySelector(".reviews").style.display = "block";
            document.querySelector(".housetech-expert").style.display = "none";

        })

        buttons[3].addEventListener("click",()=>{
            document.querySelector(".digital-expert").style.display = "none";
            document.querySelector(".track-record").style.display = "none";
            document.querySelector(".reviews").style.display = "none";
            document.querySelector(".housetech-expert").style.display = "block";

        })