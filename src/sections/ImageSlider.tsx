import { motion } from 'framer-motion'
import { useState } from 'react'

import AnanyaBadithe from '../assets/images/AnanyaBadithe.png'
import ElainaTesfai from '../assets/images/ElainaTesfai.png'
import JohannCardona from '../assets/images/JohannCardona.jpg'
import MarwanHajMohamed from '../assets/images/MarwanHajMohamed.png'
import Nitya_Powar from '../assets/images/Nitya_Powar.png'
import RobertShuttleworth from '../assets/images/RobertShuttleworth.png'
import SamuelAsareBotwe from '../assets/images/SamuelAsareBotwe.png'
import SuryaanshMaithani from '../assets/images/SuryaanshMaithani.jpg'
import ThoyburRahman from '../assets/images/ThoyburRahman.png'

const images = [
  AnanyaBadithe,
  ElainaTesfai,
  JohannCardona,
  MarwanHajMohamed,
  Nitya_Powar,
  RobertShuttleworth,
  SamuelAsareBotwe,
  SuryaanshMaithani,
  ThoyburRahman
]

const positions = ['center', 'left1', 'left', 'right', 'right1', 'hidden']

const imageVariants = {
  center: { x: '0%', scale: 1, zIndex: 5, opacity: 1 },
  left1: { x: '-45%', scale: 0.8, zIndex: 3, opacity: 1 },
  left: { x: '-80%', scale: 0.6, zIndex: 2, opacity: 1 },
  right: { x: '80%', scale: 0.6, zIndex: 2, opacity: 1 },
  right1: { x: '45%', scale: 0.8, zIndex: 3, opacity: 1 },
  hidden: { opacity: 0, scale: 0.3, zIndex: 0 }
}

const ImageSlider = () => {
  const [centerIndex, setCenterIndex] = useState(0)

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % images.length)
  }

  const handleBack = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getPosition = (index: number) => {
    const diff = (index - centerIndex + images.length) % images.length

    if (diff === 0) return 'center'
    if (diff === 1) return 'right1'
    if (diff === 2) return 'right'
    if (diff === images.length - 1) return 'left1'
    if (diff === images.length - 2) return 'left'
    return 'hidden'
  }

  return (
    <div className="flex items-center justify-center bg-black h-screen relative overflow-hidden">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="team member"
          animate={getPosition(index)}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="absolute w-[320px] h-[420px] object-cover rounded-xl"
        />
      ))}

      <div className="absolute bottom-10 flex gap-4">
        <button
          className="bg-indigo-500 text-white px-5 py-2 rounded-md"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-indigo-500 text-white px-5 py-2 rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
