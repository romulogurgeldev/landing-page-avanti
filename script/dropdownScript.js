const categoryContainer = document.querySelector(".category-container");
const drpDP1 = document.querySelector(".drp-dp-1");

drpDP1.addEventListener("mouseover", (e) => {
    categoryContainer.style.visibility = "visible";
});

drpDP1.addEventListener("mouseout", (e) => {
    categoryContainer.style.visibility = "hidden";
});

categoryContainer.addEventListener("mouseover", (e) => {
    categoryContainer.style.visibility = "visible";
});

categoryContainer.addEventListener("mouseout", (e) => {
    categoryContainer.style.visibility = "hidden";
});