var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultname:"",
    tempImageUrl:"",
    describe:"",
    imgCloudID:""
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (!app.globalData.picgoshowed){
      app.globalData.picgoshowed=true;
      var that = this
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          that.data.tempImageUrl = res.tempFilePaths
          wx.showToast({title: '加载中', icon: 'loading', duration: 10000});
          wx.cloud.uploadFile({
            cloudPath: Math.random()+".jpg", // 上传至云端的路径
            filePath: res.tempFilePaths[0], // 小程序临时文件路径
            success: res => {
              // 返回文件 ID
              wx.cloud.callFunction({
                // 云函数名称
                name: 'baidu',
                // 传给云函数的参数
                data: {
                  imgCloudURL: res.fileID
                },
                success: function (res) {
                  console.log(res.result.result[0].name) //返回信息
                  // console.log(res.result.result[0].baike_info.description)

                  that.setData({
                    //['result'][0]['name']
                    //['result']['landmark']
                    resultname: res.result.result[0].name,
                    describe: res.result.result[0].baike_info.description
                  })

                  wx.setStorage({
                    data: {
                      describe: that.data.describe},
                    key: 'resultDescribe',
                  })
                  
                  console.log(that.data.describe)
                  wx.hideToast()
                  wx.redirectTo({
                    url: '../resultpage/resultpage?resultname=' + that.data.resultname + '&tempImageUrl=' + that.data.tempImageUrl,
                  })
                },
                fail: console.error
              })





            },
            fail: console.error
          })


          // wx.getFileSystemManager().readFile({
          //   filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          //   encoding: 'base64', //编码格式
          //   success: res => { //成功的回调
          //     wx.cloud.callFunction({
          //       // 云函数名称
          //       name: 'baidu',
          //       // 传给云函数的参数
          //       data: {
          //         imgCloudURL: res.data
          //       },
          //       success: function (res) {
          //         console.log(res.result.result[0].name) //返回信息
          //         // console.log(res.result.result[0].baike_info.description)

          //         that.setData({
          //           //['result'][0]['name']
          //           //['result']['landmark']
          //           resultname: res.result.result[0].name,
          //           describe: res.result.result[0].baike_info.description
          //         })

          //         wx.setStorage({
          //           data: {
          //             describe: that.data.describe},
          //           key: 'resultDescribe',
          //         })
                  
          //         console.log(that.data.describe)

          //         wx.redirectTo({
          //           url: '../resultpage/resultpage?resultname=' + that.data.resultname + '&tempImageUrl=' + that.data.tempImageUrl,
          //         })
          //       },
          //       fail: console.error
          //     })
              
          //     /*
          //     wx.request({
          //       url: 'http://192.168.123.40:5000/picsearch',
          //       method: 'POST',
          //       data: {
          //         "base64": res.data
          //       },
          //       success(res) {
          //         console.log(res.data)
          //         that.setData({
          //           //['result'][0]['name']
          //           //['result']['landmark']
          //           resultname: res.data['result'][0]['keyword']
          //         })
          //         wx.redirectTo({
          //           url: '../resultpage/resultpage?resultname=' + that.data.resultname + '&tempImageUrl=' + that.data.tempImageUrl,
          //         })
          //       }
          //     })*/
          //   }
          // })
        }
      })
    }
    
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