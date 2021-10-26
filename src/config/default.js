require('dotenv').config();

module.exports={
    SERVER:{
        port:process.env.PORT
    },
    DB:{
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        ssl: { rejectUnauthorized: false },
        port: process.env.DB_PORT
    },
    TWILIO:{
        id:process.env.TWILIO_ID,
        token:process.env.TWILIO_TOKEN,
        number : process.env.TWILIO_NUMBER

    },
    EMAIL:{
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
      }
}