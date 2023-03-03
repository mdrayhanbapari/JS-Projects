const submitBtn = document.querySelector("#submitBtn");
const resetbtn = document.querySelector("#resetBtn");
const nameInput = document.querySelector("#username");
const namePrint = document.querySelector(".namePrint");

submitBtn.addEventListener("click", () => {
    const name = nameInput.value;
    if (!name) {
        alert("Please enter your name");
    } else {
        namePrint.innerHTML = `Hello <span class="font-medium text-green-500">${name}</span> How are you? Today`;
    }
});

resetbtn.addEventListener("click", () => {
    nameInput.value = "";
    namePrint.innerHTML = "";
});
