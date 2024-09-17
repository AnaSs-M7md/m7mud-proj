document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.hidden-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// ---------------------------------------
// function sendMail() {
//     var templateParams = {
//         name: document.querySelector('input[name="name"]').value,
//         email: document.querySelector('input[name="email"]').value,
//         message: document.querySelector('textarea[name="message"]').value
//     };

//     emailjs.send('service_ze47tfh', 'template_v2551km', templateParams)
//         .then(function (response) {
//             alert("Message sent successfully!");
//         }, function (error) {
//             alert("Failed to send message. Please try again.");
//         });
// }

