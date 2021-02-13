const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

    const images1 = document.querySelectorAll('.img-1');
    images1.forEach(image1 => {
    image1.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img1 = document.createElement('img')
        img1.src = "product-lp/shirtEverest.png"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img1)
    })
})

    const images2 = document.querySelectorAll('.img-2');
    images2.forEach(image2 => {
    image2.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img2 = document.createElement('img')
        img2.src = "product-lp/mugs.jpg"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img2)
    })
})

    const images3 = document.querySelectorAll('.img-3');
    images3.forEach(image3 => {
    image3.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img3 = document.createElement('img')
        img3.src = "product-lp/tumbler1.jpg"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img3)
    })
})

    const images4 = document.querySelectorAll('.img-4');
    images4.forEach(image4 => {
    image4.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img4 = document.createElement('img')
        img4.src = "product-lp/tumbler2.jpg"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img4)
    })
})

    const images5 = document.querySelectorAll('.img-5');
    images5.forEach(image5 => {
    image5.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img5 = document.createElement('img')
        img5.src = "product-lp/shirts_stack.jpg"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img5)
    })
})

    const images6 = document.querySelectorAll('.img-6');
    images6.forEach(image6 => {
    image6.addEventListener('click', e =>{
        lightbox.classList.add('active')
        const img6 = document.createElement('img')
        img6.src = "product-lp/shirtColors.PNG"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img6)
    })  
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})