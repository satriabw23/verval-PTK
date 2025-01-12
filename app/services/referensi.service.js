'use strict';

const repository = require('../repository/referensi.repository');


const agama = async (params) => {
    try {
        const res = await repository.agama(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};

const jenisPtk = async (params) => {
    try {
        const res = await repository.jenisPtk(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};

const kebutuhanKhusus = async (params) => {
    try {
        const res = await repository.kebutuhanKhusus(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const lembagaPengangkat = async (params) => {
    try {
        const res = await repository.lembagaPengangkat(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const statusKepegawaian = async (params) => {
    try {
        const res = await repository.statusKepegawaian(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const sumberGaji = async (params) => {
    try {
        const res = await repository.sumberGaji(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const desaKelurahan = async (params) => {
    try {
        const res = await repository.desaKelurahan(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const kecamatan = async (params) => {
    try {
        console.log(params)
        const res = await repository.kecamatan(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const kabupaten = async (params) => {
    try {
        const res = await repository.kabupaten(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const wilayah = async (params) => {
    try {
        const res = await repository.wilayah(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const allData = async (params) => {
    try {
        const res = await repository.allData(params);
        return res;
    } catch (ex) {
        throw ex;
    }
}
const agamaByid = async (params) => {
    try {
        const res = await repository.agamaByid(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const jenisPtkbyId = async (params) => {
    try {
        const res = await repository.jenisPtkbyId(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const kebutuhankhususById = async (params) => {
    try {
        const res = await repository.kebutuhankhususById(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const lembagapengangkatById = async (params) => {
    try {
        const res = await repository.lembagapengangkatById(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};
const statuskepegawaianById = async (params) => {
    try {
        const res = await repository.statuskepegawaianById(params);
        return res;
    } catch (ex) {
        throw ex;
    }
};

const service = {
    agama,
    jenisPtk,
    kebutuhanKhusus,
    lembagaPengangkat,
    statusKepegawaian,
    sumberGaji,
    desaKelurahan,
    kecamatan,
    kabupaten,
    wilayah,
    allData,
    agamaByid,
    jenisPtkbyId,
    kebutuhankhususById,
    lembagapengangkatById,
    statuskepegawaianById,
}

module.exports = service;