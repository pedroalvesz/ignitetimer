import * as H from './styles'

export function History() {
  return(
    <H.Container>
    <h1>My History</h1>

    <H.TableContainer>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Start</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>20 minutes</td>
            <td>One month ago</td>
            <td>
              <H.Status status='green'>Conclued</H.Status>
            </td>
          </tr>
        </tbody>
      </table>
    </H.TableContainer>
    </H.Container>
  )
}