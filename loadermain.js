
require.config(
    {
        paths:
        {
            createLoader:"loaderModule",
            customLoader:"loaderModule"
        }
         
    });

require(["createLoader","customLoader"],function(create,loader)
{
    // let spinnerDiv=document.getElementById("spinner");
    let btn=document.querySelector("button");
    btn.addEventListener("click",function()
{
    loader.startLoading();
    setTimeout(function(){loader.stopLoading()},5000);
});
    // loader.stopLoading(spinnerDiv);
});