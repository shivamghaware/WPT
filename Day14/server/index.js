const express = require('express');
const cors=require('cors');
const config=require('config');
const jwt=require('jsonwebtoken');

// routes
const employeesRoute=require('./routes/employees');
const authRoute=require('./routes/auth');


const app = express();
app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    if(req.url.includes('signin')){
        next();
    }else{
        if(req.headers.authorization!=undefined){
            var authHeaderDetails=req.headers.authorization;
            //token "bearer df32sndf32324215155dsfds32132ifdsifj";
            var tokenRecieved=authHeaderDetails.split(' ')[1];
            console.log(tokenRecieved);

            const secretKey=config.get("jwtsecretkey");
            const tokenDecrypted=jwt.verify(tokenRecieved,secretKey);
            if(tokenDecrypted.isValid==true){
                next();
            }else{
                res.json({"error":"token is not valid!"});
            }
        }else{
            res.json({"error":"token not found!"});
        }
    }
})

app.use("/signin",authRoute);
app.use("/emp",employeesRoute);

const port = 9999;
app.listen(port, () => {
    console.log(`server started at: http://127.0.0.1:${port}/emp`);
})