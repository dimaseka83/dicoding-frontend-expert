import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import '../styles/navigation.css';
import('../DATA.json').then(({ default: jsonData }) => {
  let datas = jsonData['restaurants']
  let dataList = '';
  datas.forEach(function (data) {
    dataList += `
      <div class="card" tabindex="0">
    <div class="card-header">
      <img src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}"/>
    </div>
    <div class="card-body">
      <span class="tag tag-teal">${data['city']}</span>
      <h4>${data['name']}</h4>
      <p class="limitText">${data['description']}</p>
      <div class="user">
        <div class="user-info">
          <h5>Rating ${data['rating']}</h5>
        </div>
      </div>
    </div>
  </div>
    `;
  });
  document.querySelector('.container').innerHTML = dataList;
})

// Menu Navbar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "&#9776;";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "X";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

