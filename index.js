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
            const totalValueUs = (brl.value.toString().replace(",", ".") * item.bid).toFixed(2)
            foreign.value = ` ${totalValueUs.toString().replace("." , ",")}`
            if (!parseFloat(brl.value)) {
                brl.value = ""
                foreign.value = ""
                alert("VALOR INVÁLIDO!")
            }
        }))
})

foreign.addEventListener("keypress", () => {
    fetch(urlUsdBrl, {
            method: "GET"
        })
        .then(res => res.json())
        .then(res => res.map(item => {
            console.log(item)
            const totalValueBr = (foreign.value.toString().replace(",", ".") * item.bid).toFixed(2)
            brl.value = ` ${totalValueBr.toString().replace("." , ",")}`
            if (!parseFloat(foreign.value)) {
                foreign.value = ""
                brl.value = ""
                alert("VALOR INVÁLIDO!")
            }
        }))
})