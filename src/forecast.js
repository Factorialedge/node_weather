const request=require('postman-request')




const forecast=(num1,num,callback)=>{


    
    const url ='http://api.weatherstack.com/current?access_key=0a4ed6066e59193843cfdce426586f06&query='+encodeURIComponent(num1)+','+encodeURIComponent(num)+'&units=s'
request({url,json:true},(error,respond)=>{

if(error){
callback('No network',undefined)

}

else if(respond.body.error){

    callback(respond.body.error.info,undefined)
}

else{
    callback(undefined,{

        place:respond.body.location.name,
        weather_con:respond.body.current.weather_descriptions[0]
    })


    



}


})



}






module.exports=forecast