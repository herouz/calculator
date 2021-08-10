let themeToggle = document.querySelector('.theme-toggle')
let toggleBtn = document.querySelector('.toggle-btn')
let display = document.querySelector('.display')


//to change the themes
let condition = 1
function toggler(){
    condition !== 3 ? condition += 1 : condition = 1

    if(condition===1){
        toggleBtn.style.left='2px'
        document.querySelector('body').classList ? document.querySelector('body').classList.remove('third-theme'):''
    }
    else if(condition===2){
        toggleBtn.style.left ='calc(50% - 8px)'
        document.querySelector('body').classList.add('second-theme')
    }
    else{
        toggleBtn.style.left ='calc(100% - 18px)'
        document.querySelector('body').classList.remove('second-theme')
        document.querySelector('body').classList.add('third-theme')
    }

}

// for responsiveness for fontsizes
function fontSize(){
    if (display.innerText.length >= 14 && display.innerText.length<25){
        document.querySelector('.display-action p').style.fontSize = '20px'
    }
    else if (display.innerText.length >= 25){
        display.innerText.length===25?alert('Siz faqat 25 xonali songacha yoza olasiz!'):''
        document.querySelector('.display-action p').style.fontSize = '16px'
        let value = display.innerText
        display.innerText = value.slice(0,25)
    }
    else {
        document.querySelector('.display-action p').style.fontSize = '36px'
    }
}
//to clear display screen
function clearScreen(){
    display.innerText=''
}

// to write number or operator to display screen
function getValues(text){
    display.innerText+=text
    fontSize()
}

// to remove last element in the display screen
function delValues(){
    let value=display.innerText
    display.innerText=value.slice(0,value.length-1)
}

// to find the result of operations
function getResult(){
    if(display.innerText){
        display.innerText = eval(display.innerText)
        fontSize()
    }
}


