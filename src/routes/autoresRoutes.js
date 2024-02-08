import express from "express";
import autorController from "../controllers/autorControllers.js";

const routes = express.Router();
routes.get("/autores", autorController.ListarAutores);
routes.get("/autores/:id", autorController.pesquisaAutorId);
routes.post("/autores", autorController.cadastrarAutor);
routes.put("/autores/:id", autorController.atualizaAutor);
routes.delete("/autores/:id", autorController.removeAutorId);

export default routes;