import { convertHtmlToText } from '../../utils/util.js';

const app = getApp()
Page({
  data: {
    skill: {
      name: 'skill',
      title: 'Skill',
      contents: []
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'Skills'
    });
    const cv = app.globalData.cv;
    console.log('Skills:', cv.cards[1]);
    this.setData({
      skill: {
        name: 'skill',
        title: cv.cards[1].title,
        contents: cv.cards[1].contents.map((skill) => {
          skill.description = convertHtmlToText(skill.description);
          return skill
        })
      }
    });
  },

  onScollUpper: () => {
    console.log('Upper');
  },

  onScollLower: () => {
    wx.navigateTo({
      url: '/pages/career/career'
    })
  }
})
