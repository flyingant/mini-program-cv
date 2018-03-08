import { convertHtmlToText } from '../../utils/util.js';

const app = getApp()
Page({
  data: {
    title: '',
    name: '',
    role: '',
    introduction: ''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Profile'
    });
    const cv = app.globalData.cv;
    this.setData({
      title: cv.title,
      name: cv.name,
      role:cv.role,
      introduction: convertHtmlToText(cv.summary[0])
    });
  },

  onScollUpper: () => {
    console.log('Upper');
  },

  onScollLower: () => {
    wx.navigateTo({
      url: '/pages/skill/skill'
    })
  },

  onPullDownRefresh: () => {
    wx.navigateTo({
      url: '/pages/skill/skill'
    })
  }
})
