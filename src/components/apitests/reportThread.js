import React, { useState } from "react"

const ReportThread = () => {
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
        />
        <br />
        <input
          type="text"
          placeholder="id to report"
          name="thread_id"
          required=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default ReportThread
