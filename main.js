function checkInput() {
    const textInputs = document.querySelectorAll(".contact-form input[type='text']");
    const phoneInput = document.querySelector(".contact-form input[type='tel']");
    const eventSelect = document.getElementById("event");
    const submitButton = document.querySelector(".btn-submit");

    let allFilled = true;
    textInputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (phoneInput.value.trim() === "" || eventSelect.value === "") {
        allFilled = false;
    }

    submitButton.disabled = !allFilled;
}

function handleOptionChange() {
    const selectedOption = document.getElementById("event").value;
    const membersField = document.getElementById("members");
    const playersField = document.getElementById("players");

    membersField.style.display = "none";
    playersField.style.display = "none";

    if (selectedOption === "Dance" || selectedOption === "Drama") {
        membersField.style.display = "block";
    } else if (selectedOption === "BGMI" || selectedOption === "Free Fire") {
        playersField.style.display = "block";
    }
    checkInput();
}

function validateMembers() {
    const numMembers = document.getElementById("num_members").value;
    if (numMembers > 6) {
        showModal();
        document.getElementById("num_members").value = "";
    }
}

function showModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
