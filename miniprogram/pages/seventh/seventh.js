// miniprogram/pages/seventh/seventh.js

var choice7;
var index0;

Page({

  /**
   * Page initial data
   */
  data: {

    modalHidden: true,
    nocancel: true,
    modalHidden1:true,
    modalHidden2:true,

    array: ['是', '否'],
    objectArray: [
      {
        id: 0,
        name: '是'
      },
      {
        id: 1,
        name: '否'
      }
    ],
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带下标为', e.detail.value)
    console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value])
    //传参
    choice7 = this.data.array[e.detail.value]
    this.setData({
      index: e.detail.value
    })
  },

  BackBtn:function(){
    wx.navigateBack({
      url: '../home/home'
    })
  },


  LogBtn: function (options) {
    if (choice7 == "是") {
      this.setData({
        modalHidden: false
      })
    }
    if (choice7 == "否") {
      if (index0 == 2) {
        this.setData({
          modalHidden1: false
        })
      }else{
        this.setData({
          modalHidden2: false
        })
      }
      if (choice7 == undefined) {
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
      
    }

  

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
   *  点击确认
   */
  modalConfirm1: function () {
    // do something
    this.setData({
      modalHidden1: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm2: function () {
    // do something
    this.setData({
      modalHidden2: true
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    index0 = options.index0;
    this.setData({
      index0: index0
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

  }
})