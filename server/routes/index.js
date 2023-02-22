const { Router } = require('express')
const router = Router()

const web = require('./web')
const api = require('./api')

router.use('/', web);
router.use('/api', api);

module.exports = router