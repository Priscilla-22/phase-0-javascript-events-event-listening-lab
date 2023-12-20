// function addingEventListener() {

// const input = document.getElementById('button');
// function addEventListener() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', addEventListener);
// }
// addingEventListener();

//create alert using arrow function
function addingEventListener() {
  document.getElementById('button').addEventListener('click', () => alert('I was clicked!'))
}
addingEventListener();
