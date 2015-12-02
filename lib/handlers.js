module.exports = {
  helloworld: function helloworld ( request, response ) {
    response.statusCode = 200;
    response({message:'Welcome to our Investment API'});
  }
}
