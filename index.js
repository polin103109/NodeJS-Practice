const School = require("./school");
const school = new School();
//listen the evnt
school.on("BellRing", ({ period, text }) => {
  console.log(`we have to run because ${period} ${text}`);
});

school.startperiod();
