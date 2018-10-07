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
for(i = 0; i < data.length; i++){
  console.log(data[i]);
}

}
