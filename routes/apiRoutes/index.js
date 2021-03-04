const router = require('express').Router();
const getRoutes = require('../apiRoutes/getRoutes');
const postRoutes = require('../apiRoutes/postRoutes');


router.use(getRoutes);
router.use(postRoutes);

module.exports = router;