import React, { useState } from 'react'
import {Button, OmitStyles, ThemeProvider} from "omit-ui";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
    return (
      <ThemeProvider mode={mode}>
          <OmitStyles />
          <div>
              <button onClick={() => setMode('dark')}>切换</button>
              <Button>1e32</Button>
          </div>
      </ThemeProvider>
  )
}

export default App
