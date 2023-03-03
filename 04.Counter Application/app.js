const valuePrint = document.querySelector(".numberValue");
const incrementValue = document.querySelector("#incrementValue");
const decrementValue = document.querySelector("#decrementValue");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");

// Add click event listener to increment button
incrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(valuePrint.textContent);
    const incrementBy = parseInt(incrementValue.value);

    if (isNaN(incrementBy) || incrementBy < 1) {
        alert("Invalid input. Please enter a positive number.");
        return;
    }

    const newValue = currentValue + incrementBy;

    if (newValue > 100) {
        alert("Counter value cannot be greater than 100.");
        return;
    }

    valuePrint.textContent = newValue < 10 ? `0${newValue}` : newValue;
    incrementValue.value = "";
});

// Add click event listener to decrement button
decrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(valuePrint.textContent);
    const decrementBy = parseInt(decrementValue.value);

    if (isNaN(decrementBy) || decrementBy < 1) {
        alert("Invalid input. Please enter a positive number.");
        return;
    }

    if (decrementBy > currentValue) {
        alert("Decrement value cannot be greater than counter value.");
        return;
    }

    const newValue = currentValue - decrementBy;

    if (newValue < 1) {
        alert("Counter value cannot be less than 1.");
        return;
    }

    valuePrint.textContent = newValue < 10 ? `0${newValue}` : newValue;
    decrementValue.value = "";
});
