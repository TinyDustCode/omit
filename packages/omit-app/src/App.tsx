import {useState} from 'react'
import {Button, OmitStyles, OmitProvider} from "omit-ui";

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    return (
        <OmitProvider theme={{mode}}>
            <OmitStyles/>
            <div>
                <button onClick={() => setMode('dark')}>切换</button>
                <Button>1e32</Button>
            </div>
        </OmitProvider>
    )
}

export default App
