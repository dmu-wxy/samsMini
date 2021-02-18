// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ScreenTotalW: 750,
    ScreenTotalH: -1,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/map/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/map/location.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      ScreenTotalH: 750 * wx.getSystemInfoSync().screenHeight /wx.getSystemInfoSync().screenWidth
    })
    let that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              wx.getLocation({
                type: 'gcj02', //返回可以用于wx.openLocation的经纬度
                success (res) {
                  that.setData({
                    longitude:res.longitude,
                    latitude:res.latitude
                  });
                  console.log(res.longitude + "," + res.latitude);
                }
               })
            }
          })
        }else{
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success (res) {
              that.setData({
                longitude:res.longitude,
                latitude:res.latitude
              });
              console.log(res.longitude + "," + res.latitude);
            }
           })
        }
      }
    })
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

  }
})