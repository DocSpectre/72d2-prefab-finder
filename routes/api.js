const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: '7D2D Prefab Finder'
    });
});

require('./prefab/index')(router);
require('./krunch-prefab/index')(router);

module.exports = router;