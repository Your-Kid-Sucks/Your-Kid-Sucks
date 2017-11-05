import EventViewer from '../components/EventViewer.js'
import Link from 'next/link'


let eventData = [
  {timeElapsed: "11/5/2017 9:32 AM", description: "Stayed on task", positivity: 1},
  {timeElapsed: "11/5/2017 8:32 AM", description: "Cursed teacher", positivity: -1},
  {timeElapsed: "11/5/2017 69:32 AM", description: "Pooped on floor", positivity: -1},
  {timeElapsed: "11/5/2017 10:32 AM", description: "Worked well with others", positivity: 1},
  {timeElapsed: "11/5/2017 9:35 AM", description: "Completed all work", positivity: 1},
]

export default ()=> (
  <EventViewer events={eventData} />
)
