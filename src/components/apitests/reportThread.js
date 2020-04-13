import React, { useState } from "react"
import axios from "axios"

const ReportThread = () => {
  const [board, setBoard] = useState("")
  const [threadId, setThreadId] = useState("")
  const [displayedResponse, setDisplayedResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.put(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/threads/${board}`,
        {
          thread_id: threadId,
        }
      )
    } catch (e) {
      console.log(e)
    }
    setDisplayedResponse(JSON.stringify(response.data))
    setBoard("")
    setThreadId("")
  }
  return (
    <>
      <h4>Report thread (PUT /api/threads/:board)</h4>
      <form id="reportThread">
        <input
          type="text"
          placeholder="board"
          id="board2"
          name="board"
          required=""
          value={board}
          onChange={({ target: { value } }) => setBoard(value)}
        />
        <br />
        <input
          type="text"
          placeholder="id to report"
          name="thread_id"
          required=""
          value={threadId}
          onChange={({ target: { value } }) => setThreadId(value)}
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
        <p>
          <code>{displayedResponse}</code>
        </p>
      </form>
    </>
  )
}

export default ReportThread
