import {useState} from 'react'
import {Button, OmitStyles, OmitProvider} from "omit-ui";

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    return (
        <OmitProvider theme={{mode}}>
            <OmitStyles/>
            <div>
                <button onClick={() => setMode('dark')}>切换</button>
                <button onClick={() => setMode('dark')}>切换</button>
                <Button>default</Button>
                <Button theme='primary' size='large'>primary</Button>
                <Button theme='success' size='medium'>success</Button>
                <Button theme='warning' size='small'>warning</Button>
                <Button theme='danger'>danger</Button>
            </div>
        </OmitProvider>
    )
}

export default App
