const media = document.querySelector(".ContactMedia")

const ContactList = [
    {
        Id:'01',
        Icon: "fa-solid fa-phone",
        Name:"Phone",
        Value:"+91 9307818336",
        href:"tel:+919307818336"
    },
     {
        Id:'02',
        Icon: "fa-solid fa-envelope",
        Name:"Gmail",
        Value:"sumitkharat686@gmail.com",
        href:"mailto:sumitkharat686@gmail.com"
    },
      {
        Id:'03',
        Icon: "fa-brands fa-linkedin",
        Name:"Linkdin",
        Value:"Sumit Kharat",
        href:"https://www.linkedin.com/in/sumit-kharat-b01441319"
    },
      {
        Id:'04',
        Icon: "fa-brands fa-github",
        Name:"GitHub",
        Value:"Sumit-Kharat-05",
        href:"https://github.com/sumit-kharat-05/"
    }
]

const contactContent = ContactList.map((ele) =>{
    return ` <div class="Media" id="${ele?.Id}">
                <span>
                    <i class="${ele?.Icon}"></i>
                </span>
                <div class="ContactValue">
                    <p>${ele?.Name}</p>
                    <a href="${ele?.href}">${ele?.Value}</a>
                </div>
            </div>`;
}).join(" ");
const sendBtn = document.querySelector("#sendmsg");
const originalText = sendBtn.innerHTML;


const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow
};

if (media) media.innerHTML = contactContent;

// document.getElementById("ContactForm").addEventListener("submit", (event) => {

//     event.preventDefault();

//     sendBtn.innerHTML = "Sending...";
//     sendBtn.style.backgroundColor = "#f62f2f";
//     sendBtn.style.color = "#fff";
//     sendBtn.style.border = "none";
//     sendBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

//     sendBtn.disabled = true;

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const message = document.getElementById("msg").value.trim();

//     if (!name || !email || !phone || !message) {
//         sendBtn.innerHTML = originalText;
//         Object.assign(sendBtn.style, originalStyle);
//         sendBtn.disabled = false;
//        return Toastify({
//   text: "Please fill all the fields.",
//   duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "rgb(246, 47, 47)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();
//     }

//     emailjs.send("service_9ldhfz7", "template_xlhwr16", {
//         name: name,
//         email: email,
//         phone: phone,
//         msg: message
//     })
//     .then(() => {
//     Toastify({
//   text: "Message sent successfully!",
//   duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "rgb(0,255,0)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();

//     setTimeout(() => {
//         sendBtn.innerHTML = originalText;
//         Object.assign(sendBtn.style, originalStyle);
//         sendBtn.disabled = false;
//     },2000);
//         document.getElementById("ContactForm").reset();
//     })
//     .catch((error) => {
//         console.error("Error sending email:", error);
//            Toastify({
//   text: "Failed to send message. Please try again later.",
//   duration: 3000,
 
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "rgb(255, 0, 0)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();
//     sendBtn.innerHTML = originalText;
//     Object.assign(sendBtn.style, originalStyle);
//     sendBtn.disabled = false;
//     });
    
// });

document.getElementById("ContactForm").addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("msg").value.trim();

    if (!name || !email || !phone || !message) {
        return Toastify({
            text: "Please fill all the fields.",
            duration: 3000,
         
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "rgb(246, 47, 47)",
            },
            onClick: function(){}
        }).showToast();
    }

    // Only enter "sending" state once validation has passed
    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "#f62f2f";
    sendBtn.style.color = "#fff";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    sendBtn.disabled = true;

    emailjs.send("service_9ldhfz7", "template_xlhwr16", {
        name: name,
        email: email,
        phone: phone,
        msg: message
    })
    .then(() => {
        Toastify({
            text: "Message sent successfully!",
            duration: 3000,
            
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "rgb(0,255,0)",
            },
            onClick: function(){}
        }).showToast();

        setTimeout(() => {
            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyle);
            sendBtn.disabled = false;
        }, 2000);
        document.getElementById("ContactForm").reset();
    })
    .catch((error) => {
        console.error("Error sending email:", error);
        Toastify({
            text: "Failed to send message. Please try again later.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "rgb(255, 0, 0)",
            },
            onClick: function(){}
        }).showToast();
        sendBtn.innerHTML = originalText;
        Object.assign(sendBtn.style, originalStyle);
        sendBtn.disabled = false;
    });

});