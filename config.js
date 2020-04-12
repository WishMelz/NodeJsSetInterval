module.exports = {
    em: {   // 邮箱配置
        service: 'qq',    // 在这里以QQ邮箱为例
        port: 465, // SMTP 端口
        secureConnection: true, // 使用 SSL
        auth: {
            user: '',
            //这里密码不是qq密码，是你设置的smtp密码
            pass: ''
        }
    },
    forUser: 'i@itsse.cn',    // 接收邮箱
    webUrl: ""    // 网站地址
}