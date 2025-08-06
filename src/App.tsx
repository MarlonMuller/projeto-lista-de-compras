import './App.css'
import { ShoppingList } from './components'
import { ShoppingListProvider } from './providers'

function App() {

  return (
    <ShoppingListProvider>
      <ShoppingList />
    </ShoppingListProvider>
  )
}

export default App
