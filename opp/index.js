

const persons = document.querySelector('.names')
const names = ['mutuku', 'mutua','mwengi'];

names.forEach(person=>{
    persons.setAttribute('style', 'margin:0px')
    persons.innerHTML +=`<p style='font:bold'>${person}</p> `
    
})
