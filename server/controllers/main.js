module.exports = async ctx => {
  //连接数据库
  const { mysql: config } = require('../config')


  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.pass,
      database: config.db,
      charset: config.char,
      multipleStatements: true
    },
    debug: true
  });

 
  try {
    //awit可以直接返回promise中的成功数据
    //前提是await必须和async方法搭配使用
    var temp = await knex.select().table('data');
    console.log("await temp", temp);
   
    console.log("await reuslt ");
    ctx.state.data = { list: temp, msg: "haha"};
  } catch (err) {
    console.log(err);
  }
  


}