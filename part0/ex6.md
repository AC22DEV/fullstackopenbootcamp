```markdown
# 0.6: New note in Single Page App (SPA version)

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User clicks "Save" button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (note content as JSON)
    activate server
    server-->>browser: 201 Created (New note saved successfully)
    deactivate server

    Note right of browser: Browser updates the page without reloading

    browser->>browser: JavaScript updates the note list dynamically with the new note
    Note right of browser: New note appears instantly in the note list
