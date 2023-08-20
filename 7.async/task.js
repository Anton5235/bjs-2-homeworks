class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error ('Отсутствуют обязательные аргументы')
        }

        if(this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        let timeArray = {
            callback: callback,
            time: time,
            canCall: true
        }

        this.alarmCollection.push(timeArray)
    }

    removeClock() {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }
    

}