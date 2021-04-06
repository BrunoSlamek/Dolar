const urlBrlUsd = "https://economia.awesomeapi.com.br/json/USD-BRL"
const urlUsdBrl = "https://economia.awesomeapi.com.br/json/BRL-USD"
const btn = document.querySelector("#btn")
const brl = document.querySelector("#brl") 
const foreign = document.querySelector("#foreign")

brl.addEventListener("keypress", () => {
    fetch(urlBrlUsd, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res.map(item => {
        console.log(item)
        foreign.value = (brl.value * item.bid).toFixed(2)
    }))
})

foreign.addEventListener("keypress", () => {
    fetch(urlUsdBrl, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res.map(item => {
        console.log(item)
        brl.value = (foreign.value * item.bid).toFixed(2)
    }))
})