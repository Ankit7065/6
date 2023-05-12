

function  myFunction(){
	var x=document.getElementById('myDIV');

	if (x.style.display==="none") {
		x.style.display= "block";
	}else{
		x.style.display= "none";
	}
};

//------------ for login form--------------

function login()
  {
    var uname = document.getElementById("typeEmailX").value;
    var pwd = document.getElementById("typePasswordX").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
      alert("please enter user name.");
    }
    else if(pwd=='')
    {
          alert("enter the password");
    }
    else if(!filter.test(uname))
    {
      alert("Enter valid email id.");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
      alert("Password min and max length is 6.");
    }
    else
    {
  alert('Thank You for Login & You are Redirecting to love food website');
  
       window.location = "https://www.youtube.com";
      }
  }

  // function clearFunc()
  // {
  //   document.getElementById("email").value="";
  //   document.getElementById("pwd1").value="";
  // } 
  
