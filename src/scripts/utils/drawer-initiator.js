const DrawerInitiator = {
  init({ toggle, menu, content }) {
    toggle.addEventListener('click', (event) => {
      this._toggleDrawer(event, menu);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, menu);
    });
  },

  _toggleDrawer(event, menu) {
    event.stopPropagation();
    menu.classList.toggle('active');
  },

  _closeDrawer(event, menu) {
    event.stopPropagation();
    menu.classList.remove('active');
  },

};

export default DrawerInitiator;
