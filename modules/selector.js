import { address } from "../assets/data/map-data.json";
const addressList = document.getElementById('address');

const elSelectCustom = document.querySelector(".js-selectCustom");
const backgroundLayout = document.querySelector('.gm__left-layout');
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];


Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
        elSelectCustomValue.textContent = e.target.textContent;
        elSelectCustom.classList.remove("isActive");
        backgroundLayout.classList.remove("isActive");
        addressList.innerHTML = '';
        createCard(elOption.getAttribute('data-value'));
    });
});

elSelectCustomValue.addEventListener("click", () => {
    elSelectCustom.classList.toggle("isActive");
    backgroundLayout.classList.toggle("isActive");
});

document.addEventListener("click", () => {
    const didClickedOutside = !elSelectCustom.contains(event.target);

    if (didClickedOutside) elSelectCustom.classList.remove("isActive") && backgroundLayout.classList.remove("isActive");;
});

function createCard(element) {
        address.filter((item) => {
            if (Object.keys(item)[0] === element) {

                const listHtml = Object.values(item)[0].map((item) => {
                     return `
                          <ul class="gm__address-card" data-coord='${JSON.stringify(item.position)}'>
                          <li class="gm__address-card__name">${item.name}</li>
                          <li class="gm__address-card__address">${item.address}</li>
                          <li class="gm__address-card__pickup">${item.pickup ?? ''}</li>
                          <li class="gm__address-card__phone">
                          <a href="tel:${item.phone}">${item.phone}</a></li>
                          <li class="gm__address-card__work-time">${item['work-time']}</li>
                          </ul>
                    `
                }).join('');

                addressList.innerHTML = listHtml;

                const allNavbarCards = document.querySelectorAll('.gm__address-card');
                allNavbarCards.forEach((item) => {
                    let dataCord = item.getAttribute('data-coord');
                    dataCord = JSON.parse(dataCord);

                    const addressItem = item.querySelectorAll('.gm__address-card__address');
                    addressItem.forEach((element) => {
                        element.addEventListener('click', () => {
                            window.initMap(dataCord);
                        });
                    });
                });
            }
        });
}





