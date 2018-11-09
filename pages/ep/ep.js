// pages/ep/ep.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   epArray:[],
   erDetail:{}
  },
  getBusiBase: function (e) {
    var searchText = e.detail.value;
    var ep_this = this;
    wx.request({
      url: 'http://localhost:8080/ctweb/portal/busi.do?method=busiList', //接口地址
      data: {
        searchText: searchText
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        ep_this.setData({
          epArray : res.data.data
        });
        
      }
    })
  },
  //获取企业简介
  getBusi: function (e) {
    var ep_this = this;
    var nid = e.currentTarget.dataset.id
    wx.request({
      url: 'http://localhost:8080/ctweb/portal/busi.do?method=busi',
      data: {
        nid: nid,
        type:'base'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        ep_this.setData({
          erDetail: res.data
        });

      }
    })
  },
})