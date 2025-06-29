import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import harapan from '../assets/card-photos/harapan-2.png'

const HeroSection = ({ result }) => {
    // Ensure this component starts at top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useGSAP(() => {
        // Double-check scroll position before animations
        window.scrollTo(0, 0)
        
        const titleSplit = new SplitText('.cultural-match', {type: 'chars,words'})
        const resultSplit = new SplitText('.cultural-match-result', {type: 'chars,words'})

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(resultSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.from('.avatar', {
            opacity: 0,
            xPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.from('.key-traits', {
            opacity: 0,
            xPercent: -100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 2
        })
    })

    return (
        <div className='relative overflow-hidden h-[100vh]'>
            <div className={`w-[100vw] h-[100vh] z-0 absolute top-0 rounded-lg
                ${result.cultural_match === 'Harappan' ? "bg-[url('/harapan-bg..jpg')]" : ''}
            `}>
            </div>

            <div className='relative'>
                <div className='w-full'>
                    <div className='w-[80%] flex ml-[4rem] mt-[2rem] flex-col'>
                        <h1 className='cultural-match raleway text-[2.5rem]'>Cultural Match:<br/></h1>
                        <p className='bungee-regular cultural-match-result text-[5rem]'>{result.cultural_match}</p>
                    </div>
                </div>

                <div className='avatar absolute top-[25rem] left-[50rem] scale-200'>
                    <img src={harapan} alt="" className={`h-[35rem]`} />
                </div>

                <div className="key-traits mt-[15rem] ml-[4rem] bg-amber-100/40 w-[34%] text-neutral-800 px-[1rem] py-[3rem] items-start flex flex-col rounded-3xl hover:bg-amber-100/80 transition-colors duration-300 cursor-pointer">
                    <h2 className="bungee-regular text-[2rem] mb-2">Key Traits:</h2>
                    <ul className="justify-evenly space-y-1 flex space-x-[2.5rem]">
                        {result.key_traits.map((trait, index) => (
                            <li key={index} className="text-lg text-amber-100 bg-neutral-800 rounded-2xl px-[1rem] py-2 raleway">{trait}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeroSection