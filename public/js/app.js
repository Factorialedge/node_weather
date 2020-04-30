
const form=document.querySelector('form')
const search = document.querySelector('input')
const success= document.querySelector('#success')
const failure=document.querySelector('#failure')










form.addEventListener('submit',(e)=>{

failure.textContent=''
success.textContent=''

    if(search.value===''){

        console.log('empty')
        failure.textContent='It is empty'

    }

else{


    e.preventDefault()//prevent it from refreshing
    const url='http://localhost:3000/weather?search='+search.value
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
    

}


        })




    })


}
    
    







    e.preventDefault()//prevent it from refreshing


}
)