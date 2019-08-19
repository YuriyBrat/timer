//var el = document.getElementById('first');
//var timeInt;
// el.addEventListener('click',function(event){
//     console.log(event);
//     if (el.innerHTML =='Start') {
//         el.innerHTML = 'Stop';
//         el.style.color = 'red';
//         el.style.backgroundColor = 'black';
//         timeInt = setInterval(difrRow, 100);
//     } else { 
//         el.innerHTML ='Start';
//         el.style.color = 'black';
//         el.style.backgroundColor = 'white';
//         clearInterval(timeInt);
//     }
// });
// var div = document.getElementById('firstrow');
// var difr = parseInt(getComputedStyle(div).width)/timer;
// //var timer = 75; // вводимо к-сть секунд сюди, потім зробимо інпут
// //var count = 0;
// //var t= timer;
// //el.addEventListener('click',()=> {let timInt = setInterval(difrRow, 100);})
// // ()=> {let timInt = setInterval(difrRow, 1000);}
// function difrRow() {
//     console.log(getComputedStyle(div).width)
//     var width = getComputedStyle(div).width;
//     count++;
//     t--;
//     clock.innerText = getClock(t);
//     console.log(t);
//     if (count ==timer) {
//         clearInterval(timeInt);
//     } else {
//     return div.style.width = parseInt(width)-difr+'px';
//     }
// }
// var clock = document.getElementById('clock');
function getClock(timer) {
    if(timer<60) {
        return timer+' сек';
} else if (timer<3600) {
    return (timer-timer%60)/60+' хв '+timer%60+' сек';
} else
    return (timer - timer%3600)/3600+' год '+(timer%3600-(timer%3600)%60)/60+' хв '+timer%60+' сек';
}
class timerRow {
    constructor(time,int,tr) { 
        this.timer = this.createDiv();
        this.button = this.createButton();
        this.timerRow = this.createRow();
        this.clock = this.createClock();
        this.button.addEventListener('click', this.startRow.bind(this));
        this.time = time; // вводимо к-сть секунд сюди, потім зробимо інпут
        this.tim = time;
        this.autor = tr;
        this.interval = int;
        this.width = getComputedStyle(this.timerRow).width;
        this.difr = parseInt(this.width)/this.time;
        this.autorun();
  }
  autorun() {
      if(this.autor) {
        this.startRow(this.button)
      }
  }
startRow() {
    var el = this.button;
    var clock =  this.clock;
    var div = this.timerRow;
    var time = this.time;
    var tim = this.tim;
    var int = this.interval;
    var difr = this.difr;
    const timeInt = setInterval( function(){
    if (time<=0) {
       clearInterval(timeInt);
       div.style.width = "0px";
    } else if(el.innerHTML =='Start') {
        clearInterval(timeInt);
    } 
    else {
        time--;
        clock.innerText = getClock(time);
        if((tim-time)%int==0) {
        var width = getComputedStyle(div).width;
        div.style.width = (parseInt(width)-difr<0)?0:parseInt(width)-(difr*int)+'px';
        }
      };
    }, 1000);
if (el.innerHTML =='Start') {
    el.innerHTML = 'Stop';
    el.style.color = 'red';
    el.style.backgroundColor = 'black';
} else { 
    el.innerHTML ='Start';
    el.style.color = 'black';
    el.style.backgroundColor = 'white';
};
};
  createDiv(){
    const div = document.createElement('div');
    div.className ='main';
    var count = document.getElementsByClassName('main').length+1;
    div.id = `main${count}`;
    div.style.width = 'auto';
    div.style.height ='100px';
    div.style.backgroundColor = 'gray';
    div.style.marginTop = '5px';
    div.style.paddingTop ='10px';
    document.body.append(div);
    return div;
};
  createButton() {
   var button = document.createElement('button');
   var num = document.getElementsByClassName('main').length;
   const div = document.getElementById(`main${num}`);
   button.id = `button${num}`;
   button.innerHTML = 'Start';
   button.style.width = '60px';
   button.style.height = '25px';
   button.style.margin = '5px 10px';
   button.style.borderRadius = '7px';
   //clock.style.display = 'inline-block';
   div.append(button);
   return button;
  };
  createClock() {
    var clock = document.createElement('div');
    var num = document.getElementsByClassName('main').length;
    const but = document.getElementById(`button${num}`);
    const div = document.getElementById(`main${num}`);
    clock.id = `clock${num}`;
    clock.innerText = 'час...';
    clock.style.width = '100px';
    clock.style.height = '25px';
    clock.style.margin = '5px 10px';
    clock.style.border = '3px';
    clock.style.display = 'inline-block';
    but.after(clock);
    return clock;
   }
  createRow() {
    const row = document.createElement('div');
    var num = document.getElementsByClassName('main').length;
    const div = document.getElementById(`main${num}`);
    row.style.width = '100%';
    row.style.height ='40px';
    row.style.backgroundColor = 'rgb(40, 246, 3)';
    div.append(row);
    return row;
  };
}
const row1 = new timerRow(75,1,true);
const row2 = new timerRow(40,3,false);
newTimer();
function newTimer() {
    const form1 = document.getElementById('form1');
    form1.addEventListener('submit', (event)=>{
        event.preventDefault();
    const form3 = document.getElementById('form3');
  const t = form3.value;
  const int = document.getElementById('form4').value;
  const tr = document.getElementById('form5').checked;
  new timerRow(t,int,tr);
    } )
}