$(document).ready(function() {
	$('#myForm').validate({
	  rules: {
		name: {
		  required:true,
		  maxlength:20
		  
		},
		email: {
		  maxlength:35
		  
		
		},
		password: {
		  required: true,
		  pattern: "\\d{8}",
		},
		confirmPassword: {
		  required: true,
		  pattern: "\\d{8}",
		  equalTo: "#password"
		}
	  },
	  messages: {
		name: {
		  required: "Name is required",
		  maxlength: "Name should not exceed 20 characters"
		},
		email: {
		  maxlength: "Email should not exceed 35 characters"
		},
		password: {
		  required: "Password is required",
		  pattern: "Password should be 8 digits"
		},
		confirmPassword: {
		  required: "Confirm Password is required",
		  pattern: "Confirm Password should be 8 digits",
		  equalTo: "Passwords do not match"
		}
	  },
	  submitHandler: function(form) {
		form.submit();
	  }
	});
  });