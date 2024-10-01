const data = require('../schema/notes_schema');
const findDocument = async (sem, department) => {
    try {
        return await data.findOne({ Sem: sem, Department: department });
    } catch (e) {
        throw new Error(e);
    }
};


const createDocument = async (sem, department) => {
    const newDocument = { Sem: sem, Department: department ,Drive_lin:'Placeholder for link'}; 
    try {
        return await data.create(newDocument);
    } catch (e) {
        throw new Error(e);
    }
};

module.exports = { findDocument, createDocument };

