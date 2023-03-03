const options = [
    { value: "Area", label: "Area" },
    { value: "Data Transfer Rate", label: "Data Transfer Rate" },
    { value: "Digital Storage", label: "Digital Storage" },
    { value: "energy", label: "energy" },
    { value: "Frequency", label: "Frequency" },
    { value: "Fuel Economy", label: "Fuel Economy" },
    { value: "Length", label: "Length" },
    { value: "Mass", label: "Mass" },
    { value: "Plane Angle", label: "Plane Angle" },
    { value: "Pressure", label: "Pressure" },
    { value: "Speed", label: "Speed" },
    { value: "Temperature", label: "Temperature" },
    { value: "Time", label: "Time" },
    { value: "Volume", label: "Volume" },
];

const select = document.getElementById("dynamic-select");

options.map((option) => {
    const optionElement = `<option value="${option.value}">${option.label}</option>`;
    select.innerHTML += optionElement;
});
