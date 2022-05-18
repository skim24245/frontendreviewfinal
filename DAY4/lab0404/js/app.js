/* 
javascript는 
웹에서 동적으로 데이터나 dom을 조작하기 위한 언어
웹에서 사용하는 클라이언트(WebBrowser) 및 서버용 언어(Node.js)이다.

javascript
-현재는 javascript library나 framework과 함께 사용이 된다.
-java(vanillaJS)
-Angular(google) -react-js(Meta,facebook) -vue.js(EvnYou) -typescipt - ? svelte 를 자주 쓴다.
-jQUERY: JAVA -SRPINTG FRAMEWORK같은 거랑 비슷하다고 보면 된다. 역할상
    JAVASCRIPT가 해야 할 많은 내용을 간단하게 사용할 수 있도록 구현된
    LIBRARY임 


*/

//javascript에서 일반적으로 말하는 객체
//javascript에서 중요한 것은 객체를 구성하는 모양
//아래와 같은 형태의 객체는 가장 일반적이기도 하지만 
//이름 literal(값)형태의 객체



// const와 let으로 선언한다
// const: 상수, 바뀌지 않는 값
// let: 바뀔 수 있는 값
// 선언되지 않은 변수를 사용, 접근하려고 하면 오류가 발생
// let coffee={
//     type:"라떼",
//     price:5500
// }
// console.log(coffee);


//값을 변수에 대입해서 출력해보는 방법 
//let coffeetype="라떼";
// let coffeeprice=5500;
// console.log(coffeeType);
// console.log(coffeeprice);

// let coffee ={
//     type:"Americano",
//     price:40000,
// }

//리터널 객체에서 값을 가져오는 방법
// console.log(coffee.type);
// console.log(coffee.price);
// console.log(coffee["type"]);
// console.log(coffee["price"]);

// //리터널 객체에서 없는 속성을 가져올 경우
// console.log(coffee.name);//undefined 값을 가져온다. 위에서 명시를 안해줬으니까. 

//실생활 ->클래스 -> 객체 -> 객체 (리터럴)

//그냥 빈 객체를 선언 할경우
// let obj={};
// console.log(obj);


// 변수나 객체를 선언할 때 사용하는 선언자
//let :  값을 다시 할당해도 되고, {} 안에서만 값이 유용하다.
//  local variable
//const : 변하지 않는 상수 값을 정의할 때 사용한다.
//const로 선언할 변수에 값을 다시 할당하게 되면 오류가 발생한다
// const PI =3.14, const LOCAL_URL="https://www.daum.net"; 어떤 값이나 변하지 않는 것들을 적어줄 때 이렇게 const를 쓰면 된다.

// const coffee1 ={
//     type: "capucchino",
//     price :3000

// }

//javascript를 사용할 때 맨 마지막 문장에는 ';'를 붙여준다.
//javascript에서 ';'를 사용하지 않고 쓰기도 하는데 그럴경우에는 
//맨 마지막 문장에서 엔터를 쳐서 저장하면 된다.
//그러면 다음 문장으로 인식을 한다.

//성능때문에 javascript의 용량을 최소로 줄이는 경우가 발생할 수 있기 떄문에
//맨 마지막에는 ;를 써주는 것이 좋다.

//javascript에서는 대소문자를 반드시 구분해야 한다.
console.log("하이~");
console.log("하이~");

//한줄 주석
/**
 * API DOCUMENT 주석
 */