/* const URL = 'https://api.thedogapi.com/v1/bregjgjkjkgkjeds/';


const grabTheData = (event) => {
    console.log('about to fetch data!')
    axios.get(URL + 1)
        .then (res => {
            console.log(res.data)
            event.target.textContent = res.data.name
        })           
        .catch (err => {
            debugger
        })
}


document.addEventListener('click', grabTheData); */

setTimeout( () => {
    console.log('Hello!');
}, 1000);

console.log('Over here!');

let time = 0;
const timeMachine = () => {
  return setTimeout(() => {
    return time += 1000;
  }, 1000);
};

timeMachine();
console.log(time); 

setTimeout( () => {
    console.log(time); 
}, 2000);

