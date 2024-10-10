export const getNotificationPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Разрешение на уведомления получено.')
    } else {
      console.error('Разрешение на уведомления отклонено.')
    }
  })
}
