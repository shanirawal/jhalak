import React, { useEffect, useState } from 'react'
import { CULTURE_PROFILES } from '../../constant/characters'
import Character from './Character'
import FactsSection from './FactsSection'
import TraitsSection from './TraitsSection'
import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Personality = () => {
  const navigate = useNavigate()
  const [randomResult, setRandomResult] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Pick a random index
    const randomIndex = Math.floor(Math.random() * CULTURE_PROFILES.length);
    const selected = CULTURE_PROFILES[randomIndex];

    const formattedData = {
      cultural_match: selected.cultural_match, // use the string, not the index
      confidence: Math.random().toFixed(2), // Optional confidence placeholder
      key_traits: selected.core_traits,
      reasoning: "",
      advice: selected.advice,
      facts: selected.facts,
      core_traits: selected.core_traits,
      visual_theme: selected.visual_theme,
    }

    setRandomResult(formattedData)
  }, [])

  if (!randomResult) return <div className='p-4 text-center'>Loading...</div>

  return (
    <div className='w-[100%]'>
      <Character result={randomResult} />
      <FactsSection result={randomResult} />
      <TraitsSection result={randomResult} />

      <div className='flex justify-center mb-[4rem]'>
        <button
          className='flex gap-2 cursor-pointer bg-[#f5f5dc] text-black font-semibold raleway pl-3 py-3 pr-5 rounded-2xl hover:bg-amber-200 hover:scale-110 transition-all duration-500'
          onClick={() => navigate('/')}
        >
          Back To Home
          <ArrowBigLeft />
        </button>
      </div>
    </div>
  )
}

export default Personality
