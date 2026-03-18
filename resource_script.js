
// SEARCH BAR SEARCHING

const searchInput = document.getElementById("cardSearch");
const cards = document.querySelectorAll("#resourcelist .card");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }
    });
});

// FORM SEARCHING
const btnSubmit = document.querySelector("#btnSubmit")
const education = document.querySelector(".edu")
const extracurricular = document.querySelector(".extraCurr")
const pediatric = document.querySelector(".pediatric")

// EVENT LISTENER
education.addEventListener("click", (e) => {
    education.classList.add("checked")
})

extracurricular.addEventListener("click", (e) => {
    extracurricular.classList.add("checked")
})
pediatric.addEventListener("click", (e) => {
    pediatric.classList.add("checked")
})


btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    cards.forEach(card => {

        // SHOW ALL FIRST (default reset)
        card.parentElement.style.display = "block";

        // EDUCATION
        if (education.checked) {
            if (!card.classList.contains("education")) {
                card.parentElement.style.display = "none";
            }
        }

        // EXTRACURRICULAR
        else if (extracurricular.checked) {
            if (!card.classList.contains("extracurriculars")) {
                card.parentElement.style.display = "none";
            }
        }

        // PEDIATRICS
        else if (pediatric.checked) {
            if (!card.classList.contains("pediatrics")) {
                card.parentElement.style.display = "none";
            }
        }

    });
});