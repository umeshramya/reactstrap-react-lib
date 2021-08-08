// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudanry = require("cloudinary").v2
export default (req, res) => {
  try {
    const data = req.body.data
    console.log(data)
    cloudanry.config({
      "api_key": process.env.api_key,
      "api_secret": process.env.api_secret,
      "cloud_name": process.env.cloud_name,

    })
    cloudanry.uploader.upload(data, {
      "public_id": "org1_letter_pad",
      "overwrite": true
    }, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
    res.status(200).json({ mes: "don" })

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }

}




