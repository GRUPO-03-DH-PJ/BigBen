const express = require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require('../controllers/adminController')
const auth = require('../middlewares/authMiddleware');

const multerDiskerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../public/images")
    callback(null, folder);
  },
  fileName: (req, file, calback) => {
    let imageName = Date.now() + file.originalname;
    calback(null, imageName);
  },
});

const upload = multer({
  storage: multerDiskerStorage
})

router.get('/', adminController.viewATT)
router.get('/lista-de-produtos', adminController.listProduct)
router.get('/cadastrando-produtos', adminController.pageProduct)
router.post('/cadastrando-produtos', upload.single('images'), adminController.storeProducts)

//Update
router.get('/editando-produtos/:id', adminController.editProducts)
router.put('/editando-produtos/:id', adminController.updateProducts)
router.delete('/deletar-produto/:id', adminController.destroyProducts)


module.exports = router;
