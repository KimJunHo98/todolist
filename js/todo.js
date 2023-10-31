const toDo = document.getElementById("todo"),
toDoForm = toDo.querySelector(".todo_form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = toDo.querySelector(".todo_list");

const TODOS_KEY = "todos";
let todos = [];

// submit한 내용을 로컬스토리지에 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // JSON.stringify(todos): 배열로 작성된 값을 문자열로 처리를 해서 배열형태 그대로 값을 보여줌
}

// todo_list 삭제하기
function deleteToDo(e){
    // 클릭한 버튼의 부모요소
    const li = e.target.parentElement;
    
    // 클릭한 버튼의 부모요소를 삭제
    li.remove();
    /* todos에서 받아온 값을 매개변수 toDO로 받고 id를 필터링해서 
    선텍한 li의 id와 같지 않은지 비교후 같으면 false를 반환하여 삭제
    li의 id는 위에서 문자열로 저장하기 때문에 숫자열로 바꿔야함 */
    todos = todos.filter((toDo) => {
        toDo.id !== parseInt(li.id)
    }); 
    // 삭제 후 localstorage의 값을 다시 저장
    saveToDos();
}

// ul안에 todo_list 작성하기
function paintToDo(newToDo){
    const li = document.createElement("li"),
    span = document.createElement("span"),
    btn = document.createElement("button");

    li.id = newToDo.id // li에 newToDoObj에서 받아온 id값을 추가함
    span.innerText = newToDo.text; // newToDoObj에서 객체형태(obj)로 받아온 toDoInput.value 값을 텍스트로 보여줌
    btn.innerText = "-";
    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    // toDoList안에 작성된 li 추가
    toDoList.appendChild(li);
}

function todoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;

    // 사용자가 submit하면 input을 비움
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    // submit한 내용을 배열에 push함
    todos.push(newToDoObj);
    paintToDo(newToDoObj); // toDoInput.value를 newToDo에서 받고 paintToDo함수에 그 값을 보냄
    saveToDos();
}
toDoForm.addEventListener("submit", todoSubmit);

// 로컬스토리지에 저장된 값을 가져옴
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos); // JSON.parse(): 배열형태 그대로 작성된 문자열을 배열로 보여줌

    todos = parseToDos;
    parseToDos.forEach(paintToDo);
}


