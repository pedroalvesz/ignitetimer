import {NavLink} from 'react-router-dom'
import {Timer, Scroll} from 'phosphor-react'
import * as H from './styles'

import logoSVG from '../../assets/logo.svg'

export function Header() {
  return(
    <H.Container>
      <img src={logoSVG} alt=''/>

      <nav>
        <NavLink to='/' title='Dashboard'>
          <Timer size={24} alt='Dashboard'/>
        </NavLink>

        <NavLink to='/history' title='Dashboard'>
          <Scroll size={24} alt='History'/>
        </NavLink>
      </nav>
    </H.Container>
  )
}