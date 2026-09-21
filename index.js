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

const port = 8080;

app.listen(port, (error) => {
    // Tratando erros de inicialização
    if (error) {
        console.log(`Ocorreu um erro durante a inicialização. Erro: ${error}`);
    } else {
        console.log(`Servidor inicializado com sucesso em: http://localhost:${port}`);
    }
});

