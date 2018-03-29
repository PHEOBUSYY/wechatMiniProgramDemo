module.exports = async ctx => {
  //连接数据库
  const { mysql: config } = require('../config')

  console.log("param",ctx.request.body.value);
  // console.log("param2", ctx.query.value);
  let query = ctx.request.body.value;
  console.log('query', query);
  if(!query){
    ctx.state.data = { msg: "cant get post param!!!" };
    return;
  }
 
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
    var temp = await knex('data')
      .returning('id')
      .insert(query)
    // var temp = await knex.select().table('data');
    console.log("await temp", temp);

    console.log("await reuslt ");
    ctx.state.data = {msg: "nice!!!!" };
  } catch (err) {
    console.log(err);
    ctx.state.data = { msg: "error!!!!" };
  }


}