"use strict"

let swimmerDivs = []
let swimmerXs = []
let colors = "red, green, blue, pink, white, cyan, gray, purple, magenta, orange".split(",")
const numberOfSwimmers = 10 

let i = 0
while (i<numberOfSwimmers){
    swimmerDivs[i] = document.createElement("div")
    document.body.appendChild(swimmerDivs[i])
    swimmerDivs[i].classList.add("swimmer")
    swimmerDivs[i].style.top = i * 6 + "%"
    swimmerDivs[i].style.backgroundColor = colors[i]

    console.log(colors[1])

    swimmerXs[i] = 0
    i++
}

requestAnimationFrame(moveSwimmers)

function resetRace(){
    let i = 0
    while(i<numberOfSwimmers){
        swimmerXs[i]=0
        i++
    }
}

function moveSwimmers(){
    let i = 0
    while(i<numberOfSwimmers){
        swimmerDivs[i].style.left = swimmerXs[i] + "%"
        swimmerXs[i] += Math.random()

        if (swimmerXs[i]>90){
            alert(`${colors[i]} wins the race`)
            resetRace()
        }
        i++
    }

    requestAnimationFrame(moveSwimmers)


}





