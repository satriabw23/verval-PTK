'use strict';

const express = require("express");
const router = express.Router();
const controller = require('../controllers/referensi.controller');
const commonSanitization = require('../../common/sanitization');
const commonValidator = require('../../common/validator');
const authorization = require('../../middleware/authorization');

router.get('/get-agama', controller.agama);
router.get('/get-jenis-ptk', controller.jenisPtk);
router.get('/get-kebutuhan-khusus', controller.kebutuhanKhusus);
router.get('/get-lembaga-pengangkat', controller.lembagaPengangkat);
router.get('/get-status-kepegawaian', controller.statusKepegawaian);
router.get('/get-sumber-gaji', controller.sumberGaji);
router.get('/get-desa-kelurahan', controller.desaKelurahan);
router.get('/get-kecamatan', controller.kecamatan);
router.get('/get-kabupaten', controller.kabupaten);
router.get('/get-wilayah', controller.wilayah);
router.post('/get-reff-all', controller.allData);
router.get('/get-agama-by-id', controller.agamaByid);
router.get('/get-jenis-ptk-by-id', controller.jenisPtkbyId);
router.get('/get-kebutuhan-khusus-by-id', controller.kebutuhankhususById);
router.get('/get-lembaga-pengangkat-by-id', controller.lembagapengangkatById);
router.get('/get-status-kepegawaian-by-id', controller.statuskepegawaianById);


router.use('*', commonValidator.payloadValidation, commonSanitization.sanitizationMiddleware);

router.use('*', authorization.jwt);

module.exports = router;
