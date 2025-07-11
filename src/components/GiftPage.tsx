import { FaRibbon,  } from 'react-icons/fa'
import { useState } from 'react'
import { ContinuousConfetti } from './ContinuousConfetti'

interface Gift {
  id: number
  color: string
  size: string
  content: string
  emoji: string
}

export function GiftPage() {
  const [openingGift, setOpeningGift] = useState<number | null>(null)
  const [openedGifts, setOpenedGifts] = useState<number[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null)

  const gifts: Gift[] = [
    { id: 1, color: 'from-pink-400 to-pink-600', size: 'large', content: 'Box of Premium custom Chocolates', emoji: '🍫' },
    { id: 2, color: 'from-purple-400 to-purple-600', size: 'medium', content: 'Travel to Arcades Adventure', emoji: '🎮' },
    { id: 3, color: 'from-blue-400 to-blue-600', size: 'medium', content: 'Any wish you have(open to you)', emoji: '💆' },
    { id: 4, color: 'from-yellow-400 to-yellow-600', size: 'small', content: 'surprise gift box', emoji: '🎵' },
    { id: 5, color: 'from-green-400 to-green-600', size: 'large', content: 'Frienship park visit', emoji: '✈️' },
    { id: 6, color: 'from-red-400 to-red-600', size: 'small', content: 'special lunch', emoji: '🍽️' }
  ]

  const handleGiftClick = (gift: Gift) => {
    if (!openedGifts.includes(gift.id)) {
      setOpeningGift(gift.id)
      setTimeout(() => {
        setOpenedGifts([...openedGifts, gift.id])
        setSelectedGift(gift)
        setShowModal(true)
        setOpeningGift(null)
      }, 800)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedGift(null)
  }

  return (
    <div className="h-full bg-gradient-to-br from-yellow-50 to-pink-100 overflow-hidden relative">
      <ContinuousConfetti />
      
      <div className="h-full flex flex-col px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
            Special Gifts For You!
          </h2>
          <p className="text-lg text-gray-600">
          Please say yesss for old time’s sake 🎁🙄 😭
          </p>
        </div>

        {/* Gift Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[calc(100vh-280px)]">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              onClick={() => handleGiftClick(gift)}
              className={`
                relative cursor-pointer transform transition-all duration-500 hover:scale-110
                ${openedGifts.includes(gift.id) ? 'opacity-30' : ''}
                ${openingGift === gift.id ? 'animate-gift-open' : ''}
                ${gift.size === 'large' ? 'h-32' : gift.size === 'medium' ? 'h-28' : 'h-24'}
              `}
            >
              {/* Gift Box */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${gift.color} rounded-lg shadow-lg
                ${openingGift === gift.id ? 'animate-box-lid' : ''}
              `}>
                {/* Ribbon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-full h-3 bg-white opacity-30" />
                  <div className="absolute h-full w-3 bg-white opacity-30" />
                  <FaRibbon className="text-white text-2xl z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="text-center mt-4">
          <p className="text-lg text-purple-700 font-semibold">
            {openedGifts.length === gifts.length
              ? "All gifts opened! 🎉"
              : `${openedGifts.length} of ${gifts.length} gifts opened`}
          </p>
        </div>
      </div>

      {/* Gift Modal */}
      {showModal && selectedGift && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full transform animate-bounce-in shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedGift.emoji}</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                You Got It!
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {selectedGift.content}
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                {'⭐'.repeat(5).split('').map((star, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    {star}
                  </span>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Awesome!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}