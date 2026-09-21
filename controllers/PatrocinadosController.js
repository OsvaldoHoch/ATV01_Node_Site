import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const Patrocinados = [
        {nome: "Davi Kirk", vitorias: "20", imagem: '/images/Davi.jpeg'},
        {nome: "Lucas Almeida", vitorias: "14", imagem: '/images/Lucas.jpeg'},
        {nome: "Osvaldo Hoch", vitorias: "12", imagem: '/images/Osvaldo.jpeg'},
        {nome: "Vinícius Pinhei", vitorias: "8", imagem: '/images/Vini.jpeg'},
        {nome: "Pedro Abner", vitorias: "14", imagem: '/images/Abner.jpeg'}
    ];
    // Passa a variável 'Patrocinados' para o template EJS
    res.render("Patrocinados", { Patrocinados: Patrocinados });
});

export default router;