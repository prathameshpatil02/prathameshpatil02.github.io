
function redirectToGmail() {
    // Construct the Gmail compose URL
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=nilaesh@abimstudio.in&su=Inquiry&body=Hi%20there,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0A%0AThanks!";

    // Redirect to Gmail
    window.open(gmailUrl, '_blank'); // Opens in a new tab
}




function redirectToWhatsApp() {
    // Construct the WhatsApp URL
    const phone = "919960893927"; // Replace with your WhatsApp phone number (include country code, no '+' sign)
    const message = "Hello Nilesh, I would like to know more about your services."; // Your pre-filled message
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
}

// function redirectToWhatsAppContactUs(form) {
//     // Construct the WhatsApp URL
//     const phone = "919960893927"; // Replace with your WhatsApp phone number (include country code, no '+' sign)
//     // const name = document.querySelector("#contact_name")
//     const name = form["name"].value
//     // const email = document.querySelector("#contact_email")
//     const email = form["email"].value
//     // const msg = document.querySelector("#contact_msg")
//     const msg = form["msg"].value
//     const message = "Hello Nilesh, I would like to know more about your services."; // Your pre-filled message
//     const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(name+email+msg)}`;

//     // Redirect to WhatsApp
//     window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
// }