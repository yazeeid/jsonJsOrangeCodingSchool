document.getElementById('switchToLogin').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('loginform').classList.add('active');
    document.getElementById('registerform').classList.remove('active');
});

document.getElementById('switchToRegister').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('registerform').classList.add('active');
    document.getElementById('loginform').classList.remove('active');
});


function lala3(event){
    event.preventDefault();
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = { firstName, lastName, email, password };
    let message = sign(user);

    document.getElementById('registerMessage').innerHTML = message.success 
        ? `<span class="success">Registration successful!</span>`
        : `<span class="error">Error: ${message.error}</span>`;
    
    document.getElementById('registerform').reset();
}

function lala4(event){
    event.preventDefault();
    let email = document.getElementById('emailreg').value;
    let password = document.getElementById('passwordreg').value;
    let message = log(email, password);

    document.getElementById('loginMessage').innerHTML = message.success 
        ? `<span class="success">Login successful!</span>`
        : `<span class="error">Invalid credentials</span>`;
    
    document.getElementById('loginform').reset();
}

function sign(user){
    let users = getall();
    if (users.some(u => u.email === user.email)) {
        return { success: false, error: "Email already exists" };
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
}

function getall(){
    return JSON.parse(localStorage.getItem('users')) || [];
}

function log(email, password){
    let users = getall();
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return { success: true };
    } else {
        return { success: false };
    }
}

document.getElementById('login').addEventListener('submit', lala4);
document.getElementById('register').addEventListener('submit', lala3);