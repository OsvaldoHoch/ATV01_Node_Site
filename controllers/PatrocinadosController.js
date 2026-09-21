import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const Patrocinados = [
        {nome: "Luan Oliveira", cpf: "999.999.999-99"},
        {nome: "Sheni O'Neal", cpf: "999.999.999-99"},
        {nome: "Osvaldo", cpf: "999.999.999-99"},
        {nome: "Cofrinho", cpf: "999.999.999-99"}
    ];
    res.render("patrocinados");
});

export default router;