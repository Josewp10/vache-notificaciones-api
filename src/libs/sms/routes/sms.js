const express = require('express');
const router = express.Router();
const {success, errorResponse} = require('../../../utils/responses');

const {SmsController} = require('../controller/sms');
const _smsController = new SmsController;

router.post('/notificacionSMS',async (req, res) => {
    try {
        let info = req.body;
        await _smsController.enviarSMS(info);
        success(req, res, 'SMS Sent', {}, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }

});

  
module.exports = router;