const request = require('request');

const forecast = (lat,long, callback)=>{
    const _url = 'https://api.darksky.net/forecast/faff3b734980f39aa3303bc0748a3b0e/'+lat+','+long;
     
    request({url:_url, json:true},
        (error,response)=>{
            if(error){
                callback('unable to connect to location service!')

            }else if(response.body.error){
                callback('Unable to find weather. Try another search')

            }else{
                callback(undefined, response.body.daily.data[0].summary )
            }
        
        
})}

module.exports = forecast;

// forecast('84.67111', '25.56306', 

// (error,data)=>{
//     console.log(error);
//     console.log(data);
   
    

// }

//     )