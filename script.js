const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome")
const numero = document.querySelector("#numero")
const email = document.querySelector("#e-mail")
const lista = document.querySelector("#lista")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const novo_cadastro = document.createElement("li")

    const novo_nome = document.createElement("h2")
    novo_nome.textContent = `Nome: ${nome.value}`

    const novo_numero = document.createElement("p")
    novo_numero.textContent = `Número: ${numero.value}`

    const novo_email = document.createElement("p")
    novo_email.textContent = `E-mail: ${email.value}`
    
    const botao_excluir = document.createElement("button")
    botao_excluir.textContent = "Excluir"

    botao_excluir.addEventListener("click", ()=>{
        lista.removeChild(novo_cadastro)
    })

    const botao_editar = document.createElement("button")
    botao_editar.textContent = "Editar"

    botao_editar.addEventListener("click", ()=>{ 

    })

    novo_cadastro.append(novo_nome, novo_email, novo_numero, botao_editar, botao_excluir)

    lista.appendChild(novo_cadastro)

    const lista_de_cadastro = JSON.parse(localStorage.getItem("lista_de_dados")) || []

    const objeto = {
        nome: nome.value,
        numero: numero.value,
        email: email.value,
    }
    lista_de_cadastro.push(objeto)
   
    localStorage.setItem("lista_de_dados",JSON.stringify(lista_de_cadastro))


    
})



function carregarDados(){
    const lista_de_cadastro = JSON.parse(localStorage.getItem("lista_de_dados")) || []
    lista_de_cadastro.forEach((cadastro)=>{
        const novo_cadastro = document.createElement("li")

        const novo_nome = document.createElement("h2")
        novo_nome.textContent = `Nome: ${cadastro.nome}`
    
        const novo_numero = document.createElement("p")
        novo_numero.textContent = `Número: ${cadastro.numero}`
    
        const novo_email = document.createElement("p")
        novo_email.textContent = `E-mail: ${cadastro.email}}`
        
        const botao_excluir = document.createElement("button")
        botao_excluir.textContent = "Excluir"
    
        botao_excluir.addEventListener("click", ()=>{
            lista.removeChild(novo_cadastro)
        })
    
        const botao_editar = document.createElement("button")
        botao_editar.textContent = "Editar"
    
        botao_editar.addEventListener("click", ()=>{ 
    
        })
    
        novo_cadastro.append(novo_nome, novo_email, novo_numero, botao_editar, botao_excluir)
    
        lista.appendChild(novo_cadastro)
    })
}



carregarDados()















// function cadastrarContato(event){
//     event.preventDefault()
//     const cadastro_adicionado = document.createElement("li")


//     const checkbox = document.createElement("input")
//     checkbox.type = "checkbox"

//     checkbox.addEventListener("click", (event)=>{
//    if(event.target.checked === true){
//        texto.style.textDecoration="line-through"
//    }else{
//     texto.style.textDecoration="none"
//    }
//     })

//     const texto1 = document.createElement("span")
//     texto1.textContent = nome.value

//     const texto2 = document.createElement("span")
//     texto2.textContent = numero.value

//     const texto3 = document.createElement("span")
//     texto3.textContent = email.value


//     const botao_excluir = document.createElement("button")
//     botao_excluir.textContent = "Excluir"

//     botao_excluir.addEventListener("click", ()=>{
//         lista.removeChild(cadastro_adicionado)
//     })


//     cadastro_adicionado.appendChild(checkbox)
//     cadastro_adicionado.appendChild(texto1)
//     cadastro_adicionado.appendChild(texto2)
//     cadastro_adicionado.appendChild(texto3)
//     cadastro_adicionado.appendChild(botao_excluir)

//     lista.appendChild(cadastro_adicionado)
//     nome.value = ""
//     numero.value = ""
//     email.value = ""
//     nome.focus()
//     numero.focus()
//     email.focus()
// }



// formulario.addEventListener("submit", cadastrarContato)