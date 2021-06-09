function _loadEvent() {

    const rootE = document.getElementById("root");

    rootE.insertAdjacentHTML("beforeend", `

        <div class="swiper-container gallery">
            
            <div class="swiper-wrapper"></div>
        
            <div class="swiper-pagination"></div>
        
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>
    `)

        const images = ["bird", "birds", "kep", "photo", "picture"];
        /* console.log (targetSwiper); */

        const targetSwiper = document.querySelector ("#root .swiper-container.gallery .swiper-wrapper");
        /* console.log (targetSwiper); */
        
        /* let name = "Barna Attila"

        console.log(`hello
            
            ${name}`);
         */
        for (const image of images) {
            /* console.log(image); */
            
            
            /* console.log(`hello
            ${image}.jpg
            world`); */
            /* const swiper = "Attila Barna"; */
           /*  console.log(swiper); */
            /* console.log(image) */
            /* const slide = `<div class="swiper-slide">${image }.jpg</div>` */
            const slide = `<div class="swiper-slide"><img src="Photos/${image }.jpg" alt="${image}"></div>`
            

            targetSwiper.insertAdjacentHTML("beforeend", slide)
        }
           
  /*   console.log(slide);
    
    console.log(swiper); */

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
}

window.addEventListener("load", _loadEvent);