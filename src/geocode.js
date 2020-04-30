const request = require('postman-request');

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZ2VlZWRnZSIsImEiOiJjazlhMTE5enowOG1yM2RucnYwa3phMHRnIn0.TT7nYJyPPtIEwyTetSzCDg&limit=1'

request({url,json:true},(error,response)=>{
if(error){
    callback('Unable to connext')
}else if(response.body.features.length===0){
    callback({
        error:'Unable to find location'
    })

}
else{

    callback(undefined,{

        latitude:response.body.features[0].center[1],
        longitude:response.body.features[0].center[0],
        location:response.body.features[0].place_name


    })
}

})

}

module.exports=geocode


