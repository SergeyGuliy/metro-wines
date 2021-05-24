export const initGeolocation = (userTradeCenter) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      resolve({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    }, function () {
      reject(new Error('User dont agree'))
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  })
}
