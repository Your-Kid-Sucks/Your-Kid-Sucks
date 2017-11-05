import EventViewer from '../components/EventViewer.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

let fields = {
  educator: "Educator",
  class: "Class",
  student: "Student",
}

let eventData = [
  {timeElapsed: "11/5/2017 9:32 AM", description: "Stayed on task", positivity: 1},
  {timeElapsed: "11/5/2017 8:32 AM", description: "Cursed teacher", positivity: -1},
  {timeElapsed: "11/5/2017 69:32 AM", description: "Pooped on floor", positivity: -1},
  {timeElapsed: "11/5/2017 10:32 AM", description: "Worked well with others", positivity: 1},
  {timeElapsed: "11/5/2017 9:35 AM", description: "Completed all work", positivity: 1},
]
let classes = [
  "Computer Science I",
  "Calculus III",
  "Databases"
]


const Overview = (props) => (
  <div>
  <style jsx>
    {`
      * {
        font-size: 16pt;
      }

      #search {
        margin: 0 auto;
      }

      #viewer {
        max-width: 50vw;
        margin: 0 auto;
      }

      #viewer > * {
        margin-bottom: 0.5em;
      }

      details details {
        margin-left: 1em;
      }
    `}
  </style>
  <div>
    <table id="search">
      {
        Object.keys(fields).map(fk => {
          let fv = fields[fk]
          return (
            <tr>
              <td><label for={fk}>{fv}</label></td>
              <td><input type="text" name={fk}/></td>
            </tr>
          )
        })
      }
    </table>
    <hr />
    <div id="viewer">
      {
        props.data.students.map(c => (
          <details>
            <summary>{c.name}</summary>
            {
              /*c.studentData.map(s => (
                <details>
                  <summary>{s.name}: <span style={{color: `hsl(${s.bpa * 30}, 70%, 50%)`}}>{s.bpa.toFixed(2)}</span></summary>
                  <ul>
                  <EventViewer events={eventData} />
                  </ul>
                </details>
              ))*/
            }
          </details>
        ))
      }
    </div>
  </div>
  </div>
)

Overview.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/students?classroom=1')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
console.log(data.students);
  return {
   data
  }
}

export default Overview
