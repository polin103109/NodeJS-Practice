//raise an event
// class
const EventEmitter = require("events");
//object

class School extends EventEmitter {
  startperiod() {
    console.log("Class Started");
    //raise an event
    //raise event when bell rings
    setTimeout(() => {
      this.emit("BellRing", {
        period: "first",
        text: "period ended",
      });
    }, 1000);
  }
}
module.exports = School;
