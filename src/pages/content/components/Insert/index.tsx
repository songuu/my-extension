// src/pages/content/components/Content/index.tsx

import { createRoot } from 'react-dom/client'
import App from './app'

const root = document.createElement('div')
root.id = 'content-insert-root'
document.body.append(root)

createRoot(root).render(<App />)
