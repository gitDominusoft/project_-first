document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    // Informacion nga input
    let first_name = document.getElementById("firstName").value
    let last_name = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let comment = document.getElementById("comment").value
    // Alert
    let sms = document.getElementById("alert")

    // Kontroll nese input jane bosh apo jane me informacione.
    if(first_name === "" ||  last_name ==="" || email ==="" || comment===""){
        sms.textContent = "Fill all your fields"
        sms.classList.add("alert-danger")
        sms.style.display="block"
        return
    }
    if(!/^[a-zA-Z]+$/.test(first_name)||!/^[a-zA-Z]+$/.test(last_name)){
        sms.textContent = "First name and last name should contain only characters"
        sms.classList.add("alert-danger")
        sms.style.display="block"
        return
    }
    // Mesazh suksesi
     sms.textContent = "Thank you. Your message is sent."
    sms.classList.add("alert-success")
    sms.classList.remove("alert-danger")
    sms.style.display="block"
});
