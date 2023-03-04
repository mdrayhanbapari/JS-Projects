const options = [
    {
        name: "Length",
        unit: [
            { name: "Kilometer", value: 1000 },
            { name: "Meter", value: 1 },
            { name: "Centimeter", value: 0.01 },
            { name: "Millimeter", value: 0.001 },
            { name: "Mile", value: 1609.34 },
            { name: "Yard", value: 0.9144 },
            { name: "Foot", value: 0.3048 },
            { name: "Inch", value: 0.0254 },
        ],
    },
    {
        name: "Mass",
        unit: [
            { name: "Kilogram", value: 1 },
            { name: "Gram", value: 0.001 },
            { name: "Milligram", value: 0.000001 },
            { name: "Pound", value: 0.453592 },
            { name: "Ounce", value: 0.0283495 },
        ],
    },
    {
        name: "Time",
        unit: [
            { name: "Second", value: 1 },
            { name: "Minute", value: 60 },
            { name: "Hour", value: 3600 },
            { name: "Day", value: 86400 },
            { name: "Week", value: 604800 },
            { name: "Month", value: 2592000 },
            { name: "Year", value: 31536000 },
        ],
    },
    {
        name: "Temperature",
        unit: [
            { name: "Celsius", value: 1 },
            { name: "Fahrenheit", value: 1.8 },
        ],
    },
    {
        name: "Volume",
        unit: [
            { name: "Cubic meter", value: 1 },
            { name: "Cubic centimeter", value: 0.01 },
            { name: "Cubic millimeter", value: 0.001 },
            { name: "Cubic mile", value: 1609.34 },
            { name: "Cubic yard", value: 0.9144 },
            { name: "Cubic foot", value: 0.3048 },
            { name: "Cubic inch", value: 0.0254 },
        ],
    },
    {
        name: "Weight",
        unit: [
            { name: "Kilogram", value: 1 },
            { name: "Gram", value: 0.001 },
            { name: "Milligram", value: 0.000001 },
            { name: "Pound", value: 0.453592 },
            { name: "Ounce", value: 0.0283495 },
        ],
    },
];

const dynamicSelect = document.querySelector("#dynamic-select");
const input1 = document.querySelector("#input-2");
const input2 = document.querySelector("#input-1");
const subSelect1 = document.querySelector("#subSelect-1");
const subSelect2 = document.querySelector("#subSelect-2");

// Populating the main select element with options
options.forEach((category) => {
    const categoryOption = document.createElement("option");
    categoryOption.value = category.name;
    categoryOption.text = category.name;
    dynamicSelect.add(categoryOption);
});

dynamicSelect.addEventListener("change", () => {
    const selectedOption = dynamicSelect.options[dynamicSelect.selectedIndex].text;
    const matchingCategory = options.find((category) => category.name === selectedOption);

    subSelect1.innerHTML = "";
    subSelect2.innerHTML = "";

    matchingCategory.unit.forEach((unit, index) => {
        const subOption1 = document.createElement("option");
        subOption1.value = unit.value;
        subOption1.text = unit.name;
        subSelect1.add(subOption1);

        const subOption2 = document.createElement("option");
        subOption2.value = unit.value;
        subOption2.text = unit.name;
        subSelect2.add(subOption2);

        if (index === 0) {
            subSelect1.selectedIndex = 1;
        } else if (index === 1) {
            subSelect2.selectedIndex = 1;
        }
    });

    // Trigger the input event to update the values based on the new units
    input1.dispatchEvent(new Event("input"));
});

// Set the initial state of the subOption select elements
const matchingCategory = options[0];
matchingCategory.unit.forEach((unit, index) => {
    const subOption1 = document.createElement("option");
    subOption1.value = unit.value;
    subOption1.text = unit.name;
    subSelect1.add(subOption1);

    const subOption2 = document.createElement("option");
    subOption2.value = unit.value;
    subOption2.text = unit.name;
    subSelect2.add(subOption2);

    if (index === 0) {
        subOption1.selected = true;
    } else if (index === 1) {
        subOption2.selected = true;
    }
});

// Reset the selected index of the subSelect1 and subSelect2 elements when the dynamicSelect element is changed
dynamicSelect.addEventListener("change", () => {
    subSelect1.selectedIndex = 0;
    subSelect2.selectedIndex = 1;
});
