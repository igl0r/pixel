let start_btn = document.querySelector('.start')
let board = document.querySelector('#board')
let controls = document.querySelectorAll('.controls')

let input_color = document.querySelector('.input_color')
let brush = document.querySelector('.draw')
let bucket = document.querySelector('.fill')
let eraser = document.querySelector('.erase')
let clear = document.querySelector('.clear')
let save = document.querySelector('.save')

let current_clr = '#000'
let is_eraser = false
let is_mouse_down = false

start_btn.addEventListener('click', function() {
    start_btn.style.display='none'
    board.style.display='grid'
    controls.forEach((control) => {
        control.style.display='flex'
    })

create_grid()

})

function create_grid() {
    board.innerHTML = ""
    for (let i = 0; i < 600; i++) {
        let cells = document.createElement("div")
        cells.classList.add("cell")
        board.appendChild(cells)
    cells.addEventListener('mousedown', function(){
        current_clr = input_color.value
        cells.style.backgroundColor = is_eraser ? '#212121' : current_clr
    })
    cells.addEventListener('mouseover', function(){
        if (is_mouse_down){
            current_clr = input_color.value
            cells.style.backgroundColor = is_eraser ? '#212121' : current_clr
        }
    })
    }
}

input_color.addEventListener('click', function(){
    current_clr = input_color.value
    is_eraser = false
})
brush.addEventListener('click', function(){
    current_clr = input_color.value
    is_eraser = false
    
})
eraser.addEventListener('click', function(){
    is_eraser = true
})
clear.addEventListener('click', function(){
    let cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = '#212121'
    })
})
document.addEventListener('mousedown', function(){
    is_mouse_down = true
})
document.addEventListener('mouseup', function(){
    is_mouse_down = false
})
bucket.addEventListener('click', function(){
    current_clr = input_color.value
    let cells = document.querySelectorAll('.cell')
    anime({
        targets: cells,
        backgroundColor: current_clr,
        delay: anime.stagger(1),
        duration: 1000,
        easing: 'linear',

    })
})