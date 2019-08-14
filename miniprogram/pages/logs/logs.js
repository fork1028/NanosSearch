// miniprogram/pages/logs/logs.js

Page({

  LogBtn: function (options) {
    wx.navigateBack({
      url:'../index/index'
    })
  },


  /**
   * Page initial data
   */

  data: {

    photo:'https://s2.ax1x.com/2019/08/14/mFiVpt.png',
    hidden: true,
    nocancel: true
  },

  confirm: function () {
    this.setData({
      hidden: true
    });
    console.log("clicked confirm");
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var choice1=options.choice1;
    var choice2=options.choice2;
    this.setData({
      choice1:choice1,
      choice2:choice2
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  /**
     * 显示弹窗
     */
  buttonTap: function () {
    this.setData({
      hidden: false,

    })
  },

  

  //图片点击事件
  event:function(event){
    var photo = [this.data.photo];//将该图片放入一个数组中，每次点击时只查看一张
    console.log(photo);
    wx.previewImage({
      current: photo,     //当前图片地址
      urls: photo,                 //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },

   })
  }

  
})