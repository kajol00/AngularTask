
        function ValidationCheck(){
        
            var letters = /^[A-Za-z]+$/;
            var name=document.getElementById("name").value;
            if(name.length==0){
                document.getElementById("nameerror").innerHTML="Name is Required"
                document.getElementById("name").style.borderColor = "red"
            }
            else{
            if(!(name.match(letters))){
document.getElementById("nameerror").innerHTML="Only Alphabet is allowed"
document.getElementById("name").style.borderColor = "red";

            }
            else{
                document.getElementById("nameerror").style.display="none";
                document.getElementById("name").style.borderColor = "black";

            }


        }

          
            var email=document.getElementById("email").value;
            var emailval=/([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/; 
            if(email.length==0){
                document.getElementById("emailerror").innerHTML="Email is Required"
                document.getElementById("email").style.borderColor = "red";

            }
            else{
                if(!(email.match(emailval))){
                    document.getElementById("emailerror").innerHTML="Email is Invalid"
                    document.getElementById("email").style.borderColor = "red";

                }
                else{
                    document.getElementById("emailerror").style.display="none";
                    document.getElementById("email").style.borderColor = "black";
                }
            }
            var password=document.getElementById("password").value;
            if(password.length==0){

                document.getElementById("passworderror").innerHTML="Password is Required"
                document.getElementById("password").style.borderColor = "red";

            }
            else{
                if(password.length<=7 || password.length>20){
                    console.log("password");
                document.getElementById("passworderror").innerHTML="At least 8 characters and at most 20 characters allowed"
                document.getElementById("password").style.borderColor = "red";

            }
            else{
                document.getElementById("passworderror").style.display="none";
                document.getElementById("password").style.borderColor = "black";
            }
        }
            var confirmpassword=document.getElementById("confirmpassword").value;
            if(confirmpassword.length==0){
                document.getElementById("confirmerror").innerHTML="Confirm Password is Required"
                document.getElementById("confirmpassword").style.borderColor = "red";

            }
            else{
                if(confirmpassword!==password){
                    console.log("confirm");
                    document.getElementById("confirmerror").innerHTML="Password and Confirm Password should be match"
                    document.getElementById("confirmpassword").style.borderColor = "red";

                }
                else{
                    document.getElementById("confirmerror").style.display="none";
                    document.getElementById("confirmpassword").style.borderColor = "black";

                }
            }
            var gender = document.querySelector(
                'input[name="Gender"]:checked');

            if(gender==null){
                document.getElementById("gendererror").innerHTML="Gender is Required"

            }
            else{
                document.getElementById("gendererror").style.display="none";

            }

            
            if(document.getElementById('cricket').checked == false && document.getElementById('TableTennis').checked == false && document.getElementById('Football').checked == false)
            {
                document.getElementById("Hobbieserror").innerHTML="Hobbies is Required"
            }   
            else{
                document.getElementById("Hobbieserror").style.display="none";

            }
            
            var city=document.getElementById("City").value;
            console.log(city);
            if(city==""){
                document.getElementById("cityerror").innerHTML="Select a City"
                document.getElementById("City").style.borderColor = "red";
            }
            else{
                document.getElementById("cityerror").style.display="none";
                document.getElementById("City").style.borderColor = "black";

            }
            var remark=document.getElementById("remark").value;
            if(remark.length==0){
                document.getElementById("remarkerror").innerHTML="Remark is Required"
                document.getElementById("remark").style.borderColor = "red";

            }
        else{
                if(remark.length>20){
                    console.log("hello");
                    console.log(remark.length);
                    document.getElementById("remarkerror").innerHTML="max 20 char is allowed"

                }
                else{
                    document.getElementById("remarkerror").style.display="none";
                    document.getElementById("remark").style.borderColor = "black";

                }
            }



        }

        