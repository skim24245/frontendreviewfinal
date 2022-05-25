

function login() {
    const loginId = document.getElementById('Login_id');
    const loginPwd = document.getElementById('Login_pwd');
    const loginBtn = document.getElementById('Login_btn');
    if(loginId == document.querySelector("#Login_id").value){
        if(loginPwd == document.querySelector("#Login_pwd").value){
            alert("환영합니다");
        }
        else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
    else {
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
}

function moveToMain(){
    location.replace("./index.html");
}

loginId.addEventListener('keyup', color);
loginPwd.addEventListener('keyup', color);
loginBtn.addEventListener('click',moveToMain);

