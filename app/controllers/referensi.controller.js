'use strict';

const utils = require('../../common/utils');
const service = require('../services/referensi.service');


const agama = async (req, res) => {
    try {
         // Get agama_id from query parameters
        const data = await service.agama(req.body);
        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const jenisPtk = async (req, res) => {
    try {
        const data = await service.jenisPtk(req.body);

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const kebutuhanKhusus = async (req, res) => {
    try { 
        const { kebutuhan_khusus } = req.query;
        const data = await service.kebutuhanKhusus({ kebutuhan_khusus });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}; 
const lembagaPengangkat = async (req, res) => {
    try {
        const data = await service.lembagaPengangkat(req.body);

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}; 
const statusKepegawaian = async (req, res) => {
    try {
        const data = await service.statusKepegawaian(req.body ); 

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}; 
const sumberGaji = async (req, res) => {
    try {
        const data = await service.sumberGaji(req.body);

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const desaKelurahan = async (req, res) => {
    try {
        const { mst_kode_wilayah } = req.query;
        const data = await service.desaKelurahan({ mst_kode_wilayah });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const kecamatan = async (req, res) => {
    try {
        const { mst_kode_wilayah } = req.query;
        const data = await service.kecamatan({ mst_kode_wilayah });
        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};

const kabupaten = async (req, res) => {
    try {
        const { nama } = req.query;
        const data = await service.kabupaten({ nama }); 

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const allData = async (req, res) => {
    try {
        const data = await service.allData(req.body); 
        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}
const wilayah = async (req, res) => {
    try {
        const { nama } = req.query;
        const data = await service.wilayah({ nama }); 

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const agamaByid = async (req, res) => {
    try {
        const { agama_id } = req.query;
        const data = await service.agamaByid({ agama_id });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const jenisPtkbyId = async (req, res) => {
    try {
        const { jenis_ptk_id } = req.query;
        const data = await service.jenisPtkbyId({ jenis_ptk_id });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const kebutuhankhususById = async (req, res) => {
    try {
        const { kebutuhan_khusus_id } = req.query;
        const data = await service.kebutuhankhususById({ kebutuhan_khusus_id });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const lembagapengangkatById = async (req, res) => {
    try {
        const { lembaga_pengangkat_id } = req.query;
        const data = await service.lembagapengangkatById({ lembaga_pengangkat_id });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};
const statuskepegawaianById = async (req, res) => {
    try {
        const { status_kepegawaian_id } = req.query;
        const data = await service.statuskepegawaianById({ status_kepegawaian_id });

        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
};


const controller = {
    agama,
    jenisPtk,
    kebutuhanKhusus,
    lembagaPengangkat,
    statusKepegawaian,
    sumberGaji,
    desaKelurahan,
    kecamatan,
    kabupaten,
    allData,
    wilayah,
    agamaByid,
    jenisPtkbyId,
    kebutuhankhususById,
    lembagapengangkatById,
    statuskepegawaianById,
}

module.exports = controller;