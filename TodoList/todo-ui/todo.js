let state=[];

const render = (state) => {
    return state.reduce((acc,todo,index) => {
        const classString = todo.striked ? 'class = "striked"' : ''
        return acc+ `<li ${classString} data-index= "${index}" > ${todo.title} </li>`
    }, ' ')
}

function paint(){
    let html = render(state)
    document.getElementById('list').innerHTML = html;
}

document.getElementById('AddBtn').addEventListener('click' , e => {
    let val = document.getElementById('inptBtn').value;
    state.push({
        title: val,
        striked: false
    })
    paint()
})

document.getElementById('list').addEventListener('click' , e => {
    const index= e.target.dataset.index;
    state[index].striked = !state[index].striked;
    paint()
})

document.getElementById('DltBtn').addEventListener('click' , e => {
state = state.filter(todo => !todo.striked)
paint()
})