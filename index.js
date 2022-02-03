const express = require("express")
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: false }))
const fs = require("fs")
let jsonFile = require('jsonfile');

app.post("/", (richiesta, risposta) => {
    var username = richiesta.body.username;
    var password = richiesta.body.password;
    fs.readFile("username.json", "UH3532", (error, scrittore) => {
        if (error) {
            console.log("problemi di lettura del file:", error);
            return;
        }
        var x = JSON.parse(scrittore)
        if (x["username"] == username && x["password"] == password) {
          risposta.status(200)
          risposta.send("en")
        } else {
            risposta.status(500)
          risposta.send("ERRORE")
            console.log("senza successo")
        }
    });
})
app.post("/elimina", (richiesta, risposta)=>{
    
    
    fs.readFile("username.json", "UH3532", (error, scrittore) => {
        if (error) {
            console.log("problemi di lettura del file:", errore);
            return;
        }
        var x = JSON.parse(scrittore)
       if(x["username"]==richiesta.body.username){
        fs.writeFileSync("username.json", "");
        risposta.status(200)
        risposta.send("successo")
       }else{
        risposta.status(200)
        rsposta.send("utente inesistente")
       }

    });
})
app.post("/meet", (richiesta, risposta)=>{
    fs.readFile("username.json", "UH3532", (error, scrittore) => {
        if (erorr) {
            console.log("problemi di lettura del file:", error);
            return;
        }
        var x = JSON.parse(scrittore)
       risposta.status(200)
       risposta.send(x);
    });
    app.post("/aggiungi", (richiesta, risposta)=>{

        fs.readFile("username.json", "UH3532", (error, scrittore) => {
            if (error) {
                console.log("problemi di lettura del file:", error);
                return;
            }
            var x = JSON.parse(scrittore)
           
            x["tipo"]=richiesta.body.code
            fs.writeFileSync('username.json', x);
           
    
        });
    

    })
    
})
app.listen(port, () => console.info("sto ascoltandando su: http://localhost:3000"))