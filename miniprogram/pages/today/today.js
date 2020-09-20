// miniprogram/pages/today/today.js
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    res:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    var month = date.getMonth() + 1
    console.log(month)
    
    var _random = parseInt(Math.random()*(2+1),10);

    function recommend(randomNum,month){
      if(3<=parseInt(month) && parseInt(month)<=6){
        switch(parseInt(randomNum)){
          case 0:
            return {
              name:"龙泉山脉",
              imgUrl: "../../images/today-img/longquanshanmai.jpg"
            }
          case 1:
            return {
              name:"麻婆豆腐",
              imgUrl: "../../images/today-img/mapodoufu.jpg"
            }
          case 2:
            return {
              name:"宽窄巷子",
              imgUrl: "../../images/today-img/kuanzhaixiangzi.jpg"
            }
        }
      }else{
        if(6<parseInt(month) && parseInt(month)<=9){
          switch(parseInt(randomNum)){
            case 0:
              return {
                name:"凉粉",
                imgUrl: "../../images/today-img/liangfen.jpg"
              }
            case 1:
              return {
                name:"火锅",
                imgUrl: "../../images/today-img/huoguo.jpg"
              }
            case 2:
              return {
                name:"九眼桥",
                imgUrl: "../../images/today-img/jiuyanqiao.jpg"
              }
          }
        }else{
          if(9<parseInt(month) && parseInt(month)<=12){
            switch(parseInt(randomNum)){
              case 0:
                return {
                  name:"大熊猫",
                  imgUrl: "../../images/today-img/daxiongmao.jpg"
                }
              case 1:
                return {
                  name:"辣子鸡",
                  imgUrl: "../../images/today-img/laziji.jpg"
                }
              case 2:
                return {
                  name:"武侯祠",
                  imgUrl: "../../images/today-img/wuhouci.jpg"
                }
            }
          }else{
            switch(parseInt(randomNum)){
              case 0:
                return {
                  name:"人民公园",
                  imgUrl: "../../images/today-img/renmingongyuan.jpg"
                }
              case 1:
                return {
                  name:"羊肉汤",
                  imgUrl: "../../images/today-img/yangroutang.jpg"
                }
              case 2:
                return {
                  name:"成都博物馆",
                  imgUrl: "../../images/today-img/chengdubowuguan.jpg"
                }
            }
          }
        }
      }
    }

    var _res = recommend(_random,month)
    this.setData({
      res: _res
    })
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
    app.globalData.picgoshowed = false
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