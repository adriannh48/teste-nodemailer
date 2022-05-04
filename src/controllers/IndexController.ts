import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

class IndexController{

    public async test(req: Request, res: Response) : Promise<Response>{
        const { email, text } = req.body;

        const trasnporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "67223ffb5f3996",
                pass: "ffd74d09cce98a"
            }
        });

        const info = await trasnporter.sendMail({
            from: 'Administrador <384ec5e12a-8a7ff0@inbox.mailtrap.io>',
            to: email,
            subject: 'teste',
            text: text
        });

        return res.send({"message": info.response});
    }
} export default new IndexController;