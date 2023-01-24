import {Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Dashboard } from './pages/Dashboard'
import { History } from './pages/History'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/history' element={<History/>} />
      </Route>

    </Routes>
  )
}