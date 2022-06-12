const url = "https://api.kanye.rest";

fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let kwQuote = document.querySelector("h2").innerHTML = data.quote;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    document.querySelector("button").addEventListener("click",  newQuote);

    function newQuote() {   
        fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let kwQuote = document.querySelector("h2").innerHTML = data.quote;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    }