import express from "express";

let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res){
    res.send(`
    <form action="/answer" method = "POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name = "skyColor" autocomplete = "off">
        <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res){
    if (req.body.skyColor.toUpperCase() == "BLUE"){
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
    } else{
        res.send(`
        <p>You are wrong!</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

ourApp.get('/answer', function(req, res){
    res.send("Are you lost? There is nothing to see here.")
})

ourApp.listen(3000)


