import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Connect to our Mailgun API wrapper and instantiate it
export const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default async (req, res) => {
  await runMiddleware(req, res, cors)

  const { name, email, phone, message, location, type, area } = req.body;
  let data = {
    from: `${name} < ${email} >`,
    to: "fgmasonrylowell@gmail.com",
    subject: "Novo Contato Feito pelo Site",
    text: `
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Local do Projeto: ${location}
      Tipo do Projeto: ${type}
      Area do Projeto (sqft): ${area}
      Descrição: ${message}
    `,
  };
  res.json({message: `Thanks ${name}!`})
  // await mailgun.messages().send(data, function (error, body) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   res.end();
  // });
};
