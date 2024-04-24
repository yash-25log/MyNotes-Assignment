"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNoteTitle, setNewNoteTitle] = useState("");

  // Load notes from local storage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      title: newNoteTitle || "New Note", // Use provided title or set a default
      content: "", // Initialize content as empty
      date: new Date().toLocaleDateString() // Set the current date
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote); // Automatically open the newly added note
    setNewNoteTitle(""); // Clear input field after adding note
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setSelectedNote(null); // Reset selected note when deleted
  };

  return (
    <>
      <div className="flex h-screen bg-[#333] text-white">
        <aside className="w-1/4 border-r border-gray-600 overflow-y-auto">
          <div className="flex flex-col">
            <div className="p-4 border-b border-gray-600">
              <h1 className="text-xl font-bold text-yellow-400">WEBNOTES</h1>
            </div>
            <ul className="flex flex-col space-y-2 p-4">
              {notes.map((note, index) => (
                <li key={index} className="flex flex-col cursor-pointer" onClick={() => setSelectedNote(note)}>
                  <div className='flex justify-between'><span className="font-semibold truncate">{note.title}</span>
                  <span className="cursor-pointer text-red-500 mt-2" >
                    <TrashIcon className="h-4 w-4 ml-auto " onClick={() => deleteNote(index)}/>
                  </span></div>
                  
                  <span className="text-xs text-gray-400 mb-1">{note.date}</span>
                  <span className="text-sm text-gray-500">
                  {note.content.substring(0, 10)+ "..."}
                  </span>
                  <hr />
                </li>
                
              ))}
            </ul>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <div className="flex p-4 border-b border-gray-600">
            <input
              type="text"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              placeholder="Enter title..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 mr-2"
            />
            <button onClick={addNote} className="h-8 px-4 bg-yellow-400 text-black font-semibold rounded">Add Note</button>
          </div>
          <div className="flex-1 p-4">
            {selectedNote ? (
              <div>
                <h2 className="text-xl font-bold">{selectedNote.title}</h2>
                <p className="text-sm text-gray-400 mb-4">{selectedNote.date}</p>
                <Textarea
                  className="bg-transparent p-4 text-white placeholder-gray-400"
                  placeholder="Start typing your note here..."
                  value={selectedNote.content}
                  onChange={(e) => {
                    const updatedNote = { ...selectedNote, content: e.target.value };
                    setNotes(notes.map((note, index) => (index === notes.indexOf(selectedNote) ? updatedNote : note)));
                    setSelectedNote(updatedNote);
                  }}
                />
              </div>
            ) : (
              <div className="text-center text-gray-400">Start creating a note ✨</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}