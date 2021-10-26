const config = require('config');
let twilio = config.get('TWILIO');

const twilio_client = require('twilio')(twilio.id, twilio.token);

class ServicioSMS {

    async enviarSMS (info){       
        twilio_client.messages.create({
            to:info.receiver,
            from:twilio.number,
            body: `${info.body}`
        })
    }
}

module.exports = {ServicioSMS};
