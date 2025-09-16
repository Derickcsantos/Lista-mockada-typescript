import express = require("express");
import morgan = require("morgan");
import path = require("path");
import router = require("./routes"); // 👈 aqui também precisa ser require
import { Request, Response, NextFunction } from "express";
import expressLayouts = require("express-ejs-layouts"); 

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts); // 👈 ativa layouts
app.set("layout", "layout"); // 👈 define layout padrão
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', router)

// app.use((req: Request, res: Response ) => {
//     res.status(404).sendFile("404.html")
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).render("error", { message: "Erro interno no servidor"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor rodando...");
});