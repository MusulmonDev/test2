let form = document.querySelector("#form")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let ishora = document.querySelector("#ishora")
let javob = document.querySelector("#javob")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    if(ishora.value ==="+"){
        javob.textContent = Number(input1.value) + Number(input2.value)
    }else if(ishora.value ==="-"){
        javob.textContent = Number(input1.value) - Number(input2.value)
    }else if(ishora.value ==="*"){
        javob.textContent = Number(input1.value) * Number(input2.value)
    }else if(ishora.value ==="/"){
        javob.textContent = Number(input1.value) / Number(input2.value)
    }else if(ishora.value ==="**"){
        javob.textContent = Number(input1.value) ** Number(input2.value)
    }else {
        javob.textContent = Number(input1.value) % Number(input2.value)
    }
})

