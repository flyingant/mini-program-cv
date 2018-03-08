const app = getApp()

Page({
  data: {
    title: 'Project'
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'CV | Project'
    });
  }
})
