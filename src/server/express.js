const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send(
       ` <html>
            <body>
                <div id="app">
                    <h1>开课吧</h1>
                    <p class="demo">服务端渲染</p>
                </div>
            </body>
        </html>`
    )
})

app.listen(3000, ()=>{
    console.log('启动成功')
})