const {ServicioSMS} = require('../../../utils/sms');
const _sms = new ServicioSMS;

class SmsController{

    async enviarSMS(info){
        await _sms.enviarSMS(info);
    }
}

module.exports = {SmsController}