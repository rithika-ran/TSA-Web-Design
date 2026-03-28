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


   const scriptURL = 'https://script.google.com/macros/s/AKfycbyj4df--uXteTp856wd9zSliZZpYG77EWpB_fEyeHegFycyF8UUxCCfAaCQTjE8K6IJ/exec';


    const formData = new FormData(updateForm)
const payload = Object.fromEntries(formData.entries())

const everyCheckboxes = [
  "extracurriculars",
  "afterschoolCare",
  "education",
  "pediatrics",
  "transportation",
  "foodSafety"
]

everyCheckboxes.forEach(name => {
  if (!payload[name]) {
    payload[name] = "no"
  }
})

fetch(scriptURL, {
method: 'POST',
body: JSON.stringify(payload),
})
.then(res => res.text())
.then(msg => {
emailFeedback.textContent = `✔ Thanks! We'll send the latest updates.`
emailFeedback.style.color = "#00e025"
updateForm.reset()
})
.catch(err => console.error(err))



  })
