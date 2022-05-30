function Pc(n,m,a){
    this.name=n;
    this.number=m;
    this.address=a;
}


function getdata(e){
    e.preventDefault();

    let form=document.getElementById('confirm');

    let name=form.name.value;

    let number=form.number.value;

    let address=form.address.value;

    // console.log(name,number,address);

    let p=new Pc(name,number,address);
    console.log("p;",p);

    setTimeout(function(){
        alert("Your order is accepted");
        alert("Your order is being Prepared");
        alert("Your order is being packed");
        alert("Your order is out for delivery");
        alert("Order delivered");

    },0000,3000,8000,10000,12000)

}