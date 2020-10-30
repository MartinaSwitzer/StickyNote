import React,{useState} from 'react';
import './App.css';
import CreateNote from './components/CreateNote/CreateNote';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Note from './components/Note/Note';

function App() {
  const [notes,setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes,newNote]
    })
  }
    const deleteNote =(id)=>{
      setNotes((prevNotes)=>{
        return prevNotes.filter((noteItem,index)=>{
          return index !== id
        })
      })

    }
  return (
    <div className="App">
      <Header/>
      <CreateNote addNote={addNote}/>
      {notes.map((note,index)=>{
        return(
        <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
        )
      
      })}
      <Footer/>
    </div>
  );
}
export default App;
