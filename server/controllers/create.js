
module.exports = async ctx => {
  //连接数据库
  const { mysql: config } = require('../config')


  console.log("param post",ctx.request.body);
  console.log("param get",ctx.request.query);
  let query = ctx.request.body || ctx.request.query;
  
  console.log('query', JSON.stringify(query));
 

  if(!query){
    ctx.state.data = { msg: "cant get post param!!!" };
    return;
  }
  console.log('query id', query.id);
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
    if(query.id){
      var temp = await knex('data')
        .where('id', query.id)
        .update(query)
      console.log("update result", temp);
      ctx.state.data = { msg: "success update" };
    }else{
      var temp = await knex('data')
        .returning('id')
        .insert(query)
      console.log("create result", temp);
      ctx.state.data = { msg: "success create!!!" };
    }
   
  } catch (err) {
    console.log(err);
    ctx.state.data = { msg: "request error!!!!" };
  }


}