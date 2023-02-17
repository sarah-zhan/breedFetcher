const request = require('request');
const args = process.argv.slice(2);

  
const breedFetcher = (args) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    if (error) throw error;
    const data = JSON.parse(body);
    
    if (data.name !== args) return 'We dont have records of this breed.';
    console.log('data:', data)
    console.log('typeof data:', typeof data)
    console.log('first entry description:', data[0]['description'])
  
  })


}

breedFetcher(args)

