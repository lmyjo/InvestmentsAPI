module.exports = {
  helloworld: function helloworld ( request, response ) {
    response.statusCode = 200;
    response({message:'Welcome to our Investment API'});
  },

  postHandler: function postHandler (req, res) {
    res({message:'hello'});
  },

  putHandler: function putHandler (req, res) {
    res({message:'hello'});
  },

  getHandler: function getHandler (req, res) {
    res({message:'hello'});
  },

  deleteHandler: function deleteHandler (req, res) {
    
  }
};
