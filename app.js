const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const port = 3001;


// Inicia o servidor
app.listen(port, () => {
  console.log("Servidor está rodando na Porta:" + port) ;
});

const indexRoute = require("./src/routes/indexRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use("/", indexRoute);

app.use((req, res) => {
  res.status(404).render('erro-404.ejs', { title: 'Página não encontrada' });
});


