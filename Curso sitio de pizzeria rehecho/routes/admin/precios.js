var express = require('express');
var router = express.Router();

var promocionesModel = require('../../models/promocionesModel')


router.get('/', async function (req, res, next) {
    
    var precios = await promocionesModel.getpromociones();
    res.render('admin/precios', {
        layout: 'admin/layout',
        persona: req.session.nombre,precios
    });
});

router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await promocionesModel.deletePromocionesById(id);
    res.redirect('/admin/precios')
});

module.exports = router;