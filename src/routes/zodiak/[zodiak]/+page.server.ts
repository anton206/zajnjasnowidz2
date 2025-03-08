import type { Actions } from "./$types";
import nodemailer from "nodemailer";
import { SMTP_PASSWORD, OPENAI_API_KEY } from "$env/static/private";
import OpenAI from 'openai';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "realjerzystarak@gmail.com",
        pass: SMTP_PASSWORD,
    },
});


const limiter = new RateLimiter({
    IP: [2, 'm'],
    IPUA: [1, 'm'],
});

const zodiaki = ["baran", "byk", "bliznieta", "rak", "lew", "panna", "waga", "skorpion", "strzelec", "koziorozec", "wodnik", "ryby"];

export const load: PageServerLoad = async (event) => {
    await limiter.cookieLimiter?.preflight(event);
};

export const actions: Actions = {
    default: async (event) => {
        if (await limiter.isLimited(event)) throw error(429);

        const data = await event.request.formData();
        const mail = data.get('mail') as string;
        const imie = data.get('imie') as string;
        const nazwisko = data.get('nazwisko') as string;
        const zodiak = event.params.zodiak;

        if (!zodiaki.includes(zodiak)) throw Error("sus zodiak");

        const resp = await client.chat.completions.create({
            messages: [{ role: 'system', content: `Jesteś Zajn Jasnowidz. Wygeneruj horoskop dla "${imie} ${nazwisko}" ze znakiem zodiaku ${zodiak}. Użyj HTML zamiast Markdown. Nie używaj tagu style.` }],
            model: 'gpt-4o',
        });

        await transporter.sendMail({
            from: '"Zajn Jasnowidz" <realjerzystarak@gmail.com>',
            to: mail,
            subject: "Twój Horoskop",
            html: resp.choices[0].message.content!,
        });
    }
};