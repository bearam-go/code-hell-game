import * as express from "express"
import { env } from "node:process";

const app = express.default();
let port = env.port ?? "3000";

app.use(express.json())

app.get('/health', (req: express.Request , res: express.Response) => {
    res.json({
        ok: true
    }); 
});

app.listen(port, () => {
     
    console.log(`O servidor está rodando corretamente na porta: [${port}]. Para acessar, basta ir em: [http://localhost:${port}/health]`)
})