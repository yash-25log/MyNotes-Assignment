"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface Note {
  title: string;
  content: string;
  date: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteTitle, setNewNoteTitle] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<Note>(); // [1
  // Load notes from local storage on component mount
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const [login, setLogin] = useState(false);

  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  // const [newNote, setNewNote] = useState({
  //   title: "",
  //   content: "",
  //   user_id: localStorage.getItem("user_id"),
  // });
  const user_id = typeof window !== 'undefined' ? localStorage.getItem("user_id") : null;
  console.log(user_id);

const [newNote, setNewNote] = useState({
  title: "",
  content: "",
  user_id: user_id,
});


  const handleAddNote = async (e: any) => {
    if (user_id) {
      console.log(newNote)
      e.preventDefault();
      console.log(newNote);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      };
      const res = await fetch(
        "https://notesbackend-nje2.onrender.com/notes/addNote",
        requestOptions
      );
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        console.log(data.data);
        alert("Note added successfully");
        window.location.reload();
      } else {
        alert("Error in adding note");
      }
    } else {
      alert("Please login to add note");
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      "https://notesbackend-nje2.onrender.com/user/register",
      requestOptions
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data.data);
      localStorage.setItem("username", data.data.name);
      localStorage.setItem("user_id", data.data._id);
      alert("User registered successfully");
      window.location.reload();
    } else {
      alert("Error in registering user");
    }
  };
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(user);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const res = await fetch("https://notesbackend-nje2.onrender.com/user/login", requestOptions);
    if (res.ok) {
      const data = await res.json();
      console.log(data.data);
      localStorage.setItem("username", data.data.name);
      localStorage.setItem("user_id", data.data._id);
      alert("User logged in successfully");
      window.location.reload();
    } else {
      alert("Error in logging in user");
    }
  };

  // const id = localStorage.getItem("user_id");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };


  const [notesData, setNotesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://notesbackend-nje2.onrender.com/notes/getNote?user_id=${user_id}`
      );
      const data = await res.json();
      setNotesData(data.data);
    };
    fetchData();
  }, [user_id]);
  const [notesData1, setNotesData1] = useState([]);

  
  const handleGlobalSearch = async (e: any) => {
    try {
      const res = await fetch(`https://notesbackend-nje2.onrender.com/notes/search?q=${e.target.value}&userId=${user_id}`);
      const data = await res.json();
      console.log(data);
      setNotesData(data); // Check if this line throws any errors

    } catch (error) {
      console.error('Error setting notes data:', error);
    }
  };
  const handleButtonClick = () => {
    if (user_id) {
      // Call the logout function if the user is logged in
      handleLogout();
    } else {
      // Call the function to get started if the user is not logged in
      handleOpen();
    }
  };
  
  return (
    <>
      <div className="flex h-screen bg-[#333] text-white">
        <aside className="w-1/4 border-r border-gray-600 overflow-y-auto">
          <div className="flex flex-col">
            <div className="p-4 border-b border-gray-600">
              <div className="flex gap-2">
              <h1 className="text-xl font-bold text-yellow-400 ">WEBNOTES </h1>
              <input type="text" placeholder="Search Notes" className="bg-transparent text-white placeholder-gray-400 border mr-4" onChange={(e) => handleGlobalSearch(e)}/>
               
              </div>
              <button onClick={handleButtonClick}>
                {user_id ? "LogOut" : "Get Started"}
              </button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                {/* <Form/> */}
                <Box sx={style}>
                  <Typography id="m`odal-modal-description" sx={{ mt: 2 }}>
                    {!login ? (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          style={{ margin: "10px" }}
                          variant="outlined"
                          value={data.name}
                          onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          style={{ margin: "10px" }}
                          value={data.email}
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          style={{ margin: "10px" }}
                          value={data.password}
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                        <Button
                          variant="contained"
                          onClick={(e) => handleRegister(e)}
                        >
                          Register
                        </Button>
                        <p
                          onClick={() => setLogin(!login)}
                          style={{ color: "black", cursor: "pointer" }}
                        >
                          Already registered, login here
                        </p>
                      </div>
                    ) : (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          style={{ margin: "10px" }}
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          style={{ margin: "10px" }}
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                        />
                        <br />
                        <Button variant="contained" onClick={handleLogin}>
                          Login
                        </Button>
                        <p
                          onClick={() => setLogin(!login)}
                          style={{ color: "black", cursor: "pointer" }}
                        >
                          New to this, register here
                        </p>
                      </div>
                    )}
                  </Typography>
                </Box>
              </Modal>
            </div>

            
            <ul className="flex flex-col space-y-2 p-4">
              {notesData && notesData.map((note : any, index : number) => (
                <li
                  key={index}
                  className="flex flex-col cursor-pointer"
                  onClick={() => { setSelectedNote(note); handleModalOpen(); }}
                >
                  <div className="flex justify-between">
                    <span className="font-semibold truncate">{note.title}</span>
                    <span className="cursor-pointer text-red-500 mt-2">
                      {/* <TrashIcon
                        className="h-4 w-4 ml-auto "
                        // onClick={() => deleteNote(index)}
                      /> */}
                    </span>
                  </div>


                  {/* <span className="text-xs text-gray-400 mb-1">
                    {note.date}
                  </span> */}
                  <span className="text-sm text-gray-500">
                    {note.content.substring(0, 10) + "..."}
                  </span>
                  <hr />
                </li>
              ))}
              <Modal 
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  open={modalOpen} 
  onClose={handleModalClose}
>
  <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
    <div className="bg-white rounded-lg p-8 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-500">{selectedNote?.title}</h2>
        <button className="text-gray-500 hover:text-gray-800" onClick={handleModalClose}>Close</button>
      </div>
      <p className="text-gray-700">{selectedNote?.content}</p>
      {/* Additional note details */}
    </div>
  </div>
</Modal>

            </ul>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <div className="flex p-4 border-b border-gray-600">
            <input
              type="text"
              value={newNote.title}
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
              placeholder="Enter title..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 mr-2"
            />
            <button
              onClick={handleAddNote}
              className="h-8 px-4 bg-yellow-400 text-black font-semibold rounded"
            >
              Add Note 
            </button>
          </div>

          
          <div className="flex-1 p-4">
            <input
              className="bg-transparent p-4 text-white placeholder-gray-400"
              placeholder="Start typing your note here..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            
            />
          </div>
        </div>
      </div>  
    </>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}
