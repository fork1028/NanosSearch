// miniprogram/pages/index/index.js

var app = getApp();//取得全局App({..})实例
var userInfo = app.globalData.userInfo;//取得全局变量需要的值
var isApproved=app.globalData.isApproved;

var choice1;
var choice2;

Page({

  /**
   * Page initial data
   */
  

  LogBtn: function (options) {


    if(choice1==undefined){
      isApproved=false;
    }
    else if (choice2 == undefined) {
      isApproved = false;
    }
    else if(choice1!=undefined&&choice2!=undefined){
      isApproved=true;
    }
    

    console.log('isApproved:', isApproved)
    if (isApproved==false){
      wx.showModal({
        title: '提示',
        content: '还未选择年龄/鼻窦类型\r\n *若您左滑返回首页，请重新选择2项数据再确定*',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    if (isApproved == true) {
      wx.navigateTo({
        url: '../logs/logs?choice1=' + choice1 + '&choice2=' + choice2
      })
      isApproved=false;
      choice1=undefined;
      choice2=undefined;
    }
  },

  data: {

    modalHidden: true,

    array: ['6-10岁', '10-16岁', '>16岁'],
    objectArray: [
      {
        id: 0,
        name: '6-10岁'
      },
      {
        id: 1,
        name: '10-16岁'
      },
      {
        id: 2,
        name: '>16岁'
      }
    ],
    array2: ['上颌窦', '额窦', '蝶窦', '上颌窦+额窦', '上颌窦+蝶窦', '额窦+蝶窦','上颌窦+额窦+蝶窦'],
    objectArray: [
      {
        id: 0,
        name: '上颌窦'
      },
      {
        id: 1,
        name: '额窦'
      },
      {
        id: 2,
        name: '蝶窦'
      },
      {
        id: 3,
        name: '上颌窦+额窦'
      },
      {
        id: 4,
        name: '上颌窦+蝶窦'
      },
      {
        id: 5,
        name: '额窦+蝶窦'
      },
      {
        id :6,
        name: '上颌窦+额窦+蝶窦'
      }
    ],
    
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带下标为', e.detail.value)
    console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value])
    choice1 = this.data.array[e.detail.value]
    this.setData({
      index: e.detail.value
    })
  },

  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带下标为', e.detail.value)
    console.log('picker发送选择改变，携带值为', this.data.array2[e.detail.value])
    choice2 = this.data.array2[e.detail.value]
    this.setData({
      index2: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

 
  /**
   * 点击取消
   */
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
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
  }

  

})