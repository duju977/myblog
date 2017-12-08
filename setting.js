//数据库配置信息
module.exports = {
    cookieSecert:'xqq',  //加密cookie使用的字符串
    db:'blog', //数据库的名称
    host:'locahost',//数据库的地址
    port:27017 //数据库的地址
}
//我们把数据库的配置信息写在这里，是为了在连接数据库的时候，
// 一旦数据库的地址或者是端口号发生变化时，我们只需修改就好了