import {useState} from 'react'
import {Button, OmitStyles, OmitProvider} from "omit-ui";
import {Route, Routes, Link} from 'react-router-dom'
import LinkPage from './ pages/link'

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    return (
        <OmitProvider theme={{mode}}>
            <OmitStyles/>
            <div>
                <button onClick={() => setMode('dark')}>dark</button>
                <button onClick={() => setMode('light')}>light</button>
                <Button theme='primary' size='large'>primary</Button>
                <Button theme='success' size='medium'>success</Button>
                <Button theme='warning' size='small'>warning</Button>
                <Button theme='danger'>danger</Button>
                <Button theme='default'>default</Button>
            </div>

            <div>
               <Link to='/link'></Link>
            </div>
            <Routes>
                <Route path='/link' element={<LinkPage />} />
            </Routes>
            
        </OmitProvider>
    )
}

export default App
