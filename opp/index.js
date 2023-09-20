
function fun (name) {
   // alert ('hallo ' + name)
    
}
function greetings(callback) {
   //var name = prompt('enter name')
   callback(name)
}
greetings(fun);





function makeFunc (){
    var name= "mozila";
    function dispName(){
        alert(name);

    }
    return dispName;
}
var myFunc = makeFunc()
myFunc();
