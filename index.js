const emailFeedback = document.querySelector("#email-feedback")
const updateForm = document.querySelector('#update-form')

updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = document.querySelector('#email-updates').value.trim()
  const checkbox = document.querySelector('.checkbox-group-required')
   const checkboxes = checkbox.querySelectorAll('input[type="checkbox"]');
   const isChecked = [...checkboxes].some(checkbox => checkbox.checked); 

    if(!email.includes("@")) {
        emailFeedback.textContent = "❌ Please enter a valid email!"
        emailFeedback.style.color = "#e13c3c" 
       return 
    }

    if(!isChecked){
      emailFeedback.textContent = "❌ Please check at least one box!"
        emailFeedback.style.color = "#e13c3c" 
       return 
    }
    
    
    emailFeedback.textContent = `✔ Thanks! We'll send the latest updates.`
    emailFeedback.style.color = "#00e025"
    updateForm.reset(); // clears all input fields 

  })
