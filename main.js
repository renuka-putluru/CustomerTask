// require.config({
//     paths:
//     {
//         navbarCreation:"js/HomePage"
//     }

// });

// require(["HomePage"],function(home){
//     if(home){
//         home.navbarHeader();
//     }
// });
// require(["instructions"],function(obj)
// {
//     if(obj)
//     {
//         obj.generateInstructions();
//     }
// })
// require(["Form"],function(form)
// {
//     if(form)
//     {
//         form.createForm();
//     }

// });
// require(["addFunctionality"],function(obj)
// {
//     if(obj)
//     {
//      obj.addbutton();
//     }
// });
// require(["viewFunctionality"],function(obj)
// {
//     if(obj)
//     {
//         obj.viewbutton();
//     }
// });
// require(["editFunctionality"],function(obj)
// {
//     if(obj)
//     {
//         obj.editbutton();
//     }

// });


// require([
//   "HomePage",
//   "instructions",
//   "Form",
//   "msgBox",
//   "addFunctionality",
//   "viewFunctionality",
//   "editFunctionality",
//   "saveFunctionality",
//   "removeFunctionality"], function(home, instructions, form,obj, add, view, edit,save,remove) {

//     if (home) home.navbarHeader();
//     if (instructions) instructions.generateInstructions();
//     if (form) form.createForm();
//     if (obj) obj.msgbox();
//     if (add) add.addbutton();
//     if (view) view.viewbutton();
//     if (edit) edit.editbutton(); 
//     if (save)  save.savebutton();
//     if(remove) remove.removebutton();

// });
// require(["cancelFunctionality"],function(obj)
// {
//    if(obj)
//    {
//       obj.cancelbutton();
//    }
// })



require.config(
{
   paths:
   {
      navbarCreation:"js/libs/modules",
      instructions:"js/libs/modules",
      form:"js/libs/modules",
      msgboxCreation:"js/libs/modules",
      addFunctionality:"js/libs/modules",
      viewFunctionality:"js/libs/modules",
      editFunctionality:"js/libs/modules",
      saveFunctionality:"js/libs/modules",
      removeFunctionality:"js/libs/modules",
      cancelFunctionality:"js/libs/modules",
      validations:"js/libs/modules",
      details:"js/libs/modules",
      clearForm:"js/libs/modules",
      createLoader:"loaderModule",
      customLoader:"loaderModule"

   }
});


require([
  "navbarCreation","instructions","form","validations","details","msgboxCreation","createLoader","customLoader","addFunctionality","viewFunctionality",
  "editFunctionality","saveFunctionality","removeFunctionality","clearForm","cancelFunctionality"], 
  function(home, instructions, form,validate,detail,obj,create, loader,add, view, edit,save,remove,clear,cancel) {

    if (home) home.navbarHeader();
    if (instructions) instructions.generateInstructions();
    if (form) form.createForm();
    if (obj) obj.msgbox();
    if (add) add.addbutton();
    if (view) view.viewbutton();
    if (edit) edit.editbutton(); 
    if (save)  save.savebutton();
    if(remove) remove.removebutton();
    if(cancel) cancel.cancelbutton();

});