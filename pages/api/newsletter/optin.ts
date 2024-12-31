import { NextApiRequest, NextApiResponse } from "next";
import sendGridMail from "@sendgrid/mail";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const dbClient = createClient(SUPABASE_KEY, SUPABASE_URL);
const meuEmail = process.env.MEU_EMAIL;

const httpStatus = {
  sucess: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  internalServerError: 500,
};

const controllerbyMethod = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await dbClient.from("newsletter_users").select("*");
    res
      .status(httpStatus.sucess)
      .json({ message: "Get request", total: data.length });
  },
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const email = req.body.emailNewsletter;

    if (!Boolean(email) || !email.includes("@")) {
      res
        .status(httpStatus.badRequest)
        .json({ message: "voce precisa enviar um email valido." });
      return;
    }
    await dbClient
      .from("newsletter_users")
      .insert({ email: email, optin: true });

    await dbClient.auth.admin.createUser({ email: email });

    try {
      sendGridMail.setApiKey(process.env.SENDGRID_KEY);
      await sendGridMail.send({
        to: email,
        from: meuEmail,
        subject: "Novo inscrito na newsletter",
        text: `Novo inscrito na newsletter: ${email}`,
      });
      res.status(httpStatus.sucess).json({ message: "Post request" });
    } catch (err) {
      res
        .status(httpStatus.internalServerError)
        .json({ message: "Falhamos em enviar seu email" });
    }
  },
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const controller = controllerbyMethod[request.method];

  if (!controller) {
    response.status(httpStatus.notFound).json({ message: "Nada encontrado" });
    return;
  }
  controller(request, response);
}
