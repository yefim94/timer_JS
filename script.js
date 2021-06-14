const time = document.querySelector('h1'); // stores h1 element
let second = 20; // stores the actual time in number data type
time.innerHTML = `00:0${second}`; // sets the initial number/starting time for the clock
const count = setInterval((e) => {
  second--;
  time.innerHTML = `00:0${second}`;
  if(second < 0){
  time.innerHTML = '00:00';
}
}, 1000); //updates time
