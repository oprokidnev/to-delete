export default async (req, res) => {
    const tgbot = process.env.BOT_TOKEN;
    console.log(req.body);
    
    res.status(200).send('OK');
  };