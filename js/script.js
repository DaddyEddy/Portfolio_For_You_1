// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // Active sections for animation on scroll
      sec.classList.add('show-animate');  
    }
    // If want to use animation that repeats  on scroll use this
    else {
      sec.classList.remove('show-animate');
    }
  })


    // sticky header
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
   
}

//Contact Form

const form = document.querySelector('form');
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")



function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "1ee08fd2-e436-4875-9178-c44c09dd95b7",
    Host : "smtp.elasticemail.com",
    Username : "mozdok4anka@gmail.com",
    Password : "001A2CCC25D8AFBF3360A9D5A535E4D515AA",
    To : 'mozdok4anka@gmail.com',
    From : "mozdok4anka@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
  }).then(
      message => {
        if (message == 'OK') {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
          
        }
      }
  
    );
  
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
  
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        } else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    } 

    else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }

});