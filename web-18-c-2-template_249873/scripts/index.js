// Add the coffee to local storage with key "coffee"

async function cofee(){

    let url=" https://masai-mock-api.herokuapp.com/coffee/menu";

    let res=await fetch(url);

    let data=await res.json();
    append(data.menu.data);
    console.log("data:",data);
}
cofee();

function append(data){

    let container=document.getElementById("menu");
    container.innerHTML=null;-
    
    data.forEach(function(el){

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
        btn.innerText="Add to Bucket";
        btn.id="add_to_bucket";
        btn.addEventListener('click',function(){
            addcofee(el);
        })
        

        box.append(img,p,p1,btn);
        container.append(box);
        
    })
}

let arrcof=JSON.parse(localStorage.getItem("coffee")) || [];

let l=arrcof.length;
console.log(l);
document.getElementById('coffee_count').innerText=l;
// window.location.reload();

function addcofee(el){
    console.log(el);
    arrcof.push(el);
    localStorage.setItem("coffee",JSON.stringify(arrcof));

}
