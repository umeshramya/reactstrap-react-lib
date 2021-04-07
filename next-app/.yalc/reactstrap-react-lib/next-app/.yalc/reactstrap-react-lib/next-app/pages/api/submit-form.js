// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  try {
    throw "intentional error"
    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  
}
