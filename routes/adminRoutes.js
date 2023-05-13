const express = require('express')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require('../controllers/adminController')
const auth = require('../middlewares/authMiddleware');

const multerDiskerStorage = multer.diskStorage({
  destination: (req, file, calback) => {
    const folder = path.join(__dirname, "../public/image")
    calback(null, folder);
  },
  fileName: (req, file, calback) => {
    let imageName = Date.now() + file.originalname;
    calback(null, imageName);
  },
});

const upload = multer({
  storage: multerDiskerStorage
})

router.get('/', adminController.admin);
router.post('/criar', upload.single('imgProduto'), adminController.criarProduto);
// router.get('/:id/editar', adminController.viewsAttPT);
// router.put('/editar', adminController.editar)
// router.get('/produtos', adminController.listProduto)
// router.delete('/deletar/:id', adminController.deletarProduto);


module.exports = router;
