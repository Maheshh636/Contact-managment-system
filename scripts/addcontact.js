    const form = document.querySelector("#addContactForm");

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const tagsInput = document.querySelector("#tags");
    const imageInput = document.querySelector("#image");

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        tags: tagsInput.value.trim(),
        image: imageInput.value.trim(),
    };

    const isValid = validateForm(formData);

    if (isValid) {
        const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tags: formData.tags.split(",").map((tag) => tag.trim()).filter(t => t.length > 0),
        image: formData.image,
        };

        fetch("https://670f2dbf3e71518616551b1a.mockapi.io/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
        })
        .then((res) => {
            if (res.ok) {
            alert("Contact added successfully!");
            form.reset();
            } else {
            alert("Failed to add contact.");
            }
        })
        .catch(() => alert("Network error. Try again."));
    }
    });

    function validateForm({ name, email, phone, tags, image }) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[6-9]\d{9}$/;
    let valid = true;

    const nameError = document.querySelector("#nameError");
    const nameSuccess = document.querySelector("#nameSuccess");
    if (name === "") {
        nameError.innerText = "Name can't be empty";
        nameSuccess.innerText = "";
        valid = false;
    } else {
        nameError.innerText = "";
        nameSuccess.innerText = "Looks good!";
    }

    const emailError = document.querySelector("#emailError");
    const emailSuccess = document.querySelector("#emailSuccess");
    if (email === "") {
        emailError.innerText = "Email can't be empty";
        emailSuccess.innerText = "";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Enter a valid email";
        emailSuccess.innerText = "";
        valid = false;
    } else {
        emailError.innerText = "";
        emailSuccess.innerText = "Looks good!";
    }

    const phoneError = document.querySelector("#phoneError");
    const phoneSuccess = document.querySelector("#phoneSuccess");
    if (phone === "") {
        phoneError.innerText = "Phone can't be empty";
        phoneSuccess.innerText = "";
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        phoneError.innerText = "Enter a valid phone number";
        phoneSuccess.innerText = "";
        valid = false;
    } else {
        phoneError.innerText = "";
        phoneSuccess.innerText = "Looks good!";
    }

    const tagsError = document.querySelector("#tagsError");
    const tagsSuccess = document.querySelector("#tagsSuccess");
    if (tags === "") {
        tagsError.innerText = "Add at least one tag";
        tagsSuccess.innerText = "";
        valid = false;
    } else {
        tagsError.innerText = "";
        tagsSuccess.innerText = "Looks good!";
    }

    const imageError = document.querySelector("#imageError");
    const imageSuccess = document.querySelector("#imageSuccess");
    if (image && !isValidURL(image)) {
        imageError.innerText = "Enter a valid image URL";
        imageSuccess.innerText = "";
        valid = false;
    } else if (image) {
        imageError.innerText = "";
        imageSuccess.innerText = "Looks good!";
    } else {
        imageError.innerText = "";
        imageSuccess.innerText = "";
    }

    return valid;
    }

    function isValidURL(str) {
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
    }
