// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    'animals':[],
    'total':0,
    'pageNum':1,
    'size':10
  },
  onReady: function () {
    wx.stopPullDownRefresh();
    var that = this;
    that.setData({
      pageNum:1,
      size:10,
      total:0,
      animals:[]
    });
    that.getDateList();
  },
  onPullDownRefresh: function () {
    this.onReady(); //重新加载onLoad()
  },
  getDateList: function(){
    var that = this;//把this对象复制到临时变量that
    wx.request({
      url: 'https://www.smartdog.top/sams/system/config/animal/?page=' + that.data.pageNum + '&size=' + that.data.size, 
      data: {
      },
      header: {
        'content-type': 'application/json' 
      },
      success (res) {
        if(res){
          var pageNum = that.data.pageNum + 1;
          var animals = that.data.animals;
          var newAnimalsData = res.data.data;
          animals = animals.concat(newAnimalsData);
          that.setData({animals: animals,total: res.data.total,pageNum:pageNum});
        }
      }
    })
  },
  onReachBottom: function () { 
    var that = this;
    that.getDateList();//重新调用请求获取下一页数据
  },
})
