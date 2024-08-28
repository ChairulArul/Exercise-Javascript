let clickHere = document.getElementById('clickHere');
clickHere.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda'); 
});




// exercise - 2 add new button
let newButton = document.createElement('button')
let addNewButton = document.createTextNode('Click random')
newButton.appendChild(addNewButton)
let addButtonHtml = document.getElementById('clickHere')
newButton.setAttribute('type', 'button')
clickHere.after(newButton)

newButton.addEventListener('click' ,function(){
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    console.log(r)
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
})

// exercise 3 => slider 
const redInput = document.querySelector('input[name=red-slider')
const greenInput = document.querySelector('input[name=green-slider')
const blueInput = document.querySelector('input[name=blue-slider')

redInput.addEventListener('input', function(){
    const red = redInput.value
    document.body.style.background = 'rgb('+ red +', 100, 100)'
})
greenInput.addEventListener('input', function(){
    const red = redInput.value
    const green = greenInput.value
    document.body.style.background = 'rgb('+ red +', '+ green +', 100)'
})
blueInput.addEventListener('input', function(){
    const red = redInput.value
    const green = greenInput.value
    const blue = blueInput.value
    document.body.style.background = 'rgb('+ red +', '+ green +', '+ blue +')'
})

// task 3 => change background body 
document.body.addEventListener('mousemove', function(event){
    // posisi mouse
    // console.log(event.clientY)
    // console.log(event.clientX)

    // ukuran browser
    // console.log(window.innerWidth)
    const posX = Math.round((event.clientX / window.innerWidth)) * 255;
    console.log(posX)
    const posY = Math.round((event.clientY / window.innerHeight)) * 255;
    console.log(posY)
    document.body.style.background = 'rgb('+ posX +', 100, 100)'
    document.body.style.background = 'rgb('+ posX +', '+ posY +', 100)'
})

