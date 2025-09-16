import { Request, Response} from "express";
import { User } from "../types/User"

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Carol", email: "carol@example.com" },
];

export const homePage = (req: Request, res: Response) => {
    res.render("home", { title: "Home", users });
};

export const aboutPage = (req: Request, res: Response) => {
    res.render("about", { title: "Sobre o projeto "});
};