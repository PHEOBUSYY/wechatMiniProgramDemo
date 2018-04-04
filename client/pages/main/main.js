// pages/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    defaultLogo: '../../resources/img/wechat.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  requestData: function(){
    wx.request({
      url: 'https://xw3h51ux.qcloud.la/weapp/main',
      success: (res) => {
        console.log(res.data);
        let data = res.data.data;
        console.log(data);
        this.setData({
          list: data.list
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
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
    console.log("onShow");
    this.requestData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide");
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
  onItemClick: function(event){
    var item = event.currentTarget.dataset.item;

    wx.showToast({
      title: 'click' + item.title,
    });
    wx.navigateTo({
      url: '/pages/create/create?item='+JSON.stringify(item)
    })
  },
  navToCreate: function(event){
    console.log("click");
    wx.navigateTo({
      url: '/pages/create/create'
    })
  },
  scroll: function(event){
    console.log(event.detail);
    if (event.detail.scrollTop > 40){
      this.setData({
        isSub: false
      })
    }else{
      this.setData({
        isSub: true
      })
    }
  },
  imageLoadError: function(event){
    let index = event.target.dataset.index;
   
    let update = this.data.list;
    update[index].logo = this.data.defaultLogo;
    this.setData({
      list: update
    })

  }
})