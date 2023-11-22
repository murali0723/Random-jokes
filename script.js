const jokeEl=document.getElementById("joke");
const jokebtn=document.getElementById("jokebtn");

function generatejoke(){
    const config={
        headers:{
            Accept:"application/json",
        },
    };
    fetch("https://icanhazdadjoke.com",config)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        jokeEl.innerHTML=data.joke;
    })
     .catch((err)=>{
        console.log(err);
     });

}
generatejoke();

jokebtn.addEventListener("click",generatejoke);