const schedule = require("node-schedule");
const nodemailer = require('nodemailer');
const config = require('./config');
const request = require('request');
let webStatusCode = '';
let webStatusMsg = '';
let j = schedule.scheduleJob('* * 23 * * *', function(){
    request({
        url:config.webUrl,
        method:"get",
        json: true,
        headers: {
            "content-type": "application/json",
        }
    },(error, response, body)=>{
        if (!error && response.statusCode == 200) {
            webStatusCode = response.statusCode;
        }else {
            webStatusMsg = error;
        }
       
    })
    nodemailer.createTestAccount((err,account)=>{
        let transporter = nodemailer.createTransport(config.em);
         // 配置内容
         let mailOptions = {
            from: config.em.auth.user, // 发件人地址
            to: `${config.forUser}`, //收件人
            subject: `您的网站(${config.webUrl})状态为：`, // 主题
            html: `${webStatusCode},${webStatusMsg}`
        };
        // 发送
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log('发送失败');
            }else {
                console.log('发送成功');
            }
        })
    })
});