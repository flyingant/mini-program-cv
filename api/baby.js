import { baseURL } from '../constants';

export const fetchBabyData = (successCal, failCal) => {
  wx.request({
    method: 'GET',
    url: baseURL + 'baby.json',
    success: (res) => {
      if (successCal) successCal(res);
    },
    fail: (res) => {
      if (failCal) failCal(res);
    }
  })
}