define("navbarCreation",[],function()
{
  return{ 
     navbarHeader:function()
            {
            let navBar=document.getElementById("navbar");
            if(navBar)
            {
            let heading=document.createElement("a");  
            heading.innerText="ECOMMERCE-STORE"
            let home=document.createElement("a");
            home.innerHTML='<i class="fa-solid fa-house"></i>Home';
            let dropdown=document.createElement("select");
            dropdown.setAttribute("id","profile");
            let option1=document.createElement("option");
            option1.value="adminProfile";
            option1.textContent="Admin Profile";
            let option2=document.createElement("option");
            option2.value="userProfile";
            option2.textContent="UserProfile";
            dropdown.appendChild(option1);
            dropdown.appendChild(option2);
            navBar.appendChild(heading);
            navBar.appendChild(home);
            navBar.appendChild(dropdown);
            // document.body.appendChild(navBar);
            }
            else
            {
                console.log("No div found");
                
            }

        }
            
    }

});
//module2  instructions 
define("instructions",[],function ()
{
      return{
        generateInstructions:function()
        {
            let instructDiv=document.createElement("div");
            instructDiv.classList.add("instruct-div");
            let ul=document.createElement("ul");
            ul.classList.add("ul-element");
            let list=["id must start with USER- and suffix with 0 and a number",
                "Mobile Number should not start with 0,1,2,3,4,5 and must conatin 10 digits",
                "email should not start with number,should have at least 7 letters(numbers also) before @, only lowercase letters",
                "password must contain 1 uppercase, 1 lowercase, 1 digit, and @ or #, and of length 8 characters"];

            list.forEach((ele)=>
            {
                 let liItem=document.createElement("li");
                 liItem.textContent=ele;
                 ul.appendChild(liItem);
            }); 
            instructDiv.appendChild(ul);
            document.body.appendChild(instructDiv);

        }
      }

});

//module3 formgeneration
define("form",[],function ()
{
    function formCreation()
    {
        let wholeContainer=document.getElementById("container");
        //h1 tag inside div append to container;
        let headDiv=document.createElement("div");
        headDiv.setAttribute("id","head-div");
        let header=document.createElement("h1");
        header.textContent="Add Customer";
        headDiv.appendChild(header); 
    
   
        //creating  form and form feilds
        let wholeForm=document.createElement("div");
        wholeForm.setAttribute("id","wholeform");

        let formDiv=document.createElement("div");
        formDiv.setAttribute("id","form-div");
        wholeForm.appendChild(formDiv);

        let forms=document.createElement("form");

        let firstRow=document.createElement("div");
        firstRow.classList.add("first-row");

        let rowDiv1=document.createElement("div");
        rowDiv1.classList.add("row-div");
        rowDiv1.classList.add("require");
        let labelForId=document.createElement("label");
        labelForId.htmlFor="ids";
        labelForId.textContent="Customer Id";
        let inputForId=document.createElement("input");
        inputForId.type="text";
        inputForId.setAttribute("id","cid");
        rowDiv1.appendChild(labelForId);
        rowDiv1.appendChild(inputForId);
        firstRow.append(rowDiv1);

        let rowDiv2=document.createElement("div");
        rowDiv2.classList.add("row-div");
        rowDiv2.classList.add("require");
         let labelForName=document.createElement("label");
        labelForName.htmlFor="name";
        labelForName.textContent="Full Name";
        let inputForName=document.createElement("input");
        inputForName.type="text";
        inputForName.setAttribute("id","name");
        rowDiv2.append(labelForName,inputForName);
        firstRow.append(rowDiv2);

        let rowDiv3=document.createElement("div");
        rowDiv3.classList.add("row-div");
        let labelForNumber=document.createElement("label");
        labelForNumber.htmlFor="number";
        labelForNumber.textContent="Mobile Number";
        let inputForNumber=document.createElement("input");
        inputForNumber.type="text";
        inputForNumber.setAttribute("id","number");
        rowDiv3.append(labelForNumber,inputForNumber);
        firstRow.append(rowDiv3);
        forms.appendChild(firstRow);

        let secondRow=document.createElement("div"); 
        secondRow.classList.add("second-row");

        let rowDiv4=document.createElement("div");
        rowDiv4.classList.add("row-div");
        rowDiv4.classList.add("require");
        let labelForEmail=document.createElement("label");
        labelForEmail.htmlFor="email";
        labelForEmail.textContent="E-mail";
        let inputForEmail=document.createElement("input");
        inputForEmail.type="email";
        inputForEmail.setAttribute("id","email");
        rowDiv4.append(labelForEmail,inputForEmail);
        secondRow.append(rowDiv4);


        let rowDiv5=document.createElement("div");
        rowDiv5.classList.add("row-div");
        rowDiv5.classList.add("require");
        let labelForPassWord=document.createElement("label");
        labelForPassWord.htmlFor="password";
        labelForPassWord.textContent="Password";
        let inputForPassWord=document.createElement("input");
        inputForPassWord.type="password";
        inputForPassWord.setAttribute("id","password");
        rowDiv5.append(labelForPassWord,inputForPassWord);
        secondRow.append(rowDiv5);

        let rowDiv6=document.createElement("div");
        rowDiv6.classList.add("row-div");
        let labelForAddress=document.createElement("label");
        labelForAddress.htmlFor="address";
        labelForAddress.textContent="Address";
        let inputForAddress=document.createElement("input");
        inputForAddress.type="text";
        inputForAddress.setAttribute("id","address");
        rowDiv6.append(labelForAddress,inputForAddress);
        secondRow.append(rowDiv6);
       
        forms.appendChild(secondRow);
        formDiv.appendChild(forms);
        wholeForm.appendChild(formDiv);
      

        //buttons creation
        let buttonDiv=document.createElement("div");
        buttonDiv.setAttribute("id","btn-div");
        let viewButton=document.createElement("button");
        viewButton.textContent="View";
        viewButton.setAttribute("id","view-btn");

        let addButton=document.createElement("button");
        addButton.textContent="Add";
        addButton.setAttribute("id","add-btn");

        let saveButton=document.createElement("button");
        saveButton.textContent="Save";
        saveButton.setAttribute("id","save-btn");

        let cancelButton=document.createElement("button");
        cancelButton.textContent="Cancel";
        cancelButton.setAttribute("id","cancel-btn");
        buttonDiv.append(viewButton,addButton,saveButton,cancelButton);
     
        wholeContainer.append(headDiv,wholeForm,buttonDiv);
        document.body.appendChild(wholeContainer);
    }

    return{
        createForm:formCreation
    }

});

//module4 msgbox
define("msgboxCreation",[],function(){

    return{
        msgbox:function()
        {
            let msgDiv=document.createElement("div");
            msgDiv.classList.add("box");
            let spanElement=document.createElement("span");
            spanElement.setAttribute("id","msg");
            msgDiv.textContent="Customer Added Succeesfully";
            msgDiv.appendChild(spanElement);
            document.body.appendChild(msgDiv);

        }
    }
});

//module5
define("addFunctionality",["details"],function(inputs)
{
  return{  
    addbutton : function ()
    {
         let b=document.querySelector("#add-btn");
        b.addEventListener("click",(e)=>
        {
            e.preventDefault();
            let cid=document.getElementById("cid").value;
            let obj=inputs.getDetails();
        if(obj)
            {
            //  arr.push(obj);   
            console.log(obj);
            if(localStorage.getItem(cid)!==null)
            {
                alert("Customer with this id already Exist");
                // clearForm();
            }
            else{
            localStorage.setItem(cid,JSON.stringify(obj));
            let element=document.querySelector(".box");
            element.style.display="block";
            setTimeout(()=> {element.style.display="none"},5000);
            console.log("customer added suceesfully");
            
        
            }
        }
  
      });
    }
 }
});

//module 6  

define("viewFunctionality",["customLoader"],function(loader)
{
return{
        viewbutton:function(){
          let b2=document.querySelector("#view-btn");
            //creating headers
                b2.addEventListener("click",(e)=>
                    {
                    e.preventDefault();  
                    loader.startLoading();
                    setTimeout(function(){loader.stopLoading()},1000);
                    let existing=document.querySelector("table");
                    if(existing)
                    {
                        existing.remove();
                    }
                    let table=document.createElement("table");
                    table.border="1";
                    table.classList.add("table-ele");
                    let tableHead=document.createElement("thead");
                    let tableHeaders=["Customer Id","Full Name","Mobile Number","E-Mail","Password","Address","Edit","Remove"];
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
                                    let row= tableBody.insertRow();
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
                                    let newEdit=document.createElement("button");
                                    newEdit.innerText="Edit";
                                    newEdit.setAttribute("class","edit");
                                    d.append(newEdit);
                                    let e=row.insertCell();
                                    let newRemove=document.createElement("button");
                                    newRemove.innerText="Remove";
                                    newRemove.setAttribute("class","remove");
                                    e.append(newRemove);

                            }

                            }
                            table.appendChild(tableBody);
                            document.body.appendChild(table);
                            
                            // table.style.visibility="visible";
                        }
                        else
                        {
                            alert("No Customer Data is Available");
                        }
                                            
                
                });
    }
  }

});

//module 7
define("editFunctionality",[],function()
{
    return{
      editbutton: function()
      {
        // let tableBody=document.querySelector("tbody");
        document.body.addEventListener("click",(e)=>
        {
            if(e.target && e.target.classList.contains("edit"))
            {
                let row=e.target.closest("tr");
                let arr=row.querySelectorAll("td");
                document.getElementById("cid").value=arr[0].textContent;
                document.getElementById("name").value=arr[1].textContent;
                document.getElementById("number").value=arr[2].textContent;
                document.getElementById("email").value=arr[3].textContent;
                document.getElementById("password").value=arr[4].textContent;
                document.getElementById("address").value=arr[5].textContent;
                document.getElementById("save-btn").style.visibility="visible";
                document.getElementById("cancel-btn").style.visibility="visible";
                document.getElementById("view-btn").style.visibility="hidden";
                document.getElementById("add-btn").style.visibility="hidden";

            }
             
        });
      }
    } 

});

//module 8
define("saveFunctionality",["validations"],function(obj){


    return{
        savebutton:function()
        {
            let b3=document.querySelector("#save-btn");
            b3.addEventListener("click", (e)=>{
                e.preventDefault();
              let cid=document.getElementById("cid").value;
              let name=document.getElementById("name").value;
              let number=document.getElementById("number").value;
              console.log(number);
              
              let email=document.getElementById("email").value;
              let password=document.getElementById("password").value;
              let address=document.getElementById("address").value;

              let tableBody=document.querySelector("tbody");
              for(let i=0;i<tableBody.rows.length;i++)
              {
                  let row=tableBody.rows[i];
                  if(cid!==null && row.cells[0].textContent===cid)
                  {
                    row.cells[0].textContent=cid;
                    row.cells[1].textContent=name;
                    if(number!=="")
                    {
                        let isNumber=obj.validateNumber(number);
                        if(isNumber===false)
                        {
                        alert("Mobile Number should not start with 0,1,2,3,4,5 and must conatin 10 digits");
                        return null;
                        }
                    }
                    row.cells[2].textContent=number;
                    if(email!=="")
                    {
                        let isEmail=obj.validateEmail(email);
                        if(isEmail===false)
                        {
                            alert("email should have at least 6 letters before @, only lowercase letters");
                            return null;
                        }
                   }
                   row.cells[3].textContent=email;
                   row.cells[4].textContent=password;
                   row.cells[5].textContent=address;
                    let object={ 
                   cname:name,
                  cnumber:number,
                  cemail:email,
                   cpassword:password,
                  caddress:address
                }
                localStorage.setItem(cid,JSON.stringify(object));
                 let element=document.querySelector(".box");
                 element.textContent="Customer Data Saved Successfully"
                element.style.display="block";
                setTimeout(()=> {element.style.display="none"},5000);
                break;
                  }
              }
          });
        }
    }
})

//module 9
define("removeFunctionality",[],function()
{
    return{
      removebutton: function()
      {
        // let tableBody=document.querySelector("tbody");
        document.body.addEventListener("click",(e)=>
        {
            if(e.target && e.target.classList.contains("remove"))
            {
                let row=e.target.closest("tr");
                let fcell=row.cells[0].textContent;

                if(confirm("do you want to remove the row") && localStorage.getItem(fcell)!==null)
                {
                    localStorage.removeItem(fcell);
                    row.remove();
                     let element=document.querySelector(".box");
                     element.textContent="Customer Removed Successfully"
                     element.style.display="block";
                     setTimeout(()=> {element.style.display="none"},5000);
                }
                
                
            }
             
        });
      }
    } 

});

//module 10

define("cancelFunctionality",["clearForm"],function(obj)
{
   return{
    cancelbutton:function()
    {
        let btn=document.getElementById("cancel-btn");
        btn.addEventListener("click",(e)=>
        {
        obj.clearform();
        document.getElementById("view-btn").style.visibility="visible";
        document.getElementById("add-btn").style.visibility="visible";
        document.getElementById("save-btn").style.visibility="hidden";
        document.getElementById("cancel-btn").style.visibility="hidden";
        });
    }
   }


});

//module 11

define("validations",[],function()
{
return{
        validateEmail:function (email)
        {
                let valid=true;
                let str=/^[^0-9][a-zA-Z0-9]{7,}@[a-z]+\.[a-z]+$/;
                if(str.test(email))
                {
                return valid;
                }
                else{
                    alert("email should not start with number,should have at least 7 letters(numbers also) before @, only lowercase letters");
                    valid=false;
                }
                return valid;
        },
        validatePassword:function (password)
        {
                let valid=true;
                let str=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#.])[a-zA-Z\d@#]{8,}$/;

                if(str.test(password))
                {
                    return valid;
                }
                else{
                    alert("password must contain 1 uppercase, 1 lowercase, 1 digit, and @ or #, and of length 8 characters");
                    valid=false;
                }
                return valid;
        },
        validateNumber:function (number)
        {
                    let str=/^[^012345][0-9]{9}$/;
                    return str.test(number);

        }
}
 
});

//module 12

define("details",["validations"],function (obj){
return {
  getDetails:function()
  {
   
    let cid=document.getElementById("cid").value;
    if(cid===null)
    {
        alert("please enter id ,its mandatory");
        return null;
    }
    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let email=document.getElementById("email").value;
    if(name==="")
    {
        alert("please enter full name,its mandatory");
        return null;
    }
    if(email==="")
    {
        alert("please enter email,its mandatory");
         return null;
    }
    let password=document.getElementById("password").value;
    if(password==="")
    {
         alert("please enter password,its mandatory");
         return null;
    }
    let address=document.getElementById("address").value;
    // console.log(cid,name,number,email,password,address);
    if(number!=="")
    {
            let isNumber=obj.validateNumber(number);
            if(isNumber===false)
            {
            alert("Mobile Number should not start with 0,1,2,3,4,5 and must conatin 10 digits");
            return null;
            }
    }
    let ispassword=obj.validatePassword(password);
    let isEmail=obj.validateEmail(email);
    if( !ispassword ||!isEmail )
    {
        return null;
    }
     return {
        // "cid":cid,
        cname:name,
        cnumber:number,
        cemail:email,
        cpassword:password,
        caddress:address
       }
    
  
   
 }
}

});

//module 13

define("clearForm",[],function()
{
    return{
        clearform:function()
        {
            document.getElementById("cid").value="";
            document.getElementById("name").value="";
            document.getElementById("number").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("address").value="";
    
        }
    }
});