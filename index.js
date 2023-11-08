// class
const EventEmitter = require("events");
//object
const emitter = new EventEmitter();

//raise an event
setTimeout(() => {
  emitter.emit("BellRing", {
    period: "first",
    text: "period ended",
  });
}, 1000);

//listen the evnt
emitter.on("BellRing", ({ period, text }) => {
  console.log(`we have to run because ${period} ${text}`);
});
//how to create events on own,raise and listen that event and passing params
//if u dont maintain these sequence like listen first and then raise ,it will show nothing
