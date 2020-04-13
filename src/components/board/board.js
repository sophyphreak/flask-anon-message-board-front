import React, { useState, useEffect } from "react"
import axios from "axios"

import PartialThread from "./partialThread"

const Board = () => {
  const [text, setText] = useState("")
  const [deletePassword, setDeletePassword] = useState("")
  const [threadList, setThreadList] = useState([])

  useEffect(() => {
    ;(async function fetchData() {
      try {
        const response = await axios.get(
          "https://flask-anon-message-board.andrew-horn-portfolio.life/api/threads/general"
        )
        setThreadList(response.data)
      } catch (e) {
        console.log(e)
      }
    })()
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      await axios.post(
        `https://flask-anon-message-board.andrew-horn-portfolio.life/api/threads/general`,
        {
          text,
          delete_password: deletePassword,
        }
      )
    } catch (e) {
      console.log(e)
    }
    setText("")
    setDeletePassword("")
  }

  return (
    <div>
      <header>
        <h1 id="boardTitle"></h1>
      </header>

      <div id="submitNewThread">
        <h3>Submit a new thread:</h3>
        <form id="newThread" method="post" action="/api/">
          <textarea
            rows="8"
            cols="120"
            type="text"
            placeholder="Thread text..."
            name="text"
            required=""
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          ></textarea>
          <br />
          <input
            type="text"
            placeholder="password to delete"
            name="delete_password"
            required=""
            value={deletePassword}
            onChange={({ target: { value } }) => setDeletePassword(value)}
          />
          <br />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </div>

      <div id="boardDisplay">
        {threadList.map((threadData, index) => (
          <PartialThread key={index} threadData={threadData} />
        ))}
      </div>

      <hr style={{ margin: "50px", marginTop: "200px" }} />

      {/* <script
      src="https://code.jquery.com/jquery-2.2.1.min.js"
      integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
      crossorigin="anonymous"
    ></script>
    <script>
      $(function() {
        var currentBoard = window.location.pathname.slice(3, -1);
        var url = '/api/threads/' + currentBoard;
        $('#boardTitle').text('Welcome to ' + window.location.pathname);
        $.ajax({
        type: 'GET',
          url: url,
          success: function(data) {
            var boardThreads = [];
            //
            // THIS ARRAY SET UP IS FOR CODE READABILITIES AND TESTING!
            // THIS IS NOT WHAT IT WOULD LOOK LIKE TO GO LIVE
            //
            data.forEach(function(ele) {
        console.log(ele); //can I use typeScript please?!
              var thread = ['<div class="thread">'];
              thread.push('<div class="main">');
        thread.push(
                '<p class="id">id: ' + ele._id + ' (' + ele.created_on + ')</p>'
              );
              thread.push(
                '<form id="reportThread"><input type="hidden" name="report_id" value="' +
                  ele._id +
                  '"><input type="submit" value="Report"></form>'
              );
              thread.push(
                '<form id="deleteThread"><input type="hidden" value="' +
                  ele._id +
                  '" name="thread_id" required=""><input type="text" placeholder="password" name="delete_password" required=""><input type="submit" value="Delete"></form>'
              );
              thread.push('<h3>' + ele.text + '</h3>');
              thread.push('</div><div class="replies">');
              var hiddenCount = ele.replycount - 3;
              if (hiddenCount < 1) {
                  hiddenCount = 0;
              }
              thread.push(
                '<h5>' +
                ele.replycount +
                ' replies total (' +
                hiddenCount +
                  ' hidden)- <a href="' +
                  window.location.pathname +
                  ele._id +
                  '">See the full thread here</a>.</h5>'
              );
              ele.replies.forEach(function(rep) {
                  thread.push('<div class="reply">');
                thread.push(
                  '<p class="id">id: ' +
                rep._id +
                ' (' +
                rep.created_on +
                    ')</p>'
                );
                thread.push(
                  '<form id="reportReply"><input type="hidden" name="thread_id" value="' +
                    ele._id +
                    '"><input type="hidden" name="reply_id" value="' +
                    rep._id +
                    '"><input type="submit" value="Report"></form>'
                );
                thread.push(
                  '<form id="deleteReply"><input type="hidden" value="' +
                    ele._id +
                    '" name="thread_id" required=""><input type="hidden" value="' +
                    rep._id +
                    '" name="reply_id" required=""><input type="text" placeholder="password" name="delete_password" required=""><input type="submit" value="Delete"></form>'
                );
                thread.push('<p>' + rep.text + '</p>');
                thread.push('</div>');
              });
              thread.push('<div class="newReply">');
                        thread.push(
                '<form action="/api/replies/' +
                  currentBoard +
                  '/" method="post" id="newReply">'
                            );
                            thread.push(
                '<input type="hidden" name="thread_id" value="' + ele._id + '">'
                            );
                            thread.push(
                '<textarea rows="5" cols="80" type="text" placeholder="Quick reply..." name="text" required=""></textarea><br>'
                              );
                              thread.push(
                '<input type="text" placeholder="password to delete" name="delete_password" required=""><input style="margin-left: 5px" type="submit" value="Submit">'
                                );
              thread.push('</form></div></div></div>');
              boardThreads.push(thread.join(''));
            });
            $('#boardDisplay').html(boardThreads.join(''));
          }
        });

        $('#newThread').submit(function() {
                              $(this).attr('action', '/api/threads/' + currentBoard);
        });

        $('#boardDisplay').on('submit', '#reportThread', function(e) {
          var url = '/api/threads/' + currentBoard;
          $.ajax({
                              type: 'PUT',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
                              alert(data);
            }
          });
          e.preventDefault();
        });
        $('#boardDisplay').on('submit', '#reportReply', function(e) {
          var url = '/api/replies/' + currentBoard;
          $.ajax({
                              type: 'PUT',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
                              alert(data);
            }
          });
          e.preventDefault();
        });
        $('#boardDisplay').on('submit', '#deleteThread', function(e) {
          var url = '/api/threads/' + currentBoard;
          $.ajax({
                              type: 'DELETE',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
                              alert(data);
            }
          });
          e.preventDefault();
        });
        $('#boardDisplay').on('submit', '#deleteReply', function(e) {
          var url = '/api/replies/' + currentBoard;
          $.ajax({
                              type: 'DELETE',
            url: url,
            data: $(this).serialize(),
            success: function(data) {
                              alert(data);
            }
          });
          e.preventDefault();
        });
      });
    </script> */}
    </div>
  )
}

export default Board
