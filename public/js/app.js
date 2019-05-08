



const form = document.querySelector('form');
const input =  document.querySelector('input')



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const address = input.value;

    console.log(address);
    console.log('http://localhost:3000/weather?address='+address);
    
    
     
    fetch('http://localhost:3000/weather?address='+address).then( (response)=>{
    response.json().then((data)=>{
        console.log(data);

        document.getElementById('location').innerHTML ='<b>Location:</b>'+'   '+ data[address].location;
        document.getElementById('weather').innerHTML = '<b>Weather:</b>'+'     '+data[address].weather;


        
    })

})


})

console.log(address);

