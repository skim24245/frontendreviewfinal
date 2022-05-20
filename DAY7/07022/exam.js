
/**
 * People
 * this.name를 프로퍼티를 갖게 된다.
 * this.age 프로퍼티를 갖게 된다.
 * this가 상황에 따라 가리키는 범위가 달라진다.
 * 지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
 */


// class People{
// 생성자는 값을 초기화 할 때 사용한다.
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     show(){ 메소드라고 생각
//         console.log(`${this.name}은 ${this.age}살 입니다.`);

//     }
// }
// 생성자를 호출! 
// const people =new People("김병관",20);
// people.show();  



/*
java는 클래스 기반 객체지형 언어
javascript는 프로토 타입 객체지향 언어
*/


class Coffee{ //커피라는 객체 생성 
    constructor(type,price){ //자바스크립트에서는 값을 세팅함.
        this.type =type;
        this.price=price;
    }  
    get type(){ //get 메소드 생성 -> 나중에 get방식으로 값을 가져가기 위해
        return this._type; //_를 안써주면 값을 계속 부르기 때문에 오류가 날 수 있다. _언더바를 해줘야 값이 세팅이 되고 값을 가져올 수 있다.
    }
    set type(value){ //set 메소드  ->나중에 set으로 가져가기 위해 
        this._type = value;
    }
}

const coffee = new Coffee("음료",5000); //객체를 생성
console.log(coffee.type);

// 
// 간단한 객체 생성해 보기
// 

// const name ="IU";
// const age =30;

// 간단하게 객체를 생성하면 이렇게 값을 생성할 수 있다.
// const obj = {
//     name:name,
//     age:age
// }

// function getObj(){
//     const name2 = "잇지";
//     const getName2=function(){
//         return name2;
//     }
//     const setName = function(newName){
//         name2 = newName;
//     }
//     const printName =function(){
//         console.log(name2);
//     }
//     return {
//         getName2,
//         setName
//     }
// }

// let obj2 = getObj();
// condsole.log(Obj2);
// console.log(Obj2.getName2());

// const obj3 = getObj();
// console.log(obj3);