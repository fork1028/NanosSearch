// miniprogram/pages/index/index.js

var app = getApp();//取得全局App({..})实例
var userInfo = app.globalData.userInfo;//取得全局变量需要的值

var choice1;
var choice2;

Page({

  /**
   * Page initial data
   */
  LogBtn: function(options){
    wx.navigateTo({
      url: '../logs/logs?choice1=' + choice1 + '&choice2=' + choice2
    })
  },

  data: {
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
    ]
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
  }

})