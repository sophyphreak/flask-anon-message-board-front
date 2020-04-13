import React, { useState } from "react"
import axios from "axios"

const NewReply = () => {
  const [board, setBoard] = useState("")
  const [threadId, setThreadId] = useState("")
  const [text, setText] = useState("")
  const [deletePassword, setDeletePassword] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.post(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/${board}`,
        {
          thread_id: threadId,
          text,
          delete_password: deletePassword,
        }
      )
    } catch (e) {
      console.log(e)
    }
    setDisplayedResponse(JSON.stringify(response.data))
    setBoard("")
    setThreadId("")
    setText("")
    setDeletePassword("")
  }
  return (
    <>
      <h4>New reply (POST /api/replies/:board)</h4>
      <form action="/api/threads/test" method="post" id="newReply">
        <input
          type="text"
          placeholder="board"
          id="board4"
          name="board"
          required=""
          value={board}
          onChange={({ target: { value } }) => setBoard(value)}
        />
        <br />
        <input
          type="text"
          placeholder="thread id"
          name="thread_id"
          required=""
          value={threadId}
          onChange={({ target: { value } }) => setThreadId(value)}
        />
        <br />
        <textarea
          type="text"
          placeholder="Reply text..."
          name="text"
          required=""
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="password to delete"
          name="delete_password"
          required=""
          value={deletePassword}
          onChange={({ target: { value } }) => setDeletePassword(value)}
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      <p>
        <code>{displayedResponse}</code>
      </p>
    </>
  )
}

export default NewReply
