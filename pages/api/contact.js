// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Connect to our Mailgun API wrapper and instantiate it
export const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default (req, res) => {
  const { name, email, phone, description, location, startDate, type } = req.body;
  let data = {
    from: `${name} < ${email} >`,
    to: "rafaelcodr@gmail.com",
    subject: "Novo Contato Feito pelo Site",
    text: `
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Local do Projeto: ${location}
      Data Para Iniciar: ${startDate}
      Tipo do Projeto: ${type}
      Descrição: ${description}
    `,
  };
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      return console.log(error);
    }
    console.log(body)
    res.end()
  });


};
