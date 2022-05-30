// On clicking remove button the item should be removed from DOM as well as localstorage.


let arrcof=JSON.parse(localStorage.getItem("coffee")) || [];

let tot=arrcof.reduce(function(sum,el,index,arr){
    return sum+Number(el.price);
},0)
console.log(tot);
document.getElementById('total_amount').innerText=tot;



let container=document.getElementById('bucket');
container.innerHTML=null;


arrcof.forEach(function(el,index){


    let box=document.createElement('div');

        let img=document.createElement('img');
        img.src=el.image;

        // let t=document.createElement('h2');
        // t.innerText=el.type;

        let p=document.createElement('p');
        p.innerText=el.title;

        let p1=document.createElement('p');
        p1.innerText=el.price;

        let btn=document.createElement('button');
        btn.innerText="Remove";
        btn.id="remove_coffee";
         btn.addEventListener('click',function(){
            removecofee(el,index);
        });
        

        box.append(img,p,p1,btn);
        container.append(box);


})
function removecofee(el,index){
    // console.log(el,index);
    arrcof.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(arrcof));
    window.location.reload();
}