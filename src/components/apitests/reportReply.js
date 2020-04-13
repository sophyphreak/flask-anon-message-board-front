import React, { useState } from "react"

const ReportReply = () => {
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
        />
        <br />
        <input
          type="text"
          placeholder="thread id"
          name="thread_id"
          required=""
        />
        <br />
        <input
          type="text"
          placeholder="id to report"
          name="reply_id"
          required=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default ReportReply
