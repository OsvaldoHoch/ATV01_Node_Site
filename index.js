// Importando Express
import express from "express";
const app = express();

// Importando controllers
import SkateController from "./controllers/SkateController.js"
import PranchaController from "./controllers/PranchaController.js"
import PatrocinadosController from "./controllers/PatrocinadosController.js"

// Rota principal
app.get("/", (req, res) => {
    res.render("index");
});

// Configurando EJS
app.set("view engine", "ejs"); // Renderizar views
app.use(express.static("public")); // Arquivos estáticos

// Configurando rotas
app.use("/", SkateController);
app.use("/", PranchaController);
app.use("/", PatrocinadosController);

const port = 8080;

app.listen(port, (error) => {
    // Tratando erros de inicialização
    if (error) {
        console.log(`Ocorreu um erro durante a inicialização. Erro: ${error}`);
    } else {
        console.log(`Servidor inicializado com sucesso em: http://localhost:${port}`);
    }
});

