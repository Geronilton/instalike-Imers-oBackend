import express from "express";
import routes from "./src/routes/postRoutes.js";

// const posts = [
//     {
//         id:1,
//         descricao: "Uma foto teste",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id:2,
//         descricao: "Gato preguiçoso tomando sol",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id:3,
//         descricao: "Cachorro brincando no parque",
//         imagem: "https://placecats.com/millie/300/150"
//     }
//   ];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log('Servidor escutando...');
});


// function buscaPostPorId(id){
//     return posts.findIndex((post) =>{
//         return post.id === Number(id);
//     })
// }

// app.get("/posts/:id",(req,res) =>{
//     const index = buscaPostPorId(req.params.id)
//     res.status(200).json(posts[index]);
// }) 