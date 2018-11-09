// pages/inpur/bu/bu.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buName: '',
    buAddr: '',
    butel: '',
    buPhone: '',
    buQQ: '',
    buContact: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var nid = option.nid
    this.getBusi(nid)
  },
  //获取企业简介
  getBusi: function (nid) {
    var bu_this = this;
    wx.request({
      url: util.ip +'ctweb/portal/busi.do?method=busi',
      data: {
        nid: nid,
        type: 'base'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        bu_this.setData({
          buName: res.data.BUSI_NAME,
          buAddr: res.data.BUSI_ADDR,
          buTel: res.data.CONTACT_TEL,
          buPhone: res.data.CONTACT_PHONE,
          buQQ: res.data.CONTACT_QQ,
          buContact: (res.data.CONTACT_TEL ? res.data.CONTACT_TEL : res.data.CONTACT_PHONE),
          buCrttime: util.getDateFormat(new Date(res.data.CRT_TIME), 'yyyy-MM-dd hh:mm:ss')
        });

      }
    })
  }  
})