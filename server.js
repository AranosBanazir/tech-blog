const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3001
const routes = require(`./routes`)

app.use(express.static(`public`))
app.use(express.json())

app.listen(PORT, ()=>{
console.clear()
console.log(`Listening on port: ${PORT}`)
})
