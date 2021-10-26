const nodemailer = require('nodemailer');
const multer = require('multer');
const config = require('config');
const email =config.get('EMAIL');

class ServicioEmail{

    constructor(){
        this.storage = multer.memoryStorage();
        this.upload = multer({ storage: this.storage });
      }

    async enviarEmail(info) {
        let transporter = nodemailer.createTransport(email);

    let mailOptions = {
      from:`<${email.auth.user}>`,
      to: info.destinatario,
      subject: info.asunto,
      text: "",
      html: info.plantilla,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw error;
      }
      //console.log("Message sent %s", info.messageId);
      //console.log("Preview URL %s", nodemailer.getTestMessageUrl(info));
    });
  }
}

module.exports = ServicioEmail;