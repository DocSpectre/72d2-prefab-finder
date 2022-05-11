const express = require('express');
const router = express.Router();
const prefab = require('../../controllers/krunch-prefab/PrefabController');


router.get('/near-poi', async (req, res) => {
    const result = await prefab.searchNearPOI(req.query);

    res.status(200).json({
        message: 'Done',
        output: result
    });
});

router.get('/poi-distance', async (req, res) => {
    const result = await prefab.findPOIDistance(req.query);

    res.status(200).json({
        message: 'Done',
        output: result
    });
});

module.exports = router;