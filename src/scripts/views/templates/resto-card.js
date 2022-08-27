import CONFIG from '../../globals/config';

const restoCard = (resto) => `
    <div class="card" tabindex="0">
    <a href="#/resto/${resto.id}" class="card-header">
      <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}"/>
    </a>
    <div class="card-body">
      <span class="tag tag-teal">${resto.city}</span>
      <h4>${resto.name}</h4>
      <p class="limitText">${resto.description}</p>
      <div class="user">
        <div class="user-info">
          <h5>
          <i title="ratings" class="fa fa-star"></i>
          Rating ${resto.rating}</h5>
        </div>
      </div>
    </div>
  </div>
`;

export default restoCard;
