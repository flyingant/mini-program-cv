import { convertHtmlToText } from '../../utils/util.js';

const app = getApp()
Page({
  data: {
    email: '',
    wechat: '',
    github: ''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Contact'
    });
    const cv = app.globalData.cv;
    this.setData({
      email: cv.email,
      wechat: cv.wechat,
      github: cv.github
    });
  },

  onScollUpper: () => {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },

  onPullDownRefresh: () => {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})
