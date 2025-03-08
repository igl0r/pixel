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
let is_drawing = false

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
    }
}

input_color.addEventListener('click', function(){
    current_clr = input_color.value
    is_eraser = false
})
brush.addEventListener('click', function(){
    is_eraser = false
    
})