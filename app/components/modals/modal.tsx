import React, {useState, useEffect} from "react";
import './modal.css'

interface ModelProps {
  toggleState: boolean;
  toggleModal: Function;
  selectedIndex: number | undefined;
}

const Modal: React.FC<ModelProps> = ( {toggleState, toggleModal, selectedIndex} ) => {

  interface Notes {
    [key: number]: string[]; 
  }

  const [notes, setNotes] = useState<Notes>({})
  const [noteContent, setNoteContent] = useState<string>('')

  useEffect(() => {
    setNoteContent('')
  },[notes])

  const saveNote = () => {
    if(selectedIndex !== undefined) {
      setNotes({...notes, [selectedIndex]: [...(notes[selectedIndex] || []), noteContent]})
    }
  }

  const handleDelete = (index: number) => {
    const response = window.confirm('are you sure you want to delete this note?')

    if(response && selectedIndex !== undefined) {
      const notesCopy = {...notes}
      notesCopy[selectedIndex].splice(index, 1)
      setNotes(notesCopy)
    }

  }

  const handleEdit = (index: number) => {
    console.log(`index in edit: ${index}`)
  }

  return (
    <>
      {toggleState ? (
        <div className="modal-container h-[300px] flex flex-col space-y-2">
          <div className="flex justify-center text-lg text-gray-200 font-bold">
            Add a note
          </div>
          <div className="flex-grow overflow-y-auto">
            {selectedIndex !== undefined && notes[selectedIndex] !== undefined ? (
              <div>
                {notes[selectedIndex].map((element, index) => (
                  <div className='text-gray-100 flex items-center' key={index}>
                    <div className='flex-grow'>→ {element}</div>
                    <div className='flex'>
                      <button className='hover:shadow-lg px-3 mx-1 text-black' onClick={() => {handleDelete(index)}}>delete</button>
                      <button className='hover:shadow-lg px-3 mx-1 text-sky-500' onClick={() => {handleEdit(index)}}>edit</button>
                    </div>
                  </div>
                ))}
              </div>
    ) : null}
        <textarea 
          className="peer block min-h-[100px] w-full resize-none rounded border-0 bg-black bg-opacity-25 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          value={noteContent}
          onChange={(e) => {setNoteContent(e.target.value)}}
        />
          </div>
        <div className="flex justify-center">
          <button className='hover:shadow-xl border-solid border-2 bg-black px-3 mb-2 mx-1 bg-opacity-50 text-gray-100' onClick={() => {toggleModal()}}>
            close
          </button>
          <button className='hover:shadow-xl border-solid border-2 bg-sky-500 px-3 mb-2 mx-1 bg-opacity-50 text-gray-100' onClick={() => {saveNote()}}>
            save note
          </button>
        </div>
      </div>
      ) : 
        null}
    </>
  )
}

export default Modal;