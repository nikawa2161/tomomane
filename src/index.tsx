import { Providers } from 'providers/ContextProvider'
import ReactDOM from 'react-dom/client'
import { App } from './views/App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>,
)
