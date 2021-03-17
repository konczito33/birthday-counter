const birthday = '11 Oct 2021';
const daysC = document.querySelector('.days-counter ')
const hoursC = document.querySelector('.hours-counter ')
const minutesC = document.querySelector('.minutes-counter ')
const secondsC = document.querySelector('.seconds-counter ')

function countDown() {
    const birthdayDate = new Date(birthday)
    const currentDate = new Date()
    const totalSeconds = Math.floor((birthdayDate - currentDate) / 1000)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = totalSeconds % 60
    daysC.textContent = days
    hoursC.textContent = timeFormat(hours)
    minutesC.textContent = timeFormat(minutes)
    secondsC.textContent = timeFormat(seconds)
}

function timeFormat(time){
    if(time < 10){
        return time = `0${time}`
    }else{
        return time
    }
}

countDown()

setInterval(countDown, 1000)