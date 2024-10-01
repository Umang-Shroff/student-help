
const express = require('express');
const data = require('../schema/notes_schema');
const { findDocument, createDocument } = require('../Notes_function/notes_func');

let router = express.Router();

module.exports =  router ;





router.route('/notes/get/')
.get(async (req, res) => {
    // eg POST /notes/get/?sem=1&department=CS
    res.header("Access-Control-Allow-Origin", "*");
    const { sem, department } = req.query; 

    try {
        
        const result = await findDocument(sem,department);
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
        const createdDocument = await createDocument(sem,department)
        return res.status(201).json(createdDocument);
    } catch (e) {
        return res.status(500).json('Error: ' + e.message);
    }
});