

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
        title:'new todo',
        completed:true
    })
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
}

function deletereq(){
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res =>showOutput(res))
        .catch(err => console.log(err))
}

function putreq(){
    axios
        .put('https://jsonplaceholder.typicode.com/todos/2' ,{
            title:"new todo",
            completed:true
        })
        .then(res =>showOutput(res))
        .catch(err => console.log(err))
}

function patchreq(){
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/2' ,{
            title:"new todo"
        })
        .then(res =>showOutput(res))
        .catch(err => console.log(err))
}


function simreq(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
              ])
             .then(axios.spread((todos,posts)=> showOutput(posts)))
             .catch(err=> console.log(err))
}

//interceptors 
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request  is sent to ${config.url} at ${new Date().getTime()}`);
    return config;
},error => {
    return Promise.reject(error)
});


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
document.getElementById("delete").addEventListener('click' , deletereq);
document.getElementById("put").addEventListener('click' , putreq);
document.getElementById("patch").addEventListener('click' , patchreq);
document.getElementById("sim").addEventListener('click' , simreq);