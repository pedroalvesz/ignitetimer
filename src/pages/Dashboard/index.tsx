import { Play } from 'phosphor-react'
import * as D from './styles'


export function Dashboard() {
  return(
    <D.Container>
      <form>
        <D.FormContainer>
          <label htmlFor="name">Vou trabalhar em</label>
          <input type="text" id="name" />
          
          <label htmlFor="minuteAmmount">durante</label>
          <input type="number" id="minuteAmmount"/>

          <span>minutos.</span>
        </D.FormContainer>

        <D.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <D.Separator>:</D.Separator>
          <span>0</span>
          <span>0</span>
        </D.CountdownContainer>


        <button type="submit">
          <Play size={24}/>
          Começar
        </button>
      </form>
    </D.Container>
  )
}