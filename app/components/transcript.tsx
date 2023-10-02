'use client'

import React, { useState, useEffect } from 'react';
import './transcript.css';
import Modal from './modals/modal';

interface TranscriptProps {
    ranges: [number, number][];
    extendedRanges: number[];
    handleSave: Function;
    transcriptTextArray: string[]
}

const Transcript: React.FC<TranscriptProps> = ({ handleSave, transcriptTextArray, extendedRanges, ranges }) => {

  const [highlight, setHighlight] = useState<[number, number]>([-1,0])
  const [showModal, setShowModal] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>()

  useEffect (() => {
  
    if(highlight[1] !== 0) {
      const response = window.confirm('do you want to save this highlight?')
  
      if(response) {
        handleSave(highlight[0], highlight[1])
      }
      setHighlight([-1,0])
    }
  },[highlight])

  const handleHighlightChange = (index: number) => {
      if(highlight[0] < 0) {
        setHighlight([index,0])
      } else if(highlight[1] === 0) {
        setHighlight([highlight[0],index])
      } 
  }

  const toggleModal = (clickedIndex: number) => {
    showModal ? setShowModal(false) : setShowModal(true)
    ranges.forEach((range, index) => {
      if(clickedIndex >= range[0] && clickedIndex <= range[1]) {
        setSelectedIndex(index)
     }
    })
  }
  
    return (
        <>
          <h2 className='font-bold flex justify-center'>Transcript</h2>
            {transcriptTextArray.length > 0 ?
            <div className="border-dotted border-r-2 border-black">
              <Modal 
                toggleState={showModal}
                toggleModal={toggleModal} 
                selectedIndex={selectedIndex} 
              />
              {transcriptTextArray.map((character, index) => {
               return extendedRanges.includes(index) ? (
                  <span className="highlight" onClick={() => toggleModal(index)} key={index}>{character}</span>
                ) : (
                  <span className="hover:bg-green-600 hover:text-yellow-200 cursor-pointer" onClick={() => handleHighlightChange(index)} key={index}>{character}</span>
                )
              })}
            </div>
            :
            <div>
              .. loading ..
            </div>
          }
        </>
    );
}

export default Transcript;