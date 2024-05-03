"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import GoogleAuth from "@/components/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
  const [selectedNote, setSelectedNote] = useState<Note | null>(null); // [1
  // Load notes from local storage on component mount
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [login, setLogin] = useState(false);

  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    id: localStorage.getItem("user_id"),
  });

  const handleAddNote = async (e: any) => {
    if (id) {
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
        "http://localhost:8000/notes/addNote",
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
      "http://localhost:8000/user/register",
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

    const res = await fetch("http://localhost:8000/user/login", requestOptions);
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

  const id = localStorage.getItem("user_id");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [notesData, setNotesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:8000/notes/getNote?user_id=${id}`
      );
      const data = await res.json();
      setNotesData(data.data);
    };
    fetchData();
  }, [id]);
  const [notesData1, setNotesData1] = useState([]);

  return (
    <>
      <div className="flex h-screen bg-[#333] text-white">
        <aside className="w-1/4 border-r border-gray-600 overflow-y-auto">
          <div className="flex flex-col">
            <div className="p-4 border-b border-gray-600">
              <h1 className="text-xl font-bold text-yellow-400">WEBNOTES </h1>
              {id ? (
                <button onClick={handleLogout}>LogOut</button>
              ) : (
                <button onClick={handleOpen}>Get Started</button>
              )}
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
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="flex flex-col cursor-pointer"
                  onClick={() => setSelectedNote(note)}
                >
                  <div className="flex justify-between">
                    <span className="font-semibold truncate">{note.title}</span>
                    <span className="cursor-pointer text-red-500 mt-2">
                      <TrashIcon
                        className="h-4 w-4 ml-auto "
                        // onClick={() => deleteNote(index)}
                      />
                    </span>
                  </div>

                  <span className="text-xs text-gray-400 mb-1">
                    {note.date}
                  </span>
                  <span className="text-sm text-gray-500">
                    {note.content.substring(0, 10) + "..."}
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
            <Textarea
              className="bg-transparent p-4 text-white placeholder-gray-400"
              placeholder="Start typing your note here..."
              value={newNote.content}
              onChange={(e) => ({ ...newNote, content: e.target.value })}
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
