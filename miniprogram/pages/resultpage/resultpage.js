// miniprogram/pages/resultpage/resultpage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultname:'',
    tempImageUrl:'',
    describe:'',
    trans:''
  },
  
  handleTrans: function(){
    this.setData({
      describe: this.data.trans
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'resultDescribe',
      success: function(res){
        console.log("获取成功")
        console.log(res.data.describe)
        that.setData({
          "describe": res.data.describe
        })
      }
    })

    this.setData({
      "resultname": options.resultname,
      "tempImageUrl": options.tempImageUrl
      })

    // wx.request({
    //   url: 'http://192.168.123.40:5000/peeksearch',
    //   method:'POST',
    //   data:{
    //     "itemname":this.data.resultname
    //   },
    //   success(res){
    //     console.log(res.data["trans"])
    //     that.setData({
    //       describe: res.data["describe"],
    //       trans: res.data["trans"]
    //     })
    //   }
    // })

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
    app.globalData.picgoshowed = false
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