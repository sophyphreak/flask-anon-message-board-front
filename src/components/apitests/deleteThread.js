import React, { useState } from "react"
import axios from "axios"

const DeleteThread = () => {
  const [board, setBoard] = useState("")
  const [threadId, setThreadId] = useState("")
  const [deletePassword, setDeletePassword] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.delete(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/threads/${board}?thread_id=${threadId}&delete_password=${deletePassword}`
      )
    } catch (e) {
      console.log(e)
    }
    setDisplayedResponse(JSON.stringify(response.data))
    setBoard("")
    setThreadId("")
    setDeletePassword("")
  }
  return (
    <>
      <h4>Delete thread (DELETE /api/threads/:board)</h4>
      <form id="deleteThread">
        <input
          type="text"
          placeholder="board"
          id="board3"
          name="board"
          required=""
          value={board}
          onChange={({ target: { value } }) => setBoard(value)}
        />
        <br />
        <input
          type="text"
          placeholder="id to delete"
          name="thread_id"
          required=""
          value={threadId}
          onChange={({ target: { value } }) => setThreadId(value)}
        />
        <br />
        <input
          type="text"
          placeholder="password"
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

export default DeleteThread
