import { useState } from 'react'
import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <>
      <CustomNavbar onOpenContactModal={openContactModal} />
      <HomePage />
      <CustomFooter onOpenContactModal={openContactModal} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </>
  )
}

export default App