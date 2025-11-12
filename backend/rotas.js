import admController from "./controller/admController.js";
import loginController from "./controller/loginController.js";

export default function adicionarRotas(api) {
    api.use(loginController);
    api.use(admController);
}
