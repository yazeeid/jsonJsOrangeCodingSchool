function lala(event){
    event.preventDefault();
    
    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    let userTypes = document.getElementById('userTypes').value;
    let technology = document.getElementById('technology').value;

    sessionStorage.clear();
    sessionStorage.setItem('subject', subject);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('userTypes', userTypes);
    sessionStorage.setItem('technology', technology);

    document.getElementById('f1').style.display = 'none';
    document.getElementById('f2').style.display = 'block';

    document.getElementById('a1').innerText = subject;
    document.getElementById('a2').innerText = description;
    document.getElementById('a3').innerText = userTypes;
    document.getElementById('a4').innerText = technology;
}

document.getElementById('f1').addEventListener('submit', lala);