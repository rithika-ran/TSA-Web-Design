
// form regulation

const contactForm = document.querySelector('#contact-form')
const feedback = document.querySelector('#form-feedback')

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
   
    
    const name = document.querySelector('#name-input').value.trim()
    const email = document.querySelector('#email-input').value.trim()
    const description = document.querySelector('#description-input').value.trim()
    const phoneNumber = document.querySelector('#phone-number-input').value.trim()
    const url = document.querySelector('#url-input').value.trim()


    if(!name){  // name.length === 0 
        feedback.textContent = '❌ Please enter a name!'
        feedback.style.color = "#e13c3c"
        return //stops further checks
    }

    if(!email.includes("@")) {
        feedback.textContent = "❌ Please enter a valid email!"
        feedback.style.color = "#e13c3c" 
       return 
    }

    if(description.length < 10){
        feedback.textContent = '❌ Message not long enough!'
        feedback.style.color = "#e13c3c"
        return
    }

    if(phoneNumber.length < 10){
        feedback.textContent = "❌ Please enter a valid phone number!"
        feedback.style.color = "#e13c3c"
        return

    }

    // if(!url.includes(".com" && ".gov" && ".org" && ".net" && ".edu" && ".int" && ".us")){
    //      feedback.textContent = "❌ Please enter a valid url!"
    //     feedback.style.color = "#e13c3c"
    //     return
    // }


    // all gates are passed 
    feedback.textContent = `✔ Thanks ${name}! We got your message. For any additonal needs, please email bergen.help@gmail.com`
    feedback.style.color = "#00e025"
    contactForm.reset(); // clears all input fields 
})



  