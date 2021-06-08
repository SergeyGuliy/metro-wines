export default function ({ store, redirect, $cookies, route }) {
  const $userType = store.state.userType
  if ($userType === 'restoraunt') {
    if (!['retail', 'wine-cart'].includes(route.name)) {
      return redirect('/retail')
    }
  } else if ($userType === 'self') {
    if (['retail', 'wine-cart'].includes(route.name)) {
      return redirect('/')
    }
  } else {
    return redirect('/retail')
  }
}
