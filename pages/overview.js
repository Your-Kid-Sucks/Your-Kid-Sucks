let fields = {
  educator: "Educator",
  class: "Class",
  student: "Student",
}

let fN = ["Bill", "Billy", "Bob", "Joe", "Julie", "Jenny"]
let lN = ["Smith", "McIntosh", "Green", "Williams", "Brown", "Jones"]

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randName = () => fN[randInt(0, fN.length)] + " " + lN[randInt(0, lN.length)]

let classes = [
  "Computer Science I",
  "Calculus III",
  "Databases"
]

let exampleData = classes.map(c => {
  return {
    name: c,
    studentData: Array(5).fill(0).map(
      () => {
        return {
          name: randName(),
          bpa: 4 * Math.random()
        }
      }
    )
  }
})


const Overview = () => (
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
        exampleData.map(c => (
          <details>
            <summary>{c.name}</summary>
            {
              c.studentData.map(s => (
                <details>
                  <summary>{s.name}: <span style={{color: `hsl(${s.bpa * 30}, 70%, 50%)`}}>{s.bpa.toFixed(2)}</span></summary>
                  <ul>
                    <li>Ha</li>
                    <li>Ha</li>
                    <li>There's</li>
                    <li>Nothing</li>
                    <li>Here</li>
                  </ul>
                </details>
              ))
            }
          </details>
        ))
      }
    </div>
  </div>
  </div>
)

export default Overview
