import type { Actions } from "./$types";
import nodemailer from "nodemailer";
import { SMTP_PASSWORD } from "$env/static/private";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "realjerzystarak@gmail.com",
        pass: SMTP_PASSWORD,
    },
});

export const actions: Actions = {
    default: async ({ params, request }) => {
        const data = await request.formData();
        const mail = data.get('mail');
        const imie = data.get('imie');
        const nazwisko = data.get('nazwisko');
        const zodiak = params.zodiak;

        await transporter.sendMail({
            from: '"Zajn Jasnowidz" <realjerzystarak@gmail.com>',
            to: mail,
            subject: "TWÓJ HOROSKOP",
            text: `${imie} ${nazwisko} ${zodiak}`,
        });
    }
};