

const indexController = {
  index: async (req, res, pageTitle) => {
  
      res.render('index', {
        title: "",
       
      });
  },

};

module.exports = indexController;


