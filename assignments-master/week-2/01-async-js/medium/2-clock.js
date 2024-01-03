
setInterval(() => {
    let date = new Date()
    let sec = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()
    let hr = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    let amPm = date.getHours() > 12 ? "PM" : "AM"
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + sec)
    console.log(hr + ":" + date.getMinutes() + ":" + sec + " " + amPm)
},1000)