const loginForm = document.querySelector("#login_form"),
    loginInput = document.querySelector("#login_form input"),
    greeting = document.querySelector("#greeting"),
    // string을 의미있게 사용할 때 상수를 대문자로 작성
    HIDDEN_CLASSNAME = "hidden",
    USERNAME_KEY = "username"; // 로컬스토리지의 키값

// loginSubmit의 기능
function loginSubmit(e){
    e.preventDefault();
    const writeUserName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `${writeUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, writeUserName); // 로컬스토리지에 인풋에 작성된 사용자이름을 저장
}

// 로컬스토리지에 저장된 사용자 이름을 가져오고 savedUserName에 담음
const savedUserName = localStorage.getItem(USERNAME_KEY);

// savedUserName에 저장된 사용자의 이름이 없을 때
if(savedUserName === null){
    // form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit 이벤트가 일어났을 때
    loginForm.addEventListener("submit", loginSubmit);
}else{
    // savedUserName에 저장된 사용자의 이름이 있을 때
    greeting.innerText = `${savedUserName}`;
    // h1 보여주기
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}



