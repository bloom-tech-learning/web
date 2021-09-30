const URL = 'https://api.thedogapi.com/v1/bregjgjkjkgkjeds/';


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


theButton.addEventListener('click', grabTheData);
