let numero_sorteado = document.querySelector("#dado")
let img_dado = document.querySelector("#imgDado")
let btn_sortear = document.querySelector("#btnSortear")
let sorteado = document.querySelector("#sorteado")
let dado_rolando = document.querySelector("#DadoRolando")

btn_sortear.addEventListener("click", function() {
    img_dado.classList.add("animar")
    sorteado.classList.add("aparecer")

    dado_rolando.play()

    btn_sortear.style.display = "none"

    setTimeout(function() {
        numero_sorteado = getRandomInt(1,6)
        console.log(numero_sorteado)

        img_dado.setAttribute("src", "..imagens/dado/"+numero_sorteado+".png")

        sorteado.textContent = numero_sorteado

        btn_sortear.style.display = "inline-block"

        img_dado.classList.remove("animar")
        sorteado.classList.remove("aparecer")
    }, 1750)
})