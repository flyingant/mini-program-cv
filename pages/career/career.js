import { convertHtmlToText } from '../../utils/util.js';

const app = getApp()
Page({
  data: {
    career: {
      name: 'Career',
      title: '',
      contents: []
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Career History'
    });
    const cv = app.globalData.cv;
    console.log('Career History:', cv.cards[2]);
    this.setData({
      career: {
        name: 'career',
        title: cv.cards[2].title,
        contents: cv.cards[2].contents.map((career) => {
          career.title = convertHtmlToText(career.title);
          career.description = convertHtmlToText(career.description);
          return career
        })
      }
    });
  },

  onScollUpper: () => {
    console.log('Upper');
  },

  onScollLower: () => {
    wx.navigateTo({
      url: '/pages/education/education'
    })
  },

  onPullDownRefresh: () => {
    wx.navigateTo({
      url: '/pages/education/education'
    })
  }
})
