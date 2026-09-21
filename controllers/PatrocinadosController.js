import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const Patrocinados = [
        {nome: "Davi Kirk", vitorias: "20"},
        {nome: "Lucas Almeida", vitorias: "16"},
        {nome: "Osvaldo Hoch", vitorias: "12"},
        {nome: "Vinícius", vitorias: "8"}
    ];
    // Passe a variável 'Patrocinados' para o template EJS
    res.render("Patrocinados", { Patrocinados: Patrocinados });
});

export default router;