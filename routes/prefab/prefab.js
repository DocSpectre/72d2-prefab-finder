const express = require('express');
const router = express.Router();
const prefab = require('../../controllers/prefab/PrefabController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



router.post('/near-poi', upload.single("file"), async (req, res) => {
    const result = await prefab.searchNearPOI(req.query, req.file);

    res.status(200).json({
        message: 'Done',
        output: result
    });
});

router.post('/poi-distance', upload.single("file"), async (req, res) => {
    const result = await prefab.findPOIDistance(req.query, req.file);

    res.status(200).json({
        message: 'Done',
        output: result
    });
});

module.exports = router;