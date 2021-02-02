let filterValue;
let input =  document.getElementById("search");
input.addEventListener("input", handlingValue);

function handlingValue() {
    const nameItems = document.querySelectorAll('.gm__address-card__name');
    const addressItem = document.querySelectorAll('.gm__address-card__address');
    const inputResult = [...nameItems, ...addressItem];

    filterValue = input.value.toUpperCase();

    inputResult.forEach((item) => {
        const text = item.parentNode.textContent.toUpperCase();
        item.parentNode.style.display = text.indexOf(filterValue) > -1 ? "" : "none";
    });
};
