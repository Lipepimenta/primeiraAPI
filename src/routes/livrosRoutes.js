import express from "express";
import LivroController from "../controllers/livroControllers.js";

const routes = express.Router();
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/buscar", LivroController.buscaLivroPorEditora),
routes.get("/livros/:id", LivroController.pesquisaLivroId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizaLivro);
routes.delete("/livros/:id", LivroController.removeLivroId);

export default routes;