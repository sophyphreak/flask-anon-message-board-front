import React, { useState } from "react"

const DeleteThread = () => {
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
        />
        <br />
        <input
          type="text"
          placeholder="id to delete"
          name="thread_id"
          required=""
        />
        <br />
        <input
          type="text"
          placeholder="password"
          name="delete_password"
          required=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default DeleteThread
