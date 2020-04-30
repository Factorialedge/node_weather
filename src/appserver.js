const express = require('express')
const hbs = require('hbs')
const path = require('path')
const forecast=require('./forecast')
const geocode=require('./geocode')


console.log(__dirname)
//console.log(__filename) for the file

//const thepath=path.join(__dirname,'../public')
const app = express()

//way to customixe
const publicDirectoryPath = path.join(__dirname, '../public')

const viewspath=path.join(__dirname, '../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')


//set express module
//defaukt
app.set('view engine', 'hbs')
hbs.registerPartials(partialspath)
//custom use of path to set it 
app.set('views', viewspath)
//for hbs




//setup static directory
app.use(express.static(publicDirectoryPath))



//express is a function not an object

app.get('',(req,res)=>{

   
    //what is going to be replied to the request
    //render to send the  view file
    //render can set values to the file using an object and can be worked on from here
    //in a vgag form
     res.render('vindex',{

title:'weather app',
name:'Gerald EDGE'

     })
 
 
 })




 app.get('/about',(req,res)=>{
//render works on the file
res.render('vabout',{

    name:"Abs"
})
 })



//what server will do when it has been accesse

 app.get('/weather',(req,res)=>{

if(!req.query.search){
    res.send({
        error:'eroor'
    })
}

else{

geocode(req.query.search,(error,{latitude,longitude}={})=>{
if(error){
    res.send(error)
}

else{
forecast(latitude,longitude,(error,data1)=>{
    if(error){
         res.send(error)
    }

    else{

        res.send({
            latitude,
            longitude,
            location:data1.place,
            weathercon:data1.weather_con



        })
    }
})

}



})



}
    








 })
    



app.get('/help',(req,res)=>{

res.render('vhelp',{
help: "Help"


})

})

app.get('/help/*',(req,res)=>{

    res.render('v404art')
})



app.get('/products',(req,res)=>
{//send once received once with https
    if(!req.query.search){

        res.send({
            error:"error provide search"
        })

    }
else{

res.send({
    products:[]
})
}
})






app.get('*',(req,res)=>{
    res.render('v404')
    
    
    
    })
    



app.listen(3000,()=>{

    console.log('runnniing')
})





//to set up there server to run on a port 
//route
//asynchronuous 




//stays up to losten to request to process