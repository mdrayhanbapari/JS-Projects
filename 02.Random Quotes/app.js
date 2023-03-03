const newQoutes = document.querySelector(".qoutes");
const btn = document.querySelector("button");

const qoutes = [
    "life isn't about black and white,look around and you will see that the world is much more colorful than you thought",

    "Progress is quiet until it isn't.",

    "And sometimes it's as simple as changing your environment.",

    "Yes, you may love them to death, but are they willing to love you to life?",

    "Life is an outward projection of one's perceived self value.",

    "I've come to learn that no matter the road you're traveling on nor how difficult it may be, it will always lead you to where you're supposed to go and to the people you're supposed to meet.",
    "If you don't have haters in your way of success, It means you are on wrong way!",

    "Pazite sa kakvim ljudima delite energiju. Neki ljudi imaju toksicnu auru.",

    "Never doubt, when you begin with something that it will end in failure. Our thought is transformed as picture in our mind."
];

btn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * qoutes.length);
    newQoutes.innerText = qoutes[index];
});
