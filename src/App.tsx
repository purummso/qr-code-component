import styles from './App.module.css'
import qr_image from './assets/image-qr-code.png'

function App() {

  return (
    <div className={styles.container}>
      <img className={styles.qr} src={qr_image} alt="QR Code that you can scan with your mobile to access example.com" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default App
