const jwt = require('jsonwebtoken')
const express = require("express")

const app = express();

const createToken = async() => {
    const token = await jwt.sign({_id: "itsanmolbro"}, "heyashaanaiamnottherephysicallytoseewhataredoingyouareworkingornotbutiamjusttherearoundyoylittle", {
        expiresIn: "5 seconds"
    })
    console.log(token);
    const userVer = await jwt.verify(token, "heyashaanaiamnottherephysicallytoseewhataredoingyouareworkingornotbutiamjusttherearoundyoylittle")
    console.log(userVer);
}

createToken();

app.get('/', (req, res) => {
    console.log("get hi")
    res.send('Hi from other side!')
})

app.listen(4005, () => {
    console.log("server is running");
})







