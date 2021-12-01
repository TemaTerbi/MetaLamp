const add = (e) => {
    const element = e.parentNode.children[1];
    element.innerText = +element.innerText +1
    if (element.innerText > 0) {
        document.getElementById('clear').classList.add('vis')
        document.getElementById('minus').classList.add('opacity')
    } 
} 


const dec = (e) => {
    const element = e.parentNode.children[1];
    element.innerText = +element.innerText -1
    element.innerText = element.innerText <= 0 ? 0 : element.innerText = +element.innerText -1
    if (element.innerText <= 0) {
        document.getElementById('clear').classList.remove('vis')
        document.getElementById('minus').classList.remove('opacity')
           
    } 
}

function clear() {
    document.getElementById('test').innerText = 0;
}



    
