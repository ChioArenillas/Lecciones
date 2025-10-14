/* HTML
<div id="select"></div>
*/

console.clear();

const categories = Object.freeze({
  drama: "Drama",
  action: "Action",
  crime: "Crime",
  biography: "Biography",
  adventure: "Adventure",
  comedy: "Comedy",
});


const select = document.createElement('select');
select.setAttribute('name','categories');
select.addEventListener('change', () => {
  console.log(select.value);
})

Object.entries(categories).forEach(entry => {
  const option = document.createElement('option');
  option.value = entry[0];
  option.textContent = entry[1];
  select.appendChild(option);
})

const div = document.querySelector('#select');
div.appendChild(select);
