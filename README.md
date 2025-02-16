# Node.js Server Error Handling for Aborted Requests

This repository demonstrates a common error in Node.js server applications where improper error handling can lead to unhandled exceptions when a client aborts a long-running request before the server sends a response.  The bug.js file showcases this issue, and the bugSolution.js file offers a robust solution.

## Bug Description

When a client aborts a request (e.g., by closing the browser tab or navigating away), the server might still be processing it. If the server attempts to write to a closed socket, it can result in an unhandled 'error' event, leading to application instability or crashes.

## How to Reproduce

1.  Clone this repository.
2.  Run `node bug.js`.
3.  Use a tool like curl or a browser to make a request to `http://localhost:3000`. 
4.  Abort the request before the server responds (after about 5 seconds). You might observe an unhandled exception. 

## Solution

The bugSolution.js file demonstrates a robust solution that prevents unhandled exceptions by properly handling the 'close' event on the response object and using a more graceful mechanism to stop operation when the client aborts the request.