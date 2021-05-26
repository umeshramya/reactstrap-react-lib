// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    try {

      
      res.status(200).json({ mes: 'Deleted John Doe' })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
    
  }