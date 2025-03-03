let start_btn = document.querySelector('.start')
let board = document.querySelector('#board')
let context = board.getContext('2d')
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
let cell_size = 30

start_btn.addEventListener('click', function() {
    start_btn.style.display='none'
    board.style.display='block'
    controls.forEach((control) => {
        control.style.display='flex'
    })

create_grid(20, 30, 30)

})

function create_grid (rows, columns, size) {
    board.width=columns*size
    board.height=rows*size

    for (let i = 0; i <= rows; i++) {
        context.beginPath()
        context.moveTo(0, i*size)
        context.lineTo(board.width, i*size)
        context.stroke()
    }
    for (let i = 0; i <= columns; i++) {
        context.beginPath()
        context.moveTo(i*size, 0)
        context.lineTo(i*size, board.height)
        context.stroke()
    }
    board.addEventListener('mousedown', start_drawing)
    board.addEventListener('mousemove', draw)
    board.addEventListener('mouseup', stop_drawing)

}

function start_drawing (event) {
    is_drawing = true
    draw(event)
}

function draw(event) {
    if (!is_drawing) return
    let x = Math.floor(event.offsetX / cell_size) * cell_size
    let y = Math.floor(event.offsetY / cell_size) * cell_size

    if (is_eraser) {
        context.clearRect(x, y, cell_size, cell_size)
        context.strokeStyle = '#000'
        context.lineWidth = 1
        context.strokeRect(x, y, cell_size, cell_size)
    }
    else {
        context.fillStyle = current_clr
        context.fillRect(x, y, cell_size, cell_size)
    }
}

function stop_drawing() {
    is_drawing = false
}

brush.addEventListener('click', function(){
    is_eraser = false
    current_clr = input_color.value
})

eraser.addEventListener('click', function(){
    is_eraser = true
})
bucket.addEventListener('click', function(){
    current_clr = input_color.value
    context.fillStyle = current_clr
    context.fillRect(0, 0, board.width, board.height)
    context.strokeStyle='black'
    context.lineWidth=1
    for (let i = 0; i < board.height/cell_size; i++) {
        context.beginPath()
        context.moveTo(0, i*cell_size)
        context.lineTo(board.width, i*cell_size)
        context.stroke()
    }
    for (let i = 0; i < board.width/cell_size; i++) {
        context.beginPath()
        context.moveTo(i*cell_size, 0)
        context.lineTo(i*cell_size, board.height)
        context.stroke()
    }
})
clear.addEventListener('click', function(){
    context.clearRect(0, 0, board.width, board.height)
    create_grid(20, 30, cell_size)
})