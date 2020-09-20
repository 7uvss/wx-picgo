
const cloud = require('wx-server-sdk')
var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
var fs = require('fs');

cloud.init()

exports.main = async (event, context) => {
  var APP_ID = "17893568";
  var API_KEY = "oH7jhUonoPSyOdblUQc7oNF8";
  var SECRET_KEY = "kukHITYUfGiPCCNOBU260BBfsr5VIgeD";
  var options = {};
  options["baike_num"] = "1";
  var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
  
  const img = await cloud.downloadFile({

    fileID: event.imgCloudURL,
    
    })
    let buffer = new Buffer(img.fileContent)   
    let str = buffer.toString('base64')
  
  baidureturn = await client.dishDetect(str,options)
  return baidureturn;
}