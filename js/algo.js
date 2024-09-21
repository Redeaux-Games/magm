fetch('https://free-api.vestige.fi/asset/445362421/price')
.then(res => {
  console.log(res);
  return res.json();
})
.then(data => {
 console.log(data.price);
   const markup = `<a>${data.price.toFixed(7)}</a>`;
   document.querySelector('span').insertAdjacentHTML('beforeEnd', markup);
})
.catch(error => console.log(error));