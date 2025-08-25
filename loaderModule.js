define("createLoading",[],function()
{
   return{
    createloader:function(){
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = '<div class="spinner"><div class="logo"></div></div>';
    document.body.appendChild(overlay);
   }
 }
});
define("customLoader",["createLoading"],function(obj)
{
    return{
        startLoading:function()
        {
             obj.createloader();
        },
    
        stopLoading:function()
        {
            let ele=document.querySelector(".overlay")
            if(ele)
            {
               ele.remove();
            }
           
        }
    }

});

// define("add",[],function()
// {
//     return
//     {
//         return "hello";
//     }
// });