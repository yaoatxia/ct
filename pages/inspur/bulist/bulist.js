// pages/inpur/bulist/bulist.js
var Portal = require('../../../utils/portal.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buArray: [],
    searchText:''
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

  },
  getBusiBase: function (e) {
    this.data.searchText = e.detail.value;
    if (this.data.searchText==''){
      return false;
    }
    var bu_this = this;
    Portal.getBusiBase(this.data.searchText, function (data) {
      console.log(data);
      for (var index in data.data) {
        var buName = data.data[index].BUSI_NAME;
        let reg = new RegExp('^(.*)(' + bu_this.data.searchText + ')(.*)$');
        let buNames = reg.exec(buName);
        data.data[index].name1 = buNames[1];
        data.data[index].name2 = buNames[2];
        data.data[index].name3 = buNames[3];
      }
      bu_this.setData({
        buArray: data.data
      });
    })
   
  },
  //获取企业简介
  getBusi: function (e) {
    var uid = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../bu/bu?nid=' + uid
    })
  },
  cancel:function(e){
    this.setData({
      buArray: [],
      searchText:''
    });
  }
})