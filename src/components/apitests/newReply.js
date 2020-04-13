import React, { useState } from "react"

const NewReply = () => {
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
        />
        <br />
        <input
          type="text"
          placeholder="thread id"
          name="thread_id"
          required=""
        />
        <br />
        <textarea
          type="text"
          placeholder="Thread text..."
          name="text"
          required=""
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="password to delete"
          name="delete_password"
          required=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default NewReply
