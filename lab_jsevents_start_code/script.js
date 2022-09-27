console.log("hello world")
const enter_button = document.getElementById("enter")
const inputField=document.getElementById("new-todo")
enter_button.addEventListener("click",(evt)=>{
    evt.preventDefault()
    console.log(evt)
    const newText = inputField.value 
    console.log(newText)

    const list = document.getElementById("list")
    const newLi = document.createElement("li")
    newLi.innerText = newText
    list.appendChild(newLi)


})