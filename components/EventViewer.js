import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const EventViewer = (props) => (
<table border = "1">
<thead>
  <th>Positivity Value</th>
  <th>Behaviour</th>
  <th>Data Time</th>
</thead>
<tbody>
  {
    props.events.map(e =>
 <tr>
  <td style={{"text-align": "center", "background-color":e.positivity<0 ? "pink" : "lightgreen",color:e.positivity<0 ? "red" : "green"}}>{e.positivity}</td>
  <td style={{"background-color":e.positivity<0 ? "pink" : "lightgreen",color:e.positivity<0 ? "red" : "green"}} >{e.description}</td>
  <td style={{"background-color":"darkwhite"}}>{e.timeElapsed}</td>
  </tr>)}
  </tbody>
</table>
)

export default EventViewer
