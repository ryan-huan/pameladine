
function showDescription(descript){
    $("#description").html("Description: " + descript); 
}
function hideDescription(){
    $("#description").hide(); 
}

function validate(){

   var txtDob = $("#txtDate").val(); 
   var d = new Date(txtDob);
   if(d>= new Date()){
       alert("Date of birth is not valid. Date has to be before today. ");
       return false;  
   }
   var txtPhone = $("#phone").val(); 
   if(txtPhone.length != 10 || isNaN(txtPhone)){
       alert("Phone number is incorrect. ")
       return false; 
   }
   
}

