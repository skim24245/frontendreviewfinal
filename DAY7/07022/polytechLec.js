//class
/**
 * export default를 해야 다른 곳에서 사용이 가능하다. 
*/

export default class polytechLec{
    constructor(props){
        this.lectures = ['javaScript', 'HTML5','CSS3'];
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now();
    }

    //현재시간
    getCurrentHour = () => {
    return (new Date).getHours();
}

}