// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    try {

      console.log(req.body)
      res.status(200).json({ mes: 'Deleted John Doe' })
    } catch (error) {
  
      res.status(500).send(error)
    }
    
  }