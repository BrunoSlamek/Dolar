const url = "https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL"
const btn = document.querySelector("#btn")
const brl = 

btn.addEventListener("click", () => {
    fetch(url, {
        method: "GET"
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        const dolar = res.USD.bid
        console.log(dolar)
    })
})