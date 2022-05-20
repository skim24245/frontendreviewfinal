document.addEventListener("DOMContentLoaded", () => { //()안에는 a라고 쓰나 b라고쓰나 e라고 쓰나 상관 없음. addeventlisner는 귀, 받을 수 있음.
    // alert("잘 들어오나?");
    const boxEle = document.querySelector("#box"); //조회를 하겠다는 뜻 . 앨레먼트 객체임 (element)
    const colorBoxEle = document.querySelector(".colorBtn");
    const btnEle = document.querySelector("button");

    //각각의 element에 이벤트를 연결시켜준다.
    boxEle.addEventListener("click", function (e) { //여기에도 e대신 d,c 등 다른 걸 써도 됌. click이라는 이벤트를 처리하는 얘를 함수 e에다가 넘겨주겠다는 뜻 //클릭 이벤트가 일어났을 때 function이라는 e함수를 통해 다른 것을 실행함. 근데 뒤에서 배우는 target이라는 것은 예약어이기 때문에 이름을 바꿀 수 없다.
        e.currentTarget.style.backgroundColor = "red"; //click라는 이벤트를 처리할 때는 funciton(e)라는 것을 쓰는것이고, event의 타입을 알고 싶으면 function(type,target)을 쓰는 것이다. 
    });
    colorBoxEle.addEventListener("click", function (e) {
        e.currentTarget.style.backgroundColor = "blue";
    });

    btnEle.addEventListener("click", function (e) {
        e.currentTarget.style.backgroundColor = "gray";
        e.currentTarget.style.padding = "10px 20px";
    });
    
});