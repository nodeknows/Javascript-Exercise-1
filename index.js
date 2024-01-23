let kp1 = document.getElementById('1')
let kp2 = document.getElementById('2')
let kp3 = document.getElementById('3')
let kpdiv = document.getElementById('divide')

let kp4 = document.getElementById('4')
let kp5 = document.getElementById('5')
let kp6 = document.getElementById('6')
let kpmult = document.getElementById('multiply')

let kp7 = document.getElementById('7')
let kp8 = document.getElementById('8')
let kp9 = document.getElementById('9')
let kpmin = document.getElementById('-')

let kp0 = document.getElementById('0')
let kpdec = document.getElementById('decimal')
let kpequ = document.getElementById('equal')
let kpadd = document.getElementById('add')

let clear = document.getElementById('clear')
let input = document.getElementById('input')

input.value = localStorage.getItem('input') || ''

function filter(str) {
    str.replace('')
}

input.oninput = function(){
    localStorage.setItem('input', input.value)
}

clear.onclick = function(){
    location.reload()
}

function buttonpress(inp) {
    input.value+=inp;
}

//

kp1.onclick = function () {buttonpress(1)}
kp2.onclick = function () {buttonpress(2)}
kp3.onclick = function () {buttonpress(3)}
kpdiv.onclick = function () {buttonpress('/')}
kp4.onclick = function () {buttonpress(4)}
kp5.onclick = function () {buttonpress(5)}
kp6.onclick = function () {buttonpress(6)}
kpmult.onclick = function () {buttonpress('*')}
kp7.onclick = function () {buttonpress(7)}
kp8.onclick = function () {buttonpress(8)}
kp9.onclick = function () {buttonpress(9)}
kpmin.onclick = function () {buttonpress('-')}
kp0.onclick = function () {buttonpress(0)}
kpdec.onclick = function () {buttonpress('.')}
//kpequ.onclick = function () {buttonpress(1)}
kpadd.onclick = function () {buttonpress('+')}
