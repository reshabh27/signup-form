
$(document).ready(function () {
	$("#btnLogin").click(function (e) {
		e.preventDefault();
		var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
		var email = $("#txtEmail").val();
		var pwd = $("#txtPwd").val();
		var name= $("#txtName").val();
		var checklist=["#txtEmail","#txtPwd","#txtName"];
		for(var i=0;i<3;i++)
		{
			if(i==0)
			{
				if (!emailRegex.test(email)) 
				{
					// $("#txtEmail").focus();
					document.getElementById("txtEmail").style.border = "2px solid hsl(0, 100%, 74%)" ;
					document.getElementById("txtEmail").style.color = "hsl(0, 100%, 74%)";
					$("#errorBox2").html("Looks like this is not an email");

					i++;
				}
			}
			if(($(checklist[i]).val())=="")
			{
				// $(checklist[i]).focus();
				if(i==0)
				{

					$("#errorBox2").html("Email cannot be empty");
					document.getElementById("txtEmail").style.border = "2px solid hsl(0, 100%, 74%)" ;
					document.getElementById("txtEmail").style.color = "hsl(0, 100%, 74%)";
				}
				else if(i==1)
				{
					$("#errorBox3").html("Password cannot be empty");
					document.getElementById("txtPwd").style.border = "2px solid hsl(0, 100%, 74%)" ;
					document.getElementById("txtPwd").style.color = "hsl(0, 100%, 74%)";
				}
				else
				{
					$("#errorBox1").html("First Name cannot be empty");
					document.getElementById("txtName").style.border = "2px solid hsl(0, 100%, 74%)" ;
					document.getElementById("txtName").style.color = "hsl(0, 100%, 74%)";
				}
			}
		}
		if( emailRegex.test(email))
		{
			$("#errorBox2").html("");
			document.getElementById("txtEmail").style.border = "1px solid #979494" ;
			document.getElementById("txtEmail").style.color = "black";
		}
		if(pwd!="")
		{
			$("#errorBox3").html("");
			document.getElementById("txtPwd").style.border = "1px solid #979494" ;
			document.getElementById("txtPwd").style.color = "black";
		}
		if(name!="")
		{
			$("#errorBox1").html("");
			document.getElementById("txtName").style.border = "1px solid #979494" ;
			document.getElementById("txtName").style.color = "black";
		}
		
		// if($("#txtEmail").val() == "" && $("#txtPwd").val() == "" && $("#txtName").val() == "")
		// {
		// 	$("#txtEmail").focus();
		// 	$("#errorBox").html("Please Enter Email");
		// 	$("#txtPwd").focus();
		// 	$("#errorBox").html("Please Enter Password");
		// 	$("#txtName").focus();
		// 	$("#errorBox").html("Please Enter valid Name");
		// }
		// else if(email=="" && pwd=="")
		// {
		// 	$("#txtEmail").focus();
		// 	$("#errorBox").html("Please Enter Email");
		// 	$("#txtPwd").focus();
		// 	$("#errorBox").html("Please Enter Password");
		// 	$("#txtName").focus();
		// }
		// else if(email=="" && name=="")
		// {
		// 	$("#txtEmail").focus();
		// 	$("#errorBox").html("Please Enter Email");
		// 	$("#txtName").focus();
		// 	$("#errorBox").html("Please Enter valid Name");
		// }
		// else if(name=="" && pwd=="")
		// {

		// }




		// if ($("#txtEmail").val() == "") {
		// 	$("#txtEmail").focus();
		// 	$("#errorBox").html("Please Enter Email");
		// 	return false;
		// } else if (!emailRegex.test(email)) {
		// 	$("#txtEmail").focus();
		// 	$("#errorBox").html("Please Enter Valid Email");
		// 	return false;
		// } else if ($("#txtPwd").val() == "") {
		// 	$("#txtPwd").focus();
		// 	$("#errorBox").html("Please Enter Password");
		// 	return false;
		// } else if ($(email != "" && pwd != "")) {
			// $.cookie('username', 'demo', { expires: 1 });
			// var currentusr = $.cookie('username');
			// window.location.href = 'Register.html';
		// }
	});
});
