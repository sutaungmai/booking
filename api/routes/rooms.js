const express = require('express');
const { verifyAdmin } = require('../utils/verifyToken');

const { 
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms,

} = require('../controllers/room');

const router = express.Router()

//CREATE
router.post('/:hotelid',verifyAdmin, createRoom )
//UPDATE
router.put('/:id',verifyAdmin, updateRoom)
//DELETE
router.delete('/:id/:hotelid',verifyAdmin, deleteRoom)
//GET
router.get('/:id', getRoom)
//GET ALL
router.get('/', getRooms)

module.exports = router