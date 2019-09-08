// miniprogram/pages/position/position.js

var choice2;


Page({

  /**
   * Page initial data
   */
  data: {

    itemList: ['仅为筛窦病变', '上颌窦、额窦、蝶窦的单窦病变或多窦病变', '筛窦病变合并上颌窦、额窦、蝶窦的多窦病变'],


    modalHidden: true,
    nocancel: true,

    index0:null


  },


  LogBtn: function (options) {
    if (this.data.index0 == 0) {
      this.setData({
        modalHidden: false
      })
    }
    if (this.data.index0==1 || this.data.index0==2) {
      wx.redirectTo({
        url: '../third/third?index0=' + this.data.index0
      })
    }
    if (this.data.index0==null) {
      wx.showModal({
        title: '提示',
        content: '还未选择',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
  },

  choose: function(){
    var that=this;
    wx.showActionSheet({
      itemList: this.data.itemList,
      success: function (res) {
        console.log(res.tapIndex);
        that.setData({
          index0: res.tapIndex
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })

  },

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
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

  }
})