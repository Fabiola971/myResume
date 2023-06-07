const load = document.querySelector(".presentation");
console.log("load: ", load)
const  x = load.children;
console.log("x: ", x)


let count = 1;

    
for (let index = 0; index < x.length; index++) {
    x[index].addEventListener('click', function(){
        console.log(x[index])
        if (x[index] === x[2]) {
            count++
            alert('Vous êtes la '  + count + 'è personne à télècharger mon cv.')
        } else {
            
        }

    });
    
    
}
   

 
   
 
