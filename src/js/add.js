    const add = (e) => {
    const element = e.parentNode.children[1];
    element.innerText = +element.innerText +1
}

const dec = (e) => {
    const element = e.parentNode.children[1];
    element.innerText = +element.innerText -1
    element.innerText = element.innerText <= 0 ? 0 : element.innerText = +element.innerText -1
}



    
