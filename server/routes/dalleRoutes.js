import express from 'express';
import * as dotenv from 'dotenv';
import OPenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OPenAI({
    apiKey:process.env.OPEN_AI_KEY,
});

router.route('/').get((req,res)=>{
    res.send('Connected to dalle routes succesfully')
});

router.route('/').post(async(req,res)=>{
try{
    const {prompt}= req.body
    const aiResponse = await openai.images.generate({
        prompt,n:1,size:'1024x1024',response_format:'b64_json',
    })
    console.log(aiResponse)
    const image = aiResponse.data.data[0].b64_json;
     res.status(200).send({photo:image});
}
catch(error){
    // console.log(error.error)
    res.status(500).send(error?.response.error.message)
}
})

export default router;