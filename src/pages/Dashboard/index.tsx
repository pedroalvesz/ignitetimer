import { Play } from 'phosphor-react'
import * as D from './styles'


export function Dashboard() {
  return(
    <D.Container>
      <form>
        <D.FormContainer>
          <label htmlFor="task">I am gonna work on</label>
          <D.TaskInput
            type="text"
            id="task"
            placeholder='Your project name'
          />
          
          <label htmlFor="minuteAmmount">for</label>
          <D.MinuteAmmountInput 
            type="number" 
            id="minuteAmmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </D.FormContainer>

        <D.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <D.Separator>:</D.Separator>
          <span>0</span>
          <span>0</span>
        </D.CountdownContainer>


        <D.StartCountdownButton type='submit'>
          <Play size={24}/>
          Start
        </D.StartCountdownButton>
      </form>
    </D.Container>
  )
}