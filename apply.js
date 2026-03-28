const applyForm = document.querySelector('#apply-form')
const feedback = document.querySelector('#form-feedback')

applyForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("Form Submitted - no refresh!")

    // 2- get user input & trim 
    const name = document.querySelector('#name-input').value.trim()
    const email = document.querySelector('#email-input').value.trim()
    const message = document.querySelector('#message-input').value.trim()
    const number = document.querySelector('#number-input').value.trim()
    console.log(`Name: ${name} | Email: ${email} | Message: ${message} | Number: ${number}`)


    // 3 - gate 1: name cannot be empty 
    if(!name){  // name.length === 0 
        feedback.textContent = '❌ Please enter a name!'
        feedback.style.color = "#e13c3c"
        return //stops further checks
    }

      //4 = gate 2: email has @ symbol
    if(!email.includes("@")) {
        feedback.textContent = "❌ Please enter a valid email!"
        feedback.style.color = "#e13c3c" 
       return 
    }

    // gate 3: phone-number not long enough - at least 10 char

    if(number.length < 10 ){
       feedback.textContent = '❌ Phone number not valid!'
        feedback.style.color = "#e13c3c"
        return
    }

    //5 - gate 4:  message not long enough - at least 10 char
    if(message.length < 10){
        feedback.textContent = '❌ Message not long enough!'
        feedback.style.color = "#e13c3c"
        return
    }


    // all gates are passed 
    feedback.textContent = `✔ Thanks ${name}! We got your message.`
    feedback.style.color = "#00e025"
    applyForm.reset(); // clears all input fields 
})
