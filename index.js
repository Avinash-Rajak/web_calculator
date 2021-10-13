let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button')
for(item of buttons){
    item.addEventListner('click', (e) =>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
    }
    )
        
}