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

  // function query() {
  //   return knex.select().table('data');
  // }
  // let reuslt = [];
  // let msg = "ni hao";
  // (async () => {
  try {
    var temp = await knex.select().table('data');
    console.log("await temp", temp);
    // reuslt = temp;
    // let msg = "bu hao";
    // ctx.body = { list: temp, msg: 'good job' };
    // ctx.state.data = { list: temp, msg: 'good job' };
    console.log("await reuslt ");
    ctx.state.data = { list: temp, msg: "haha"};
  } catch (err) {
    console.log(err);
  }
  // })();


}