'use client'

import React from 'react';

interface SavedHighlightProps {
  handleDelete: Function;
  handleEdit: Function
  editIndex: number | undefined;
  ranges: [number, number][];
  transcriptTextArray: string[];
}

const SavedHighlights: React.FC<SavedHighlightProps> = ({ ranges, transcriptTextArray, handleDelete, handleEdit, editIndex }) => {

    return (
        <>
            <h2 className="font-bold flex justify-center">Saved Highlights</h2>
            <div>
              {ranges.map((range, index) => {
                if(index === editIndex) {
                  return (
                    <div className='py-1' key={index}> .. currently editing .. 
                      <div>
                        <button className='hover:shadow-lg border-solid border-2 border-black px-3 mx-1' onClick={() => {handleDelete(index)}}>delete</button>
                        <button className='hover:shadow-lg border-solid border-2 border-sky-500 px-3 mx-1' onClick={() => {handleEdit(index)}}>edit</button>
                      </div>
                    </div>
                  )
                } else {
                  return (
                  <div className='py-1' key={index}> &quot;{transcriptTextArray.slice(range[0],range[1] + 1)}&quot;
                    <div>
                      <button className='hover:shadow-lg border-solid border-2 border-black px-3 mx-1' onClick={() => {handleDelete(index)}}>delete</button>
                      <button className='hover:shadow-lg border-solid border-2 border-sky-500 px-3 mx-1' onClick={() => {handleEdit(index)}}>edit</button>
                    </div>
                  </div>
                  )
                }
                })}
            </div>
        </>
    );
}

export default SavedHighlights;

