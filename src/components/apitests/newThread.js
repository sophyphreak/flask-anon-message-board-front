import React, { useState } from "react"

const NewThread = () => {
  return (
    <>
      <h4>New thread (POST /api/threads/:board)</h4>
      <form action="/api/threads/test" method="post" id="newThread">
        <input
          type="text"
          placeholder="board"
          id="board1"
          name="board"
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

export default NewThread
