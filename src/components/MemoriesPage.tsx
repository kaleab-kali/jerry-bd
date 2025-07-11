import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'

interface Memory {
  id: number
  title: string
  subtitle: string
  content: string
  type: 'screenshot' | 'poem' | 'quote' | 'moment' | 'specialNote'
  image: string
}

export function MemoriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const memories: Memory[] = [
    // Screenshot memories
    { id: 1, title: "First Message", subtitle: "The Beginning", content: "Our first message was so boring, it's funny to joke about it now!", type: "screenshot", image: "images/II.png" },
    { id: 2, title: "Exam Support", subtitle: "Matric Days", content: "Motivating your lazy ass one day at a time during matric days!", type: "screenshot", image: "images/I.png" },

    // New memories as per user request (IDs 3-14)
    { id: 3, title: "Early Conversation Poem", subtitle: "A Book's Whisper", content: "In a quiet book, a verse I found,\nOf early chats, on sacred ground.\n a surprising coincidence", type: "poem", image: "images/poem.png" },
    { id: 4, title: "Embassy Rejection", subtitle: "Laughter Through Tears", content: "Remember that time the embassy rejected you?\nWe turned that frown upside down\nWith some epic comfort food\nAnd even more epic jokes!\nWho needs a visa when you've got us, right?", type: "moment", image: "images/IV.png" },
    { id: 5, title: "Prom Dress Hunt", subtitle: "The Fashion Quest", content: "Our marathon prom dress shopping spree!\nSo many sparkles, so many 'no's,\n you found the perfect one.\nYou looked absolutely stunning,\nEven if i almost collapsed from heart attack.", type: "moment", image: "images/V.png" },
    { id: 6, title: "Guy Friends Gossip", subtitle: "Secret Sessions", content: "Those late-night gossip sessions about your guy friends\nWere legendary. The decoding of texts,\nThe analysis of glances... ", type: "moment", image: "images/VI.png" },
    { id: 7, title: "Beautiful Baby You", subtitle: "A Glimpse of Innocence", content: "Even as a baby, your charm shone through,\nA beautiful soul, pure and new.\nTiny hands and tiny feet,\nFrom the start, you were oh so sweet.", type: "moment", image: "images/B3.jpg" },
    { id: 8, title: "Crazy Baby You", subtitle: "Little Prankster", content: "Before you could walk, you caused a stir,\nWith crazy antics, a playful blur.\nMaking faces, full of glee,\nThe funniest baby one could see!", type: "moment", image: "images/B4.jpg" },
    { id: 9, title: "Dancing Baby", subtitle: "Groovy Moves", content: "Even as a baby, you had rhythm and flair,\nDancing to music, without a care.\nShaking and swaying, a tiny dance king/queen,\nThe cutest moves I've ever seen!", type: "moment", image: "images/B5.jpg" },
    { id: 10, title: "Crying Baby", subtitle: "Tiny Tears, Big Feelings", content: "A little cry, a tiny pout,\nExpressing feelings, no doubt.\nBut even then, your tears were brief,\nSoon replaced by sweet relief.", type: "moment", image: "images/B1.jpg" },
    { id: 11, title: "Innocent Baby Look", subtitle: "Pure Wonder", content: "That innocent gaze, so soft and deep,\nSecrets the future would surely keep.\nA look of wonder, fresh and bright,\nFilling every moment with pure light.", type: "moment", image: "images/B7.jpg" },
    { id: 12, title: "Funny Baby", subtitle: "Laugh Out Loud", content: "Your funny faces, a joyful art,\nMaking everyone laugh right from the start.\nFrom silly expressions to playful winks,\nAlways bringing joy, more than one thinks.", type: "moment", image: "images/B6.jpg" },
    { id: 13, title: "Snapchat 101", subtitle: "First Filters", content: "Remember teaching me how to use Snapchat?\nAll those hilarious filters and confused expressions.\nIt was sweet, and honestly, a little chaotic!", type: "moment", image: "images/VII.png" },
    { id: 14, title: "Crazy Video Message", subtitle: "Unforgettable Send-off", content: "That crazy video message you sent!\nIt was so you—full of energy, laughter,\nAnd a touch of delightful madness.\nSweet and truly unforgettable.", type: "moment", image: "images/100.mp4" },

    // Remaining original memories, re-indexed from 15 onwards
    { id: 15, title: "Your Hair", subtitle: "Crown of Beauty", content: "Cascading waves of silk so fine,\nEach strand catches light divine,\nYour hair frames your face with grace,\nA crown that time cannot erase,\nIn wind it dances, free and wild,\nBeautiful, untamed, and styled.", type: "poem", image: "images/hair.png" },
    { id: 16, title: "Your Eyes", subtitle: "Windows to Wonder", content: "In your eyes I see the stars,\nGalaxies both near and far,\nThey sparkle when you laugh with glee,\nAn ocean of mystery,\nBrown depths that hold such light,\nMaking every day feel bright.", type: "poem", image: "images/eye.jpeg" },
    { id: 17, title: "Your Smile", subtitle: "Sunshine Personified", content: "Your smile could light the darkest night,\nA beacon pure and burning bright,\nIt starts with just a little curve,\nThen blooms with all the joy you serve,\nContagious, warm, and genuinely true,\nThe world needs more smiles like you.", type: "poem", image: "images/3.jpg" },
    { id: 18, title: "Your Cheeks", subtitle: "Rosy Happiness", content: "Your cheeks bloom pink when joy appears,\nOr when embarrassment draws near,\nSoft curves that frame your lovely smile,\nMaking every moment worthwhile,\nWhen laughter paints them rosy bright,\nThey're the sweetest, perfect sight.", type: "poem", image: "images/cheek.jpeg" },
    { id: 19, title: "Your Ears", subtitle: "Listeners of Love", content: "Those ears that hear beyond the words,\nCatching feelings like small birds,\nAdorned with earrings that softly sway,\nListening close to what I say,\nThey hear my heart when words fall short,\nYour understanding, my support.", type: "poem", image: "images/ear.jpeg" },
    { id: 20, title: "Your Nose", subtitle: "Perfect Profile", content: "Your nose, so perfectly designed,\nCrinkles when laughter's unconfined,\nIt fits your face with elegance true,\nCompleting the beauty that is you,\nWhen you scrunch it up so cute,\nMy heart performs a loop-de-loop.", type: "poem", image: "images/nose.jpeg" },
    { id: 21, title: "Your Lips", subtitle: "Words of Wonder", content: "Your lips speak kindness, truth, and care,\nShaping words beyond compare,\nThey whisper secrets, laugh out loud,\nMake every conversation proud,\nPink and perfect, soft and sweet,\nMaking every moment complete.", type: "poem", image: "images/lips.png" },
    { id: 22, title: "Your Neck", subtitle: "Graceful Elegance", content: "Your neck, a graceful tower stands,\nConnecting thoughts to helping hands,\nIt turns to show your interest true,\nIn every little thing I do,\nElegant in every way,\nBeautiful each and every day.", type: "poem", image: "images/neck.jpg" },
    { id: 23, title: "Your Shoulders", subtitle: "Strength & Grace", content: "Your shoulders carry so much weight,\nYet never bow to hands of fate,\nThey shimmy when you're feeling free,\nShrug with humor gracefully,\nStrong enough to bear life's load,\nGentle on this winding road.", type: "poem", image: "images/shoulder.png" },
    { id: 24, title: "Your Arms", subtitle: "Embrace of Comfort", content: "Your arms give hugs that heal the soul,\nMaking broken spirits whole,\nThey reach out when someone's in need,\nPlanting love like precious seed,\nWrapping warmth around the cold,\nYour embraces never get old.", type: "poem", image: "images/arm.mp4" },
    { id: 25, title: "Your Hands", subtitle: "Creative Magic", content: "Those hands that gesture when you speak,\nThat comfort when I'm feeling weak,\nThey create and write and hold so tight,\nThey wave hello and say goodnight,\nDelicate yet strong and sure,\nYour touch makes everything feel pure.", type: "poem", image: "images/finger.jpg" },
    { id: 26, title: "Your Fingers", subtitle: "Delicate Artists", content: "Ten fingers dancing through the air,\nExpressing thoughts with graceful flair,\nThey type out messages of love,\nFit like a perfectly made glove,\nEach one unique, yet working together,\nCreating magic light as feather.", type: "poem", image: "images/finger.mp4" },
    { id: 27, title: "Your Heart", subtitle: "Endless Love", content: "Your heart's too big for just one chest,\nIt gives and loves without a rest,\nCompassion flows from deep within,\nWhere kindness lives beneath your skin,\nYou feel so deeply, care so much,\nThe world is better for your touch.", type: "poem", image: "images/heart.png" },
    { id: 28, title: "Your Back", subtitle: "Pillar of Strength", content: "Your back stands straight with pride and grace,\nCarrying you through time and space,\nIt bends to help but never breaks,\nShows the strength that it takes,\nTo be someone others can lean on,\nFrom early dusk to early dawn.", type: "poem", image: "images/back.jpg" },
    { id: 29, title: "Your Waist", subtitle: "Perfect Curves", content: "Your waist creates the perfect line,\nWhere strength and beauty intertwine,\nIt sways when music fills the air,\nMoving without a single care,\nEmbracing all your body's story,\nCelebrating natural glory.", type: "poem", image: "images/hand.jpg" },
    { id: 30, title: "Your Hips", subtitle: "Rhythm of Life", content: "Your hips don't lie, they speak the truth,\nOf confidence and endless youth,\nThey sway to rhythms all their own,\nIn ways that make themselves known,\nCarrying you with style and grace,\nThrough every moment, every place.", type: "poem", image: "images/hips.mp4" },
    { id: 31, title: "Your Legs", subtitle: "Journey Makers", content: "Your legs have carried you so far,\nTo reach each dream, each distant star,\nThey dance, they run, they stand their ground,\nIn them, such strength is found,\nEvery step a choice you make,\nEvery path yours to take.", type: "poem", image: "images/leg.jpeg" }, 
    { id: 32, title: "Your Feet", subtitle: "Adventure Seekers", content: "Your feet have walked a thousand miles,\nThrough valleys deep and mountain trials,\nThey tap when happy, still when thinking,\nNever from adventure shrinking,\nPainted toes or bare and free,\nThey take you where you need to be.", type: "poem", image: "images/feet.jpeg" },
    { id: 33, title: "Your Skin", subtitle: "Beautiful Canvas", content: "Your skin tells stories of your days,\nIn freckles, marks, in countless ways,\nSoft to touch, warm to hold,\nMore precious than the finest gold,\nIt glows with health and inner light,\nRadiant morning, noon, and night.", type: "poem", image: "images/skin.mp4" },
    { id: 34, title: "Your Voice", subtitle: "Melody of Life and funniest voice ever 😂", content: "Your voice, a song I love to hear,\nWhether whispered soft or loud and clear,\nIt carries laughter, dreams, and thought,\nWith wisdom that can't be taught,\nEach word you speak, a note so sweet,\nMaking life's symphony complete.", type: "poem", image: "images/voice.mp4" },
    { id: 35, title: "Your Laugh", subtitle: "Pure Joy", content: "Your laughter fills the room with light,\nFrom giggles soft to loud delight,\nThe way you throw your head back free,\nIs how joy was meant to be,\nInfectious, pure, and unrestrained,\nIn your laugh, happiness contained.", type: "poem", image: "images/laugh.jpeg" },
    { id: 36, title: "Your Mind", subtitle: "Brilliant Universe", content: "Your mind's a universe of thought,\nWith wisdom that cannot be bought,\nQuick wit and intelligence combine,\nWith creativity divine,\nYou solve and dream and wonder why,\nYour brilliance reaching for the sky.", type: "poem", image: "images/1.jpg" },
    { id: 37, title: "TikTok Drafts - Part 1", subtitle: "The Unseen Comedy", content: "Remember those hilarious TikTok drafts you never posted? The world missed out on some pure comedic gold!", type: "moment", image: "images/freak.MP4" },
    { id: 38, title: "TikTok Drafts - Part 2", subtitle: "Behind the Scenes Laughter", content: "Another gem from the drafts! Your raw, unedited humor is always the best kind of laughter.", type: "moment", image: "images/draft.mp4" },
    { id: 39, title: "TikTok Drafts - Part 3", subtitle: "Masterpiece in the Making", content: "Before it hit the cutting room floor, this TikTok draft was a true work of art. So many laughs!", type: "moment", image: "images/draft1.mp4" },
    { id: 40, title: "Our Journey So Far", subtitle: "2 Years, 1 Month, 24 Days", content: "My dearest, the past 2 years, 1 month, and 24 days with you have painted the most beautiful canvas of my life. Every silly moment, every gentle fight, every shared tear, and every burst of laughter has woven itself into a tapestry of memories I wouldn't trade for the world. Thank you for making every single day a precious gift. My heart overflows with gratitude for our journey, and I cherish every step we've taken, together. Happy Birthday, my love.", type: "specialNote", image: "" }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length)
  }

  const currentMemory = memories[currentSlide]

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-purple-100 overflow-hidden">
      <div className="h-full flex flex-col p-4 pb-20">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Memory Lane
          </h2>
         
        </div>

        {/* Card Container */}
        <div className="flex-1 flex items-center justify-center px-4 pb-4 mt-6">
          <div className="w-full max-w-md md:max-w-4xl h-full relative">
            {/* Memory Card - Fixed Height Design has been updated to be dynamic */}
            <div className="bg-white rounded-2xl shadow-xl h-full overflow-hidden animate-fade-in relative">
              {currentMemory.type === 'specialNote' ? (
                // Special Note Card UI (Full Width, Centered Text, No Image, No Scrolling)
                <div className="h-full w-full flex flex-col items-center justify-center p-4 md:p-6 bg-gradient-to-br from-pink-100 to-purple-100">
                  {/* Only the main content for special note card - removed title/subtitle */}
                  <div className="max-w-sm md:max-w-lg mx-auto p-4 md:p-6 bg-white rounded-2xl shadow-md flex-grow flex items-center justify-center">
                    <p className="text-gray-800 whitespace-pre-line text-xs md:text-sm leading-relaxed font-semibold font-serif italic text-center animation-heartbeat">
                      {currentMemory.content}
                    </p>
                  </div>
                </div>
              ) : (
                // Standard Card UI (Two Columns: Image + Content)
                <div className="h-full flex flex-col md:flex-row">
                  {/* Mobile Title (above image/video, only on mobile) */}
                  <div className="md:hidden mb-2 text-center py-2">
                    <h3 className="text-xl font-bold text-gray-800">{currentMemory.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{currentMemory.subtitle}</p>
                  </div>
                  {/* Image Section - Fixed Dimensions */}
                  <div className="h-2/5 md:h-full md:w-1/2 relative overflow-hidden bg-gray-100 flex-shrink-0">
                    {(currentMemory.image.endsWith('.mp4') || currentMemory.image.endsWith('.MP4')) ? (
                      <video
                        src={currentMemory.image}
                        controls
                        playsInline
                        loop
                        autoPlay
                      
                        className="absolute inset-0 w-full h-full object-contain bg-black"
                      />
                    ) : (
                      <img 
                        src={currentMemory.image} 
                        alt={currentMemory.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
                    {/* Removed mobile overlay title/subtitle at bottom */}
                  </div>

                  {/* Content Section - Fixed Height has been updated to be dynamic */}
                  <div className="h-3/5 md:h-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center bg-gradient-to-b md:bg-gradient-to-br from-white to-gray-50 overflow-y-auto">
                    {/* Desktop Title (hidden on mobile) */}
                    <div className="hidden md:block mb-4 text-center">
                      <h3 className="text-xl font-bold text-gray-800">{currentMemory.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{currentMemory.subtitle}</p>
                    </div>
                    
                    <div className="text-center w-full">
                      {currentMemory.type === 'screenshot' && (
                        <div className="bg-gray-100 rounded-xl p-4 md:p-5 max-w-sm mx-auto">
                          <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                            {currentMemory.content}
                          </p>
                        </div>
                      )}
                      
                      {currentMemory.type === 'poem' && (
                        <div className="max-w-sm md:max-w-md mx-auto">
                          <FaQuoteLeft className="text-pink-300 text-lg md:text-xl mx-auto mb-2 md:mb-3" />
                          <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed font-serif italic">
                            {currentMemory.content}
                          </p>
                        </div>
                      )}
                      
                      {currentMemory.type === 'moment' && (
                        <div className="max-w-sm md:max-w-md mx-auto">
                          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 md:p-5">
                            <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                              {currentMemory.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full p-3 md:p-4 text-gray-400 hover:text-gray-600 shadow-lg transition-all hover:scale-110"
            >
              <FaChevronLeft className="md:text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full p-3 md:p-4 text-gray-400 hover:text-gray-600 shadow-lg transition-all hover:scale-110"
            >
              <FaChevronRight className="md:text-xl" />
            </button>
          </div>
        </div>

        {/* Slide Indicator */}
        <div className="text-center py-2">
          <p className="text-purple-600 text-sm font-medium mb-1">
            {currentSlide + 1} / {memories.length}
          </p>
          <div className="flex justify-center space-x-1">
            {[...Array(9)].map((_, i) => {
              const dotIndex = Math.floor(currentSlide / 5)
              return (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === dotIndex ? 'bg-purple-600 w-6' : 'bg-purple-200 w-1'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}