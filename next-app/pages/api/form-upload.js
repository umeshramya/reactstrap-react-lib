// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const formidable = require('formidable-serverless')
export default (req, res) => {
    try {

      const form = new formidable.IncomingForm();
  
      form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
      });
      return
    } catch (error) {
  
      res.status(500).send(error)
    }
    
  }


