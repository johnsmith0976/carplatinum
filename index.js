
let hi = document.querySelector('#hi');
let search = document.querySelector('#search');
let carmodel = document.querySelector('#model');
let carmake = document.querySelector('#carmake');
let number = 5;
/* let model = prompt('model'); */
/* let model = 'fiat' */
let cars = [];


search.addEventListener('click', () => {
fetch(`https://api.api-ninjas.com/v1/cars?limit=${number}&model=${carmodel.value}&year=2019`, {
    mode: 'cors',
    headers: {
      'X-Api-Key': 'XWObGPkMRUxsBT77UHX9Lw==MGfzNjCiSqFS2g3L'
    },
  })
  .then(response => 
    response.json()
  )
  .then(submit => {
    cars = submit;
    cars.forEach((car) => {
        hi.innerHTML += `<br> <img src="https://cdn.imagin.studio/getImage?&customer=usjohnfcompany&make=${car.make}&modelFamily=${car.model}&modelYear=${car.year}" alt="${car.make} ${car.model}"> <a href='#'>${car.year} ${car.make} ${car.model}</a> <br>`
    })
  }
    )
  .catch(error => console.log('Error while fetching:', error));

});
  


//usjohnfcompany
// THIS LINK IS ITTTTTTTT
//fetch(`https://cdn.imagin.studio/getImage?&customer=usjohnfcompany&make=audi&modelFamily=a1&modelRange=a1&modelVariant=ha&modelYear=2019&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=imagin-grey&angle=01`).then(response => console.log(response)).catch(err => console.log(err));
//fetch(`https://cdn.imagin.studio/getImage?&customer=usjohnfcompany&make=audi&modelFamily=a1`).then(response => console.log(response)).catch(err => console.log(err));

//car sellinf(fa-shopping-cart), chat/customer repesentative, car buying(fa-car), loans (fa-money), car search (fa-search)
//loan estimator: cost of car, down payment, interest rate, how many years, no include taxes, return monthly payment