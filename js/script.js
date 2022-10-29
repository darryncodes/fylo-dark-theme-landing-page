// Nav functionality start

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
});

// Nav functionality end

// Form validation start

const form = document.getElementById("form");
const email = document.getElementById("email");
const small = form.querySelector("small");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError("E-mail cannot be left blank");
    } else if (!isEmail(emailValue)) {
        setError("Please enter a valid e-mail address");
    } else {
        setSuccess(email);
    }
}

function setError(message) {
    small.innerText = message;
    small.style.display = "block";
    email.classList.add("error");
}

function isEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

function setSuccess() {
    email.classList.add("success");
    email.classList.remove("error");
    small.style.display = "none";
}

// Form validation end
