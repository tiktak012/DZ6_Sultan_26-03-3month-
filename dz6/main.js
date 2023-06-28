const card = document.querySelector('.card')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let count = 1

const getData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(todo => {
            card.innerHTML = `
            <h2>${todo.title}</h2>
            <span>${todo.id}</span>
            <h3>${todo.completed}</h3>
        `
    })
}
btnNext.onclick = () => {
    if(count < 200){
        count++
    }
    getData(count)
}
btnPrev.onclick = () =>{
    count--
    getData(count)
}
getData(count)

///////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/posts' )
    .then((response)=>response.json())
    .then((json)=>{
        json.forEach(e=>console.log(e))
    })