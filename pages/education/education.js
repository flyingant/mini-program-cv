import { convertHtmlToText } from '../../utils/util.js';

const app = getApp()
Page({
  data: {
    education: {
      name: 'education',
      title: '',
      contents: []
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Education'
    });
    const cv = app.globalData.cv;
    console.log('Education:', cv.cards[3]);
    this.setData({
      education: {
        name: 'education',
        title: cv.cards[3].title,
        contents: cv.cards[3].contents.map((education) => {
          education.title = convertHtmlToText(education.title);
          education.description = convertHtmlToText(education.description);
          return education
        })
      }
    });
  },

  onScollUpper: () => {
    console.log('Upper');
  },

  onScollLower: () => {
    wx.navigateTo({
      url: '/pages/contact/contact'
    });
  },

  onPullDownRefresh: () => {
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  }
})
