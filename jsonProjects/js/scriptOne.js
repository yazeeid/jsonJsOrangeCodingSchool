function lala(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let brief = document.getElementById('brief').value;
    let major = document.getElementById('major').value;

    let lan1 = document.getElementById('php').checked ? document.getElementById('php').value : '';
    let lan2 = document.getElementById('c++').checked ? document.getElementById('c++').value : '';
    let lan3 = document.getElementById('js').checked ? document.getElementById('js').value : '';

    document.getElementById('a1').innerText = name;
    document.getElementById('a2').innerText = age;
    document.getElementById('a3').innerText = gender;
    document.getElementById('a4').innerText = brief;
    document.getElementById('a5').innerText = major;
    document.getElementById('a6').innerText = lan1;
    document.getElementById('a7').innerText = lan2;
    document.getElementById('a8').innerText = lan3;

    document.getElementById('f1').style.display = 'none';
    document.getElementById('f2').style.display = 'block';
}

document.getElementById('f1').addEventListener('submit', lala);