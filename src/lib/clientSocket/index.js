import io from 'socket.io-client'

const initSocket = () => {
  if (typeof window.clientSocket === 'undefined') {
    window.clientSocket = io()
  }

  return window.clientSocket
}

const socket = initSocket()

socket.on('connect', () => {
  console.log('client connected')
})

export default socket
