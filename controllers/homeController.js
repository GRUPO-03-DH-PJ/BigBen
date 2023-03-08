const homeController = {
    home: (req, res, next) => {
        return res.render('home');
    }
}


module.exports = homeController;