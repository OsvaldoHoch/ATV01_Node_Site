// Importando Express
import express from "express";
const app = express();

// Importando controllers
import SkateController from "./controllers/SkateController.js"
import PranchaController from "./controllers/PranchaController.js"
import PatrocinadosController from "./controllers/PatrocinadosController.js"

// Configurando EJS
app.set("view engine", "ejs"); // Renderizar views
app.use(express.static("public")); // Arquivos estáticos

// Rota principal
app.get("/", (req, res) => {
    res.render("index");
});

// Configurando rotas
app.use("/skates", SkateController);
app.use("/pranchas", PranchaController);
app.use("/patrocinados", PatrocinadosController);

const port = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

