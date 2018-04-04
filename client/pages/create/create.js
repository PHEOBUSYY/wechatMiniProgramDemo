// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: '../../resources/img/wechat.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.item) {
      console.log(options.item);
      let item = JSON.parse(options.item);
      this.setData({
        item: item,
      });
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  serialize: function (obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  },
  formReset: function(e){
    if(this.data.item){
      console.log('delte by id ',this.data.item.id);
      wx.request({
        url: 'https://xw3h51ux.qcloud.la/weapp/deleteById',
        data: this.data.item,
        method: 'DELETE',
        // header: {
        //   'content-type': 'application/x-www-form-urlencoded' 
        // },
        success: (res) => {
          console.log(res.data);
          let data = res.data.data;
          console.log(data);
          wx.navigateBack({
            delta: 1
          });
        },
        fail: function (error) {
          console.log(error);
        }
      })
    }else{
      e.target.reset();
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail);
  
   let param = e.detail.value;
   console.log("param ", param);

    wx.request({
      url: 'https://xw3h51ux.qcloud.la/weapp/create',
      data: param,
      method: 'POST', 
      // header: {
      //   'content-type': 'application/x-www-form-urlencoded' 
      // },
      success: (res) => {
        console.log(res.data);
        let data = res.data.data;
        console.log(data);
        wx.navigateBack({
          delta: 1
        });
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },


})