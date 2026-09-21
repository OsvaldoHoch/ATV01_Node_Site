import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const Skates = [
        { medidas: "8.0", preco: "R$ 300", imagem: '/images/skateboard-1.png' },
        { medidas: "7.9", preco: "R$ 250", imagem: '/images/skateboard-2.png' },
        { medidas: "8.0", preco: "R$ 400", imagem: '/images/skateboard-3.png' },
        { medidas: "8.0", preco: "R$ 500", imagem: '/images/skateboard-4.png' },
        { medidas: "8.0", preco: "R$ 200", imagem: '/images/skateboard-5.png' }
    ];
    res.render("Skates", { Skates: Skates });
});

export default router;