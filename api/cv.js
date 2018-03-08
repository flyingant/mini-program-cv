import { baseURL } from '../constants';

export const fetchCVData = (successCal, failCal) => {
  wx.request({
    method: 'GET',
    url: baseURL + 'cv.json',
    success: (res) => {
      if (successCal) successCal(res);
    },
    fail: (res) => {
      if (failCal) failCal(res);
    }
  })
}