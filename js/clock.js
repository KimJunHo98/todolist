const clock = document.querySelector("#clock");

// Date object
function getClock(){
    const date = new Date(),
    // padStart(길이, 추가할 부분): 문자가 가져야 할 길이를 설정하고 앞자리에 추가하고 싶은 사항을 추가해줌
    hours = String(date.getHours()).padStart(2, "0"),
    minutes = String(date.getMinutes()).padStart(2, "0"),
    seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
// getClock()를 즉시 호출
getClock(); 
// 호출 후 1초마다 자동실행
setInterval(getClock, 1000); 