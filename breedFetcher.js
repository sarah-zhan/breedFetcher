const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.name !== args) return 'We dont have record of this breed.';
  if (error) throw error;
  console.log('data:', data)
  // console.log('typeof data:', typeof data)
  console.log('first entry description:', data[0]['description'])
    
  })



