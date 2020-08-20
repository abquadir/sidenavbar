  const selectElement = (element)=>document.querySelector(element)

const header = selectElement('header')

// const mainContent = selectElement('main')


selectElement(".hamburger").addEventListener('click',()=>{
    header.classList.toggle("active")
    // mainContent.classList.toggle('active')
})


 