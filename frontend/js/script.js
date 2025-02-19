//login elements
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

//chat elements
const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat__form")
const chatInput = chat.querySelector(".chat__input")

const colors =[
    "cadetblue",
    "darkgoldenroud",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]
const user= {id:"", name:"", color:""}

let websocket

const getRandomColor =() =>{
    const randomIndex = Math.floor(Math.random()* colors.length)
    return colors[randomIndex]
}

const processMessage = ({ data }) => {
    console.log(data)
}

const handLeLogin = (event) => {
    event.preventDefault()

    user.id=crypto.randomUUID()
    user.name =loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://Localhost:8080")
    websocket.onmessage = processMessage


    //websocket.onopen = () => websocket.send(`Usuário: ${user.name} entrou no chat!`);


    //console.log(user)
}

loginForm.addEventListener("submit",handLeLogin )