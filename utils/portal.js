
var Portal = {
  ip: "http://zs.sdcom.gov.cn" ,//"http://148e82310e.imwork.net",
  ctx: "/ctweb",
  //获取服务数据
  getData: function (url, data, callback) {
    url = Portal.ip + Portal.ctx+url;
    wx.request({
      url: url,
      data: data,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success(res) {
        if (res.data) {
          callback(res.data);
        }
      }
    })
  },
  //获取新闻分页列表
  getNoticeList: function (noticeType, page, count, searchText, callback) {
    var url = "/portal/notice.do?method=noticeList";
    var data = {
      noticeType: noticeType,
      page: page,
      count: count,
      searchText: searchText,
      r: Math.random()
    };
    Portal.getData(url, data, callback);
  },
      // 获取企业简介
  getBusi: function(nid, type, callback) {
    var url = "/portal/busi.do?method=busi";
    var data = {
      nid:nid,
      type:type
    }
    Portal.getData(url, data, callback);
  },
    //获取企业列表
  getBusiBase: function (searchText, callback) {
    var url = "/portal/busi.do?method=busiList";
    var data = {
      searchText: searchText
    }
    Portal.getData(url, data, callback);
  }
  
};
module.exports = {
  getBusi: Portal.getBusi,
  getBusiBase: Portal.getBusiBase,
  getNoticeList:Portal.getNoticeList
}

