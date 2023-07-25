import express, {Request, Response} from 'express';
import connectDb from './config/db_connect';
import 'dotenv/config'


const app: express.Application = express();
app.use(express.json());

const port : string | undefined = process.env.PORT;
console.log(port)

app.get('/',(req: Request,res: Response) => {
    res.json({msg:"Connected Well done "})
})

app.listen(port,() => {
    console.log(`connected from the backend http://localhost:${port}`)
})

