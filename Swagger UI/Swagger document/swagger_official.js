const SwaggerUI = require('swagger-ui');
const express = require('express');

const pathToswaggerUi = require('swagger-ui-dist').absolutePath()

const app = express();
app.use(express.static(pathToswaggerUi))
const SwaggerUIBundle =require('swagger-ui-dist').SwaggerUIBundle

const ui = SwaggerUIBundle({
    url:"http://petstore.swagger.io/v2/swagger.json",
    dom_id :"",
    present : [
        // SwaggerUIBundle.present.apis,
        // SwaggerUIBundle.SwaggerUIStandAlonePresent
    ],
    layout: "StandAloneLayout"
})

const ui = SwaggerUI({...})
// Method can be called in any place after calling constructor SwaggerUIBundle
ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile",
    additionalQueryStringParams: {test: "hello"},
    usePkceWithAuthorizationCodeGrant: true
  })

// app.get('/', (req, res) => {
//     console.log('They same way');
//     res.send('from other side')
// })

app.listen(3009)    

// SwaggerUI({
//     dom_id: 'Kaalwenintneramunubinmentenbinetemenetenbinmetenrahul'
// })