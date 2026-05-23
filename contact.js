
const subject = document.getElementById('subject')
const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('subject')

emailjs.init("T0a1qERaMrlUBubWr");

const form = document.getElementById("submit-btn");

form.addEventListener("click",(e) => {
    console.log()

    e.preventDefault();
    console.log('clicked')

    emailjs.send(
        "service_pgtk07u",
        "template_ppw603t",
        {
            subject: subject.value,
            name: name.value,
            description: message.value,
            email: email.value,
        }
    )
        .then(() => {

            alert("Message Sent Successfully");

        })
        .catch((error) => {

            console.log(error);

            alert("Failed to send message");

        });

});