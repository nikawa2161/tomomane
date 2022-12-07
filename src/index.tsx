import { FriendProvider } from 'providers/FriendProvider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './views/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <FriendProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FriendProvider>,
)
