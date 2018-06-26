var path = require("path")
var express = require("express")
var dotenv = require("dotenv").config()
var app = express()
var log4js = require("log4js")
log4js.configure(require("./config/log4js"))
app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));

app.use(express.static('Public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'))

require("./routers")(app) 

console.log(21212)

app.listen(process.env.PORT, (error)=>{
  if (!error) console.log(`localhost:${process.env.PORT}`);
})
