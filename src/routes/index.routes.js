import { Router } from "express";

import candidatosRoutes from "./canditatos.routes.js";


const routes = Router();

routes.get("/",(req, res) => {
    return res.status(200).send({ message: "Maior Dó!"})
});

routes.use("/candidatos", candidatosRoutes);

export default routes;