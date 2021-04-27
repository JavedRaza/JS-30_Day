

// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(function gettodos(res){
//         console.log(res);
//     })
//     .catch(function (error){
//         console.log(error);
//     })




function gettodos(){
    //  axios({
    //      method:'get',
    //      url:   'https://jsonplaceholder.typicode.com/todos?_limit=5'
    //  })
    //  .then(res=>{
    //       showOutput(res);
    //  })
    //  .catch(err=>{
    //      console.log(err);
    //  })
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=> showOutput(res))
    .catch(err=>console.log(err))
}

function postreq(){
    // axios({
    //     method:'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data:{
    //         id:2,
    //         title:"Go to gym",
    //         completed:true
    //     }
        
    // })
    // .then(res=>{
    //     showOutput(res);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })

    axios 
    .post( 'https://jsonplaceholder.typicode.com/todos',{
        title:'new todo'
    })
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
}


function showOutput(dat){
     document.getElementById('result').innerHTML=
`<div class="card card-body mb-4">
     <h2>Status:${dat.status}</h2>
</div>
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <pre>${JSON.stringify(dat.headers , null , 2)}</pre>
    </div>
</div>
<div>
    <div class="card-header">To-Dos</div>
    <div class="card-body">
        <pre>${JSON.stringify(dat.data , null , 2)}</pre>
    </div
</div>
<div>
    <div class="card-header">Config</div>
    <div class="card-body">
        <pre>${JSON.stringify(dat.config , null , 2)}</pre>
    </div
</div>`
}









//Event Listeners
document.getElementById("get").addEventListener('click' , gettodos);
document.getElementById("post").addEventListener('click' , postreq);