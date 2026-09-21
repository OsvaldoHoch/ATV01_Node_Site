import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const Pranchas = [
        {medidas: "6'0 31L", preco: "R$ 500", imagem: '/images/Prancha- (1).jpeg'},
        {medidas: "6'2 28L", preco: "R$ 600", imagem: '/images/Prancha- (2).jpeg'},
        {medidas: "6'6 32L", preco: "R$ 10", imagem: '/images/Prancha- (3).jpeg'},
        {medidas: "5'11 27L", preco: "R$ 800", imagem: '/images/Prancha- (4).jpeg'}
    ];
    // Passe a variável 'Patrocinados' para o template EJS
    res.render("Pranchas", {Pranchas: Pranchas});
});

export default router