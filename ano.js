function validate(){
 
    let email=document.getElementById("email");
    let error=document.getElementById("error");
    
    
        let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
        if(regexp.test(email.value)){
    error.innerHTML="valid";
    error.style.color="green";
    return true;
    
        }
    
    else{
        error.innerHTML="invalid";
        error.style.color="red";
        return false;
    }
    }
    
    
    function phonenumber(){
    let phnnumber=document.getElementById("phnnumber");
    let wrong=document.getElementById("wrong");
    
    
        let regexp=  /^[\+]?[0-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    
    if(regexp.test(phnnumber.value))
          {
        wrong.innerHTML="valid";
        wrong.style.color="green";
        return true;
          }
        else
          {
          wrong.innerHTML="Enter in valid format";
          wrong.style.color="red";
          return false;
          }
    
     }
     
    let myinput=document.getElementById("confirm");
    let detect=document.getElementById("detect");
    
    
    // //  function validation(){
    // //   let regexp =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W)$/
    // //   let regex = /^(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))$/
    // // if(regexp.test(myinput.value)){
    // //   detect.innerHTML="strong";
    // //   detect.style.color="green";
    // //   return true;
    // // }
    // // else if(regex.test(myinput.value)){
    // //   detect.innerHTML="medium";
    // //   detect.style.color="yelow";
    // //   return true;
    
    // // }
    // // else{
    // //   detect.innerHTML="poor";
    // //   detect.style.color="red";
    // //   return false;
    // // }
    // //  }
    
    
    function validation(){
      let regexp =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
      let regex = /^(?=.*[^a-z0-9]).{8,12}$/;
      
    if(regexp.test(myinput.value)){
      detect.innerHTML="strong";
      detect.style.color="green";
      return true;
    }
    else if(regex.test(myinput.value)){
      detect.innerHTML="medium";
      detect.style.color="orange";
      return true;
    
    }
    else {
      detect.innerHTML="poor"; 
      detect.style.color="red";
      return false;
    }
     }
    
     
    
    
    function validating(){
      let confirm=document.getElementById("confirm");
      let matching=document.getElementById("confirm-password");
      let vision=document.getElementById("vision");
      if(confirm.value===matching.value){
        vision.innerHTML="match";
        vision.style.color="green";
        return true;
      }
      else{
        vision.innerHTML="not match";
        vision.style.color="red";
        return false;
       }
     }
    
    function Toggle() {
      var temp = document.getElementById("confirm");
      if (temp.type === "password") {
          temp.type = "text";
      }
      else {
          temp.type = "password";
      }
    }
    
    
    // function validation()
    // {
    //   let myinput=document.getElementById("confirm");
    //   let detect=document.getElementById("detect");
    //     let regexp=  /^[\+]?[0-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    
    // if(regexp.test(myinput.value))
    //       {
    //     detect.innerHTML="valid";
    //     detect.style.color="green";
    //     return true;
    //       }
    //     else
    //       {
    //       detect.innerHTML="Enter in valid format";
    //       detect.style.color="red";
    //       return false;
    //       }
    
    // }
    
    // function function_one() {
    //   // function_two();
    //   let email=document.getElementById("email");
    // let error=document.getElementById("error");
    
    
    //     let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    //     if(regexp.test(email.value)){
    // error.innerHTML="valid";
    // error.style.color="green";
    // return true;
    
    //     }
    
    // else{
    //     error.innerHTML="Enter in valid format";
    //     error.style.color="red";
    //     return false;
    // }
    
    // }
    
    // function function_two() {
    //   // function_three();
    
    // let phnnumber=document.getElementById("phnnumber");
    // let wrong=document.getElementById("wrong");
    
    
    //     let regex=  /^[\+]?[0-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    
    // if(regex.test(phnnumber.value))
    //       {
    //     wrong.innerHTML="valid";
    //     wrong.style.color="green";
    //     return true;
    //       }
    //     else
    //       {
    //       wrong.innerHTML="Enter in valid format xxx xxx xxxx";
    //       wrong.style.color="red";
    //       return false;
    //       }
    // }
    
    // function function_three(){
    //   let confirm=document.getElementById("confirm");
    //   let matching=document.getElementById("confirm-password");
    //   let vision=document.getElementById("vision");
    //   if(confirm.value===matching.value){
    //     vision.innerHTML="match";
    //     vision.style.color="green";
    //     return true;
    //   }
    //   else{
    //     vision.innerHTML="not match";
    //     vision.style.color="red";
    //     return false;
    //    }
    
    // }
    function valid(){
        
      let email=document.getElementById("email");
      let error=document.getElementById("error");
      
      
          let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
          if(regexp.test(email.value)){
      error.innerHTML="valid";
      error.style.color="green";
      return true;
      
          }
      
      else{
          error.innerHTML="invalid";
          error.style.color="red";
          return false;
      }
      }
      
    
    
    
    