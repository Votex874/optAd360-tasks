// var x = 5;
//
// if (x === 5){
//     var y = 10;
// }
// console.log(y,x);
//
// let b = 5;
//
// if (b === 5){
//     let a = 10;
// }
//
// console.log(b,a);

class showPopBox {
    constructor(){
        this.divOverlay = document.querySelector('.disableAll');
        this.body = document.querySelector('body');
        this.divBox = document.querySelector('.box');
        this.btnAccept = document.querySelector('.accept');
        this.btnCancel = document.querySelector('.cancel');
        this.wHeight = window.innerHeight;
        this.date = new Date;
    }

    render() {
        const overlay = this.divOverlay;
        const box = this.divBox;
        const body = this.body;
        body.style.overflow = 'hidden';
        box.style.left = (this.wHeight/2) + 150 + 'px';
        box.style.top = 300 + 'px';
        box.style.display = 'block';
        overlay.style.display = 'block';
        this.acceptRules();
        this.cancelRules();
    }

    acceptRules(){
        const btnAccept = this.btnAccept;
        btnAccept.addEventListener('click' ,() => {
            const curretTime = this.date.getTime();
            localStorage.setItem('time', JSON.stringify(curretTime));
            localStorage.setItem('info', 'accept');
            this.body.style.overflow = 'auto';
            this.divBox.style.display = 'none';
            this.divOverlay.style.display = 'none';
        })
    }
    cancelRules(){
        const btnCancel = this.btnCancel;
        btnCancel.addEventListener('click' ,() => {
            const curretTime = this.date.getTime();
            localStorage.setItem('time', JSON.stringify(curretTime));
            localStorage.setItem('info', 'cancel');
            this.body.style.overflow = 'auto';
            this.divBox.style.display = 'none';
            this.divOverlay.style.display = 'none';
            console.log("dupa")
        })
    }

    checkTime() {
        const currentTime = this.date.getTime();
        const savedTime = JSON.parse(localStorage.time);
        const oneDayInMs = 84000000;
        if(currentTime > (Number(savedTime))+ oneDayInMs){
            this.render();
        }
    }
}



window.onload = () => {
    const localStorageTime = localStorage.getItem('time');
    if(localStorageTime === null){
        localStorage.setItem('time', '0');
        const box = new showPopBox();
        box.checkTime();
    }else{
        const box = new showPopBox();
        box.checkTime();
    }
};