

var input=document.getElementById('age');
var result = document.getElementById('result');
//var click=document.getElementById('click')


input.addEventListener('input', age());

function results(){
  if(input.value ==''){
    result.innerHTML='please enter your age';
  }
else if(input.value< 18){
  result.innerHTML='you are too young to be here';
}
else if(input.value >18 && input.value<70){
  result.innerHTML='you are welcome drink responsibly';
}
else{
  result.innerHTML='you are too old to be here';
}
}

