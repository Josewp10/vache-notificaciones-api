const express = require('express');
const router = express.Router();
const {success, errorResponse} = require('../../../utils/responses');

const ServicioEmail = require('../../../utils/email');
const _email = new ServicioEmail();

const {EmailController} = require('../controller/email');
const _emailController = new EmailController;

router.post('/notificacionEmail',_email.upload.single('file'), async (req, res) => {
    try {
        let info = {
            asunto:req.body.asunto,
            destinatario:req.body.destinatario,
            plantilla: req.file.buffer
        }

        await _emailController.enviarEmail(info);
        success(req, res, 'SMS Sent', {}, 200);
    } catch (error) {
        errorResponse(req, res, 'ERROR', error);
    }

});

  
module.exports = router;