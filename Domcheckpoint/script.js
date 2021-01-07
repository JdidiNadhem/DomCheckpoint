// ************************************

//            Total  

// ************************************

function get_total(){
let qte=document.querySelectorAll(".qte");
let price=document.querySelectorAll(".price");
let total=document.querySelector(".tot_value")
// console.log(qte);
// console.log(price);
// console.log(total);
for(let i=0;i<qte.length;i++){
    let pr=price[i].innerHTML.match(/\d/g).join("");
    let prn=Number(pr);
    let qten=Number(qte[i].innerHTML);
    if(total.innerHTML=="0"){total.innerHTML="";}
let totaln=Number(total.innerHTML);
total.innerHTML=totaln+(qten*prn);
}

}
get_total();

// ************************************

//          Remove products

// ************************************

function remove_product(){
let btn_remove=document.querySelectorAll(".remove");
let product=document.querySelectorAll(".product");
let total=document.querySelector(".tot_value")
for(let i=0;i<btn_remove.length;i++){
btn_remove[i].addEventListener("click",()=>{
    product[i].remove();
    total.innerHTML="";
    get_total();
    if(total.innerHTML==""){total.innerHTML="0"}
});
}
}
remove_product();

// ************************************

//           Minus quantity

// ************************************
function min_quantity(){
let btn_minus=document.querySelectorAll(".minus");
let quentity=document.querySelectorAll(".qte");
let price=document.querySelectorAll(".price");
let total=document.querySelector(".tot_value")

for(let i=0;i<btn_minus.length;i++){
btn_minus[i].addEventListener("click",()=>{
    if( quentity[i].innerHTML>1){
    quentity[i].innerHTML--;
    let totaln=Number(total.innerHTML);
    let pricen=Number(price[i].innerHTML.match(/\d/g).join(""));
    totaln-=pricen;
    total.innerHTML=totaln;
}
});
}
}
min_quantity();

// ************************************

//            Plus quantity

// ************************************
function add_quantity(){
let btn_plus=document.querySelectorAll(".plus");
let quentity=document.querySelectorAll(".qte");
let price=document.querySelectorAll(".price");
let total=document.querySelector(".tot_value")



for(let i=0;i<btn_plus.length;i++){
btn_plus[i].addEventListener("click",()=>{   
    quentity[i].innerHTML++;
    let totaln=Number(total.innerHTML);
    let pricen=Number(price[i].innerHTML.match(/\d/g).join(""));
    totaln+=pricen;
    total.innerHTML=totaln;

});
}

}
add_quantity();

// ************************************

//            heart images

// ************************************

function click_change_heart(){
let heart=document.querySelectorAll(".fas");
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",()=>{
     if(heart[i].style.color=="red"){
         heart[i].style.color="black"
     }
      else  {
     heart[i].style.color="red"}
    });
}
}
click_change_heart();


