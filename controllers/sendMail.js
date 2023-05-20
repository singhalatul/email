const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "evie.graham35@ethereal.email",
            pass: "z3ad2HmVYrWPdCuMCm",
        },
      });
      
    let info = await transporter.sendMail({
        from: '"Atul Singhal 👻" <atul.aggarwal2852@gmail.com>', // sender address
        to: "singhalatul067@gmail.com", // list of receivers
        subject: "Hello ✔ Atul ", // Subject line
        text: "Hello Yt Atul ", // plain text body
        html: "<b>Hello Yt Atul</b>", // html body
        })
    console.log("Message sent : %s",info.messageId);
    res.json(info);
};

module.exports = sendMail;