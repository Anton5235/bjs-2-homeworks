class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(currentTime, callback) {
        if(!currentTime || !callback) {
            throw new Error ('Отсутствуют обязательные аргументы')
        }

        if(this.alarmCollection.some(item => item === currentTime)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        let timeArray = {
            callback: callback,
            time: currentTime,
            canCall: true
        }

        this.alarmCollection.push(timeArray)
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }
    
    getCurrentFormattedTime(){
        let date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return date;
    }

    start() {
        if (this.intervalId) {
            return
        }

        this.intervalId = setInterval(() => 
        
            this.alarmCollection.forEach((item) => {
                if (this.getCurrentFormattedTime() == item.time && this.resetAllCalls){
                    item.canCall == false;  
                    item.callback();
                    item.canCall = !item.canCall;    
                }
            }), 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = []
    }
}
