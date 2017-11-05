import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const EventViewer = (props) => (


<table>
  {
    props.events.map(e =>
 <tr style={{color:e.positivity<0 ? "red" : "green"}}>
  <td>{e.timeElapsed}</td>
  <td>{e.description}</td>
  <td>{e.positivity}</td>
  </tr>)}
</table>
)

export default EventViewer
