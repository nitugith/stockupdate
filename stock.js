function stockcheck(event){
    event.preventDefault();
    const stockupdate ={
        nameitem: event.target.nameitem.value ,
        description: event.target.description.value ,
        quantity: event.target.quantity.value
    }
    axios.post("https://crudcrud.com/api/1205395d85794633a383a67bfacd4672/stockupdate",stockupdate)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    document.getElementById("nameitem").value="";
    document.getElementById("description").value="";
    document.getElementById("quantity").value="";

    DisplayOnScreen(stockupdate)
}
 window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/1205395d85794633a383a67bfacd4672/stockupdate")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            DisplayOnScreen(res.data[i])
          }
    })
    .catch((err)=>{
        console.log(err)
    })
 })

 function DisplayOnScreen(stockupdate){
    const useritem=document.createElement("li");
    useritem.appendChild( document.createTextNode(` ${stockupdate.nameitem} - ${stockupdate.description} - ${stockupdate.quantity}`)  )
     
    const buyone=document.createElement("button");
    buyone.appendChild(document.createTextNode("Buy One"));
    useritem.appendChild(buyone);
   
   const buytwo=document.createElement("button");
    buytwo.appendChild(document.createTextNode("Buy Two"));
    useritem.appendChild(buytwo);
    
    const buythree=document.createElement("button");
    buythree.appendChild(document.createTextNode("Buy Three"));
    useritem.appendChild(buythree);

  const itemlist=document.querySelector("ul");
  itemlist.appendChild(useritem)

  buyone.addEventListener("click",function(event){
    
    console.log(num)
    axios.put(`https://crudcrud.com/api/1205395d85794633a383a67bfacd4672/stockupdate/${stockupdate._id}`,{
        quantity:  num,
    })
      
  })
  buytwo.addEventListener("click",function(event){
    axios.put(`https://crudcrud.com/api/1205395d85794633a383a67bfacd4672/stockupdate/${stockupdate._id}`,
        {
            quantity: num-2,
        }
    )
  })
  buythree.addEventListener("click",function(event){
    axios.put(`https://crudcrud.com/api/1205395d85794633a383a67bfacd4672/stockupdate/${stockupdate._id}`,
        {
            quantity: num-3,
        }
    )
  })
 }
