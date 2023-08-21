let inp=document.querySelector("input");
let plus=document.querySelector("#plus");
let minu=document.querySelectorAll(".minus");
let ul=document.querySelector("ul");
plus.addEventListener("click",function(){
    
    if(inp.value!==""){
        let li=document.createElement("li");
        ul.appendChild(li);
        li.innerText=inp.value;

        let delBtn=document.createElement("button");
        delBtn.classList.add("minus");
        li.appendChild(delBtn);
        delBtn.innerHTML='<i class="fa-solid fa-minus">';
    }
    

    

    inp.value="";
    console.log("added");
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="I"){
        let li=event.target.parentElement.parentElement;
        li.remove();
    }
    if(event.target.nodeName=="BUTTON"){
        let li=event.target.parentElement;
        li.remove();
    }
})
