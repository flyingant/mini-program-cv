const API_CV = require('../../api/cv.js');
const API_BABY = require('../../api/baby.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    avatar: null,
    baby_photo_url: '',
    showBabyModal: false,
  },
  onLoad: function () {
    wx.showNavigationBarLoading();
    // get CV data from the request
    API_CV.fetchCVData(
      (response) => {
        //success callback
        wx.hideNavigationBarLoading();
        console.log('Response Data:', response);
        app.globalData.cv = response.data;

        const cv = app.globalData.cv;
        this.setData({
          avatar: cv.avatar
        });
        //
        // wx.navigateTo({
        //   url: '/pages/contact/contact'
        // })
      },
      () => {
        wx.hideNavigationBarLoading();
        //error callback
      }
    )
  },

  onToggleBabyModal: function () {
    if (this.data.baby_photo_url.length > 0) {
      this.setData({
        showBabyModal: !this.data.showBabyModal
      });
    } else {
      wx.showNavigationBarLoading();
      API_BABY.fetchBabyData(
        (response) => {
          //success callback
          wx.hideNavigationBarLoading();
          console.log('Response Data:', response);
          this.setData({
            baby_photo_url: response.data.url,
            showBabyModal: !this.data.showBabyModal
          });
        },
        () => {
          wx.hideNavigationBarLoading();
          //error callback
        }
      )
    }
  },

  onScollUpper: () => {
    console.log('Upper');
  },

  onScollLower: () => {
    wx.navigateTo({
      url: '/pages/profile/profile'
    })
  },

  onPullDownRefresh: () => {
    wx.navigateTo({
      url: '/pages/profile/profile'
    })
  }
})
