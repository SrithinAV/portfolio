import express from 'express';

const router = express.Router();

router.use(express.json());

router.post('/connect', async (req, res) => {

    try{
   
    const formData = new FormData();
    formData.append("email", req.body.email);
    formData.append("name", req.body.name);
    formData.append("message", req.body.message);
  
    formData.append("access_key", process.env.ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    res.json({success:data.success})
}
 catch(e)
 {
    res.json({success:data.success})
    console.log(e);

 }

});

export default router;