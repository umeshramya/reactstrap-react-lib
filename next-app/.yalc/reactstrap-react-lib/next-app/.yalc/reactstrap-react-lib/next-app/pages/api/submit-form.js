// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  try {
    let e = new Error();
    throw e.message="intenettional error"
    e.
    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  
}
