// pages/inspur/trace/trace.js

var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buArray: []
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

  },
  getBusiBase: function (e) {
    var traceId = e.detail.value;
    if (traceId == '') {
      return false;
    }
    var data = { "traceId": traceId, "scan_lng": "0", "scan_lat": "0" };
    data = encodeURIComponent(JSON.stringify(data));
    var bu_this = this;
    wx.request({
      url: util.ip + 'ctweb/m/TraceQueryForWeChat.do?method=getTraceInfo', //接口地址
      data: {
        INPUT_JSON_PARAM: data
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      /* header: {
         'content-type': 'application/json' // 默认值
       },*/
      success(res) {
        console.log(res.data);
        bu_this.setData({
          buArray: res.data
        });

      }
    })
  },
  //获取企业简介
  getBusi: function (e) {
    var uid = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../bu/bu?nid=' + uid
    })

  },
})