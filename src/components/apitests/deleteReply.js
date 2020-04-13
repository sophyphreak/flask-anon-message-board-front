import React, { useState } from "react"
import axios from "axios"

const DeleteReply = () => {
  const [board, setBoard] = useState("")
  const [threadId, setThreadId] = useState("")
  const [replyId, setReplyId] = useState("")
  const [deletePassword, setDeletePassword] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.delete(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/${board}?thread_id=${threadId}&reply_id=${replyId}&delete_password=${deletePassword}`
      )
    } catch (e) {
      console.log(e)
    }
    setDisplayedResponse(JSON.stringify(response.data))
    setBoard("")
    setThreadId("")
    setReplyId("")
    setDeletePassword("")
  }
  return (
    <>
      <h4>Delete reply (DELETE /api/replies/:board)</h4>
      <form id="deleteReply">
        <input
          type="text"
          placeholder="board"
          id="board6"
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
        <input
          type="text"
          placeholder="id to delete"
          name="reply_id"
          required=""
          value={replyId}
          onChange={({ target: { value } }) => setReplyId(value)}
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

export default DeleteReply
