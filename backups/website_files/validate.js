
	/* Validate the contact form */
	function validateContact(f){
		// Set the flag to indicate if all ok
		var bPass = true;
		
		// Check that the required fields have data present
		bPass = CheckForInput(f.txtName, "Your name") 	? bPass : false;
		bPass = CheckForInput(f.txtCompany, "Company name") 	? bPass : false;
		bPass = CheckForInput(f.txtJob, "Job title") 	? bPass : false;
		bPass = CheckForInput(f.txtTel, "Telephone number") 	? bPass : false;
		bPass = CheckForInput(f.txtEmail, "Your email address") 	? bPass : false;
	
		// Validate form and email
		if(!bPass) { alert('Please complete the highlighted fields as these are mandatory.'); return false; }
		if(!validateEmail(f.txtEmail.value))	{ alert('Please enter a valid email.'); document.f.txtemail.focus(); return false; }
	
		// If all ok, return true
		return true;
	}

	/* Called to check that a required field is present */
	// Returns true/false depending on if data present
	function CheckForInput(inp, value2check){
		// Check that there is data
		if(stripWhitespace(inp.value) == value2check){
			// Highlight the background color if fail
			inp.style.backgroundColor = 'lightpink';
			return false;
		}else{
			// Remove the background color if ok
			inp.style.backgroundColor = 'white';
			return true;
		}
	}
	
	/* Remove white space from start & end of string */
	function stripWhitespace(str) {
		str = this != window ? this : str;
		return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
	}
	
	/* Function to validate an email address */
	function validateEmail(email) {
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		return regex.test(email);
	}
