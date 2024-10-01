const express = require('express');
const data = require('../schema/notes_schema');


let router = express.Router();

module.exports =  router ;


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


router.route('/notes/get/')
.post(async (req, res) => {
    // eg POST /notes/get/?sem=1&department=CS
    res.header("Access-Control-Allow-Origin", "*");
    const { sem, department } = req.query; 
    try {
        
        const result = await findDocument(sem, department); 
        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json('Error: ' + e.message);
    }
});


router.route('/notes/post')
.post(async (req, res) => {
    // eg POST /notes/post/?sem=1&department=CS
    res.header("Access-Control-Allow-Origin", "*");
    const { sem, department } = req.query;
    try {
        const createdDocument = await createDocument(sem, department); 
        return res.status(201).json(createdDocument);
    } catch (e) {
        return res.status(500).json('Error: ' + e.message);
    }
});