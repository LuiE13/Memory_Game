const emojis = [
    "🐔",
    "🐔",
    "🦏",
    "🦏",
    "🦥",
    "🦥",
    "🐥",
    "🐥",
    "🐞",
    "🐞",
    "👽",
    "👽",
    "👻",
    "👻",
    "☠",
    "☠"
]
let openCards = []

let shufleEmojis = emojis.sort(()=>Math.random()>0.5? 2:-1)

for (let index = 0; index < emojis.length; index++) {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shufleEmojis[index]
    box.onclick = handleClick
    document.querySelector(".game").appendChild(box)
}

function handleClick() {
    if (openCards.length<2) {
        this.classList.add("boxOpen")
        openCards.push(this)
        this.onclick = ''
    }

    if (openCards.length==2) {
        setTimeout(cehckMath, 500)
    }
}

function cehckMath() {
    if(openCards[0].innerHTML===openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
        openCards[0].onclick = ""
        openCards[1].onclick = ""
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
        openCards[0].onclick = handleClick
        openCards[1].onclick = handleClick
    }
    openCards=[]

    if (querySelectorAll('boxMatch').length==emojis.length) {
        alert("Você venceu!")
    }
}