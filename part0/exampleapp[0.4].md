```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server


user->>browser: write a note to input field

user->>browser: click the "save" button

Note right of browser: browser capture the input and make a request

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server

Note right of browser: The server process the request and store the note

server-->>browser: HTTP 302 Redirect to /notes
deactivate Server
```
