import React, { useState } from "react"

const Apitests = () => {
  return (
    <div id="testui" style={{ marginLeft: "5%" }}>
      <h2 style={{ textAlign: "left" }}>API Tests:</h2>
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
      <hr />
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
      <hr />
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
      <hr />

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
      <hr />
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
      <hr />
      <h4>Delete reply (DELETE /api/replies/:board)</h4>
      <form id="deleteReply">
        <input
          type="text"
          placeholder="board"
          id="board6"
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
          placeholder="id to delete"
          name="reply_id"
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
    </div>
  )
}

export default Apitests
