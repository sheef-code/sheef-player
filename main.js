let search = document.querySelector('.form-control');
let form = document.querySelector('#form');
let display = document.querySelector('#display-content');
let token = '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=';



form.addEventListener('submit', function(event) {

   getSearch(keyword.value);

   //prevents the whole page from refreshing when submitting
   event.preventDefault()
});


function getSearch(event){
fetch(`http://api.soundcloud.com/users/${token}${event}`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    displayResult(data);
  })
}

function displayResult(data){
let content = "";
for(i = 0; i < 8; i++){
  console.log(data[i]);

let id=data[i].id;

  content+=`
  <div class="card" type="click" value=${id} id=${id} onclick=audio(${id})>
<img class="card-img-top" src="${data[i].avatar_url}" alt="Card image">
<div class="card-body">
  <h4 class="card-title">${data[i].username}</h4>
  <p>${data[i].first_name}</p>
</div>
</div>`;
}
display.innerHTML = content;
}

function audio(id){
  let audiosrc = document.querySelector("audio")
  audiosrc.src = "https://api.soundcloud.com/tracks/"+id+"/stream?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f"
}
