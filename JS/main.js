
//navBar butun
let navbarLinks = document.querySelectorAll(".nav-link")
for (let index = 0; index < navbarLinks.length; index++) {
    navbarLinks[index].addEventListener("click", () => {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].classList.remove("active")
        }
        navbarLinks[index].classList.add("active")

    })
}

//scrollNavbar
let navbar = document.querySelector(".navbar")
let bodyScroll = document.querySelector("html,body")


window.addEventListener("scroll", () => {
    if (bodyScroll.scrollTop >= 100) {
        navbar.classList.add("scroll")
    }
    else {
        navbar.classList.remove("scroll")
    }

})

// changing navbarHeight when sroll down
/*let section = document.querySelector(".home")
section.style.paddingTop = navbar.clientHeigh + "px"*/

// select all inputs 
let checkInput = document.querySelectorAll(".input")
// select all text of error mesaage
let error = document.querySelectorAll(".error")
// select all exclamation mark icons 
let icon = document.querySelectorAll(".icon")
// select "Send" button
let send = document.querySelector(".send")
// select invalid email text
let invalidEmail = document.querySelector(".invalid-email")
// length of inputs array
let len = checkInput.length
// valid boolean to enable/disable button
let valid = true

// add events in all input fields array
for (let i = 0; i < len; i++) {

    // on blur from an input field 
    // used in restyle the error contents 
    checkInput[i].addEventListener("blur", () => {
        // if the input field is empty => change the style of input to error style 
        if (checkInput[i].value == "") {
            icon[i].style.display = "block"
            checkInput[i].style.borderBottom = "#e74c3c 1px solid"
            error[i].style.display = "block"
            // if the input field is an email and empty => remove invalid error message
            if (checkInput[i].type == "email") {
                invalidEmail.style.display = "none"
            }
        }
        // if the input field not empty =>
        else {
            // if the input field is an email => check if is valid email or not
            if (checkInput[i].type == "email") {
                // the value of email input field
                let emailValue = checkInput[i].value
                // the pattern of regular validation email expression
                let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                // if the email is not valid => restyle the input field to invalid error style
                if (!pattern.test(emailValue)) {
                    icon[i].style.display = "block"
                    checkInput[i].style.borderBottom = "#e74c3c 1px solid"
                    invalidEmail.style.display = "block"
                    error[i].style.display = "none"
                }
                else {
                    checkInput[i].style.borderBottom = ""
                }
            }
            // reset the default input field style
            else {
                checkInput[i].style.borderBottom = ""
                error[i].style.display = "none"
                icon[i].style.display = "none"
            }
        }
    })

    // on focus on an input field => reset the default input field style from this input only
    checkInput[i].addEventListener("focus", () => {
        checkInput[i].style.borderBottom = "#1abc9c 1px solid"
        error[i].style.display = "none"
        icon[i].style.display = "none"
        // if the input is an email => remove invalid text error
        if (checkInput[i].type == "email") {
            invalidEmail.style.display = "none"
        }
    })

    // on keyup from an input field => check the input fileds to enable the "Send" button
    checkInput[i].addEventListener("keyup", () => {
        // check from every input field
        for (let j = 0; j < len; j++) {
            // if the input is empty => make the valid boolean false 
            if (checkInput[j].value == "") {
                valid = false
            }
            // if the input not empty but it is an email
            else if (checkInput[j].type == "email") {
                let emailValue = checkInput[j].value
                // the pattern of regular validation email
                let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                // if the email is not valid => make the valid boolean false 
                if (!pattern.test(emailValue)) {
                    valid = false
                }
            }
        }
        // if the valid boolean is true => enable the "Send" button
        if (valid == true) {
            send.disabled = false
        }
        // else => disable the "Send" button
        else {
            send.disabled = true
        }
        // reset the boolean checker
        valid = true
    })
}



