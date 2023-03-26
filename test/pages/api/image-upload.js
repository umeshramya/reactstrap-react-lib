// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudanry = require("cloudinary").v2
export default async(req, res) => {
  try {
    const data = req.body.data
    // console.log("req.body")
    cloudanry.config({
      "api_key": process.env.api_key,
      "api_secret": process.env.api_secret,
      "cloud_name": process.env.cloud_name,

    })
   let curRes = await cloudanry.uploader.upload(data, {
      "public_id": "org1_letter_pad",
      "overwrite": true
    })

    console.log(curRes)

    res.status(200).json ({mes: "uploaded file"})


    

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }

}




