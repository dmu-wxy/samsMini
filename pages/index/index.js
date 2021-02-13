// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    'animals':[],
    'total':'-1'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
      var that = this;//把this对象复制到临时变量that
      wx.request({
        url: 'https://www.smartdog.top/sams/animal/info/', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          if(res){
            that.setData({animals: res.data.data,total: res.data});
          }
        }
      })
    
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getAnimalInfo(){
    console.log("调用了getAnimalInfo函数");
    
  }
})
