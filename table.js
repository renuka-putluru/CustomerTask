let tableDiv=document.createElement("div");
tableDiv.classList.add("table-div");
  let deleteButton=document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerText="Delete";
  // tableDiv.appendChild(deleteButton);
  
    let innerDiv=document.createElement("div");
    innerDiv.classList.add("inner-div");
           let table=document.createElement("table");
                    table.border="2";
                    table.classList.add("table-ele");
                    let tableHead=document.createElement("thead");
                    let tableHeaders=["","Customer Id","Full Name","Mobile Number","E-Mail","Password","Address","Edit","Remove"];
                    let firstRow=document.createElement("tr");
                    tableHeaders.forEach((ele)=>
                    {
                        let cell=document.createElement("th");
                        cell.textContent=ele;
                        firstRow.appendChild(cell);
                    }); 
                    tableHead.appendChild(firstRow);
                    table.appendChild(tableHead);
                  //tableBody generation
                    let tableBody=document.createElement("tbody");
                        if(localStorage.length>0)
                        {
                            for(let i=0;i<localStorage.length;i++)
                            {
                            let keys=localStorage.key(i);
                            let  obj=JSON.parse(localStorage.getItem(keys));
                            if(obj!==null)
                            {
                                   let checkbox=document.createElement("input");
                                   checkbox.type="checkbox";
                                   checkbox.name="ticked";
                    

                                    let row= tableBody.insertRow();
                                    let c0=row.insertCell();
                                    c0.append(checkbox);
                                    let col=row.insertCell();
                                    col.textContent=keys;//for id 
                                    col.style.padding="5px";
                                    for(let key in obj)
                                    {
                                        let c=row.insertCell();
                                        c.textContent=obj[key];
                                        c.style.padding="5px";
                                    
                                    }
                                    let d=row.insertCell();
                                    // let newEdit=document.createElement("button");
                                    d.innerHTML='<i class="fa-solid fa-pencil" id="edit"></i>';
                                    // newEdit.setAttribute("class","edit");
                                    // d.append(newEdit);
                                    let e=row.insertCell();
                                    // let newRemove=document.createElement("button");
                                    // newRemove.innerText="Remove";
                                    e.innerHTML='<i class="fa-solid fa-trash" id="delete"></i>'
                                    // newRemove.setAttribute("class","remove");
                                    // e.append(newRemove);

                            }

                            }
                            table.appendChild(tableBody);
                            // tableDiv.appendChild(deleteButton);
                            innerDiv.appendChild(table);
                            tableDiv.append(deleteButton,innerDiv);
                            document.body.appendChild(tableDiv);
                        }

//getting all the values who got checked

// let a=document.querySelectorAll('input[name="Animal"]:checked');
// a.forEach((cb)=>
// {
//     console.log(cb.value);
    
// })

// let b=document.querySelectorAll('input[name="Animal"]:not(:cheked)');
// console.log(b);





let tablebody=document.querySelector("tbody");
tablebody.addEventListener("click",(e)=>
{
    // e.preventDefault();
    if(e.target && e.target.classList.contains("fa-pencil"))
    {
      Swal.fire(
      {
        icon:"question",
        title:"Do you want to edit",
        showCancelButton:true,
        cancelButtonText:"No",
        cancelButtonColor:"#d33",
        confirmButtonText:"Yes"

      });
    }

     if(e.target && e.target.classList.contains("fa-trash"))
    {
      Swal.fire(
      {
        icon:"question",
        title:"Do you want to delete",
        showCancelButton:true,
       cancelButtonColor:"#d33",
       confirmButtonText:"Ok delete"
      }).then((result)=>
        {
             if(result.isConfirmed)
                {
                    Swal.fire({
                        icon:"success",
                        title:"Deleted!",
                        text:"Data deleted Successfully",
                        confirmButtonColor:"#00ff00"

                    })
                }
               
        })
    }

  

});
let btn=document.querySelector(".delete-btn");
tableBody.addEventListener("change",(e)=>
{
     if(e.target && e.target.type==="checkbox")
     {
        let allchecked=document.querySelectorAll('input[type="checkbox"]:checked');
        // console.log(allrows);
        if(allchecked.length>1)
        {
            btn.style.display="block";
            btn.addEventListener("click",()=>
            {
                Swal.fire({icon:"question",text:"do you want to delete all selected rows",showCancelButton:true}).then((result)=>
                {
                  if(result.isConfirmed)
                  {
                          allchecked.forEach((check)=>
                         {
                          let row=check.closest("tr");
                          if(row)
                          {
                            row.remove();
                          }
                         });
                     btn.style.display="none";
                  }
                });
               
            });
        }
        else{
          btn.style.display="none";
        }
        
     }
});

