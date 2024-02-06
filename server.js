import app from "./src/app.js";

const PORTA = 3001;

const rotas = {
    "/": "Curso de Node Js",
    "/livros": "Página Livros",
    "/autores": "Página autores"
};

app.listen(3001, () => {
    console.log("Node funcionando");
});