const ServicioEmail = require('../../../utils/email');
const _email = new ServicioEmail();

class EmailController{

    async enviarEmail(info){
        await _email.enviarEmail(info);
    }
}

module.exports = {EmailController}