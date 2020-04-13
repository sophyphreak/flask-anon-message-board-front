import React, { useState } from "react"
import axios from "axios"

const ReportReply = () => {
  const [board, setBoard] = useState("")
  const [threadId, setThreadId] = useState("")
  const [replyId, setReplyId] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.put(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/replies/${board}`,
        {
          thread_id: threadId,
          reply_id: replyId,
        }
      )
    } catch (e) {
      console.log(e)
    }
    setDisplayedResponse(JSON.stringify(response.data))
    setBoard("")
    setThreadId("")
    setReplyId("")
  }

  return (
    <>
      <h4>Report reply (PUT /api/replies/:board)</h4>
      <form id="reportReply">
        <input
          type="text"
          placeholder="board"
          id="board5"
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
          placeholder="id to report"
          name="reply_id"
          required=""
          value={replyId}
          onChange={({ target: { value } }) => setReplyId(value)}
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

export default ReportReply
