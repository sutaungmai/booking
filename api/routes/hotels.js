const express = require('express');

const Hotel = require('../models/Hotel')
const {createError} = require('../utils/error')
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotels,
    getHotel,
    countByCity,
    countByType,
} = require('../controllers/hotel');
const { verifyAdmin } = require('../utils/verifyToken');

const router = express.Router()

//CREATE
router.post('/',verifyAdmin, createHotel )
//UPDATE
router.put('/find/:id',verifyAdmin, updateHotel)
//DELETE
router.delete('/find/:id',verifyAdmin, deleteHotel)
//GET
router.get('/find/:id', getHotel)
//GET ALL
router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)

module.exports = router