
const form=document.querySelector('form')
const search = document.querySelector('input')
const success= document.querySelector('#success')
const failure=document.querySelector('#failure')

const bs_time=document.querySelector('#time')








form.addEventListener('submit',(e)=>{

failure.textContent=''
success.textContent=''
bs_time.textContent=''

    if(search.value===''){

        console.log('empty')
        failure.textContent='It is empty'

    }

else{


    e.preventDefault()//prevent it from refreshing
    const url='/weather?search='+search.value
    fetch(url).then((response)=>{
        response.json().then((data)=>{

            if(data.error){
                console.log(data.error)
                failure.textContent=data.error
            
            }


else{

    console.log(data.location)
    console.log(data.weathercon)
    failure.textContent=data.weathercon
    success.textContent=data.location
    bs_time.textContent="The observation time is "+data.obs_time
    

}


        })




    })


}
    
    







    e.preventDefault()//prevent it from refreshing


}
)