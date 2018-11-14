// pages/inpur/bu/bu.js
var util = require('../../../utils/util.js');
var Portal = require('../../../utils/portal.js')
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
    buContact: '',
    buInfo:''
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
    var type = "base";
    Portal.getBusi(nid, type, function (data) {
      console.log(data);
      bu_this.setData({
        buName: data.BUSI_NAME,
        buAddr: data.BUSI_ADDR,
        buTel: data.CONTACT_TEL,
        buPhone: data.CONTACT_PHONE,
        buQQ: data.CONTACT_QQ,
        buInfo: data.BUSI_INFO,
        buContact: (data.CONTACT_TEL ? data.CONTACT_TEL : data.CONTACT_PHONE),
        buCrttime: util.getDateFormat(new Date(data.CRT_TIME), 'yyyy-MM-dd hh:mm:ss')
      });
    });    
  }  
})