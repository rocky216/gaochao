module.exports = function(app){

  app.get('/', (req, res)=>{
    res.render('home/index')
  })
  app.get('/index', (req, res)=>{
    res.render('index')
  })
  app.get('/work', (req, res)=>{
    res.render('work')
  })

}
