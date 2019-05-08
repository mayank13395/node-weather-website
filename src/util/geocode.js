const request = require('request');

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmFuamFuMTMzOTUiLCJhIjoiY2p2ZGplMnNiMXNxMjN5cDhrd3lpMDNwcyJ9.JEjFstrn_4WM-MgLwB8x2Q&limit%20=%201';

    request({url:url,json:true},
        
        (error,response)=>{
            if(error){
                callback('unable to connect to location service!')

            }else if(response.body.error){
                callback('Unable to find location. Try another search')

            }else{
                callback(undefined,{
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
            }

        }
        
        )

}

module.exports = geocode;

// geocode('arrah',
//     (error,data)=>{
//         console.log(error);
//         console.log(data);
        
        

//     }
//     )