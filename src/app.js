const path = require('path');
const express = require('express');
const hbs = require('hbs');

// const require = require('require');
const geocode = require('./util/geocode');
const forecast = require('./util/forecast');


const app = express();

app.listen(3000);


//using public directory to load static path
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

// app.get('', (req,res)=>{

//     res.send('Hello Express')
// })

app.get('/weather', (req,res)=>{

if(!req.query.address){
   return res.send({
        error:'Please provide different address'
    })
}
geocode(req.query.address,
        (error,data)=>{
            if(error){
               return res.send({
                error:'Please provide different address'

               })

            }
            geoData = data;
            forecast(data.latitude, data.longitude, 

                (error,data)=>{
                    if(error){
                        return res.send({
                            error:'Please provide different address'
            
                           })
            

                    }
                    res.send(
                       {[ req.query.address]:{
                            searchedlocation: req.query.address,
                            location: geoData.location,
                             weather: data
                        }
}
                    
                       
                    )
                   
                   
                    }
                
                )
        
             
            
            }
        );





   
})


//using view directory of templates
const viewsPath = path.join(__dirname,'../templates/views');
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('', (req,res)=>{
    res.render('index')
})

app.get('/help', (req,res)=>{
    res.render('help')
})






//using partials directory of templates directory for dynamic view

const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath);

