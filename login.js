document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const birthdate = new Date(document.getElementById('birthdate').value);
    const legalChecked = document.getElementById('legal').checked;
    const termsChecked = document.getElementById('terms').checked;


    console.log(`Full Name: ${fullName}`);
    console.log(`Username: ${username}`);
    const togglePassword1 = document.getElementById('togglePassword1');
    const password1 = document.getElementById('password1');
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.getElementById('password2');
    console.log(legalChecked ? "The user has checked the legal checkbox" : "The user has not checked the legal checkbox");
    console.log(termsChecked ? "The user has checked the terms checkbox" : "The user has not checked the terms checkbox");

    const fieldsFilled = fullName && username && password1 && password2 && !isNaN(age) && birthdate.toString() !== "Invalid Date";
    const passwordsMatch = password1.value.trim() === password2.value.trim();
    const oldEnough = age >= 13;
    const bothChecked = legalChecked && termsChecked;
    console.log("----------------------");

    console.log("fieldsFilled:", fieldsFilled);
    console.log("passwordsMatch:", passwordsMatch);
    console.log("oldEnough:", oldEnough);
    console.log("bothChecked:", bothChecked);
    if (fieldsFilled && passwordsMatch && oldEnough && bothChecked) {
      console.log("The user is eligible");
    } else {
      console.log("The user is ineligible");
    }

    const today = new Date();
    let calcAge = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      calcAge--;
    }

    if (calcAge !== age) {
      console.log("The user is not likely to be good at math");
    } else {
      console.log("The user can figure out the user's age");
    }

    });   

    togglePassword1.addEventListener('click', () => {
        
        console.log("hasd")
      const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
      password1.setAttribute('type', type);
      togglePassword1.textContent = type === 'password' ? 'Show' : 'Hide';
    });
    

    
    togglePassword2.addEventListener('click', () => {
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
      togglePassword2.textContent = type === 'password' ? 'Show' : 'Hide';
    });
    
    const legal = document.getElementById('legal');
    const terms = document.getElementById('terms');
    
    function logCheckboxStatus() {
        const legalChecked = legal.checked;
        const termsChecked = terms.checked;
    
        if (legalChecked) {
            console.log("The user has checked the legal checkbox");
        } else {
            console.log("The user has not checked the legal checkbox");
        }
    
        if (termsChecked) {
            console.log("The user has checked the terms checkbox");
        } else {
            console.log("The user has not checked the terms checkbox");
        }
    }
    
    // Add event listeners to run the check when either checkbox is clicked
    legal.addEventListener('click', logCheckboxStatus);
    terms.addEventListener('click', logCheckboxStatus);
    
 


