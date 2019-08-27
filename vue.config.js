module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: false
        }
    },
    configureWebpack: {
        devServer: {
            // 解决后台服务于前端服务的跨域问题
            // proxy: {
            //     "/api": {
            //         target: "http://127.0.0.1:3000/",
            //         changOrigin: true
            //     }
            // }
            before(app) {
                // 模拟后台服务器express
                app.get("/api/login", function(req, res) {
                    const { username, passwd } = req.query
                        // console.log(username, passwd);
                    if (username == "kaikeba" && passwd == "123") {
                        res.json({ code: 1, token: "jilei" });
                    } else {
                        res.status(401).json({ code: 0, message: "用户名或者密码错误" })
                    }
                });
                // 保护接口中间件
                function auth(req, res, next) {
                    if (req.headers.token) {
                        // 已认证
                        next()
                    } else {
                        res.sendStatus(402)
                    }
                }
                // 获取登录用户信息
                app.get("/api/userinfo", auth, function(req, res) {
                    res.json({ code: 1, data: { name: "tom", age: 20 } })
                });

                app.get("/api/goods", function(req, res) {
                    res.json({
                        code: 1,
                        slider: [{
                                id: 21,
                                img: "/img/01.jpg"
                            },
                            {
                                id: 22,
                                img: "/img/02.jpg"
                            },
                            {
                                id: 23,
                                img: "/img/03.jpg"
                            },
                            {
                                id: 24,
                                img: "/img/04.jpg"
                            }
                        ],
                        data: {
                            fe: [{
                                    id: 1,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/01.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/02.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/03.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/04.jpg"
                                },
                            ],
                            python: [{
                                    id: 1,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/01.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/02.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/03.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/04.jpg"
                                },
                            ],
                            java: [{
                                    id: 1,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/01.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/02.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/03.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/04.jpg"
                                },
                            ],
                            bigdata: [{
                                    id: 1,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/01.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/02.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/03.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/04.jpg"
                                }
                            ],
                            ai: [{
                                    id: 1,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/01.jpg"
                                },
                                {
                                    id: 2,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/02.jpg"
                                },
                                {
                                    id: 3,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/03.jpg"
                                },
                                {
                                    id: 4,
                                    title: "Vue2.x实战",
                                    price: "100",
                                    img: "img/04.jpg"
                                },
                            ],
                        },
                        keys: ["fe", "python", "java", "bigdata", "ai"]
                    });
                });
            }
        }
    }
};