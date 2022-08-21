import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import('../DATA.json').then(({ default: jsonData }) => {
  let datas = jsonData['restaurants']
  let dataList = '';
  datas.forEach(function (data) {
    dataList += `
      <div class="card">
    <div class="card-header">
      <img src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}"/>
    </div>
    <div class="card-body">
      <span class="tag tag-teal">${data['city']}</span>
      <h4>${data['name']}</h4>
      <p>${data['description'].slice(0, 150)}...</p>
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

