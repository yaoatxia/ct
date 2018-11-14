// pages/inspur/list/list.js
var Portal = require('../../../utils/portal.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    cname: '',
    page:0,
    count:3,
    cid:'',
    searchText:'',
    bottom:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var cid = option.cid
    if(!cid){
      cid = '00'
    }
    var cname = option.cname
    if(!cname){
      cname = '新闻资讯'
    }
    this.setData({
      cname: cname,
      cid:cid
    })
    this.getNoticeList()
  },
  getNoticeList:function(){
    var list_this = this;
    var page = this.data.page;   
    page = page + 1;
    Portal.getNoticeList(this.data.cid, page, this.data.count, this.data.searchText, function (data) {
      if (data.data.length>0){
        var array = list_this.data.list;
        array = array.concat(data.data);        
        list_this.setData({
          list: array,
          page: page
        })
      }else{
        list_this.setData({
          bottom: "已经到底了"
        })
      }
      
    })
  },
  //监听屏幕滚动 判断上下滚动  
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或者最小时，为什么要做这一步是由于在手机实测小程序的时候会发生滚动条回弹，所以为了解决回弹，设置默认最大最小值   
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动   
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      console.log('向下滚动');
    } else {
      console.log('向上滚动');
      this.getNoticeList()
    }
    //给scrollTop重新赋值    
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },
  //上滑加载更多
  onReachBottom:function(e){
    console.log('加载更多')
    this.getNoticeList();
  },
  enablePullDownRefresh: function (e) {
    console.log('上啦刷新')
  }
})