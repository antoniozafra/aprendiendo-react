/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validarCampos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const {validatJWT} = require('../middlewares/validar-jwt');

router.post(
    '/new',
    [
        check('name', 'El nombre es obligarotio').not().isEmpty(),
        check('email', 'El email es obligarotio').isEmail(),
        check('password', 'El password debe de contener 6 caracteres').isLength({ min: 6 }),
        validarCampos
        //middlewares
    ],
    crearUsuario);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de contener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', validatJWT, revalidarToken);

module.exports = router;