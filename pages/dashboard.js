import EventViewer from '../components/EventViewer.js'
import Link from 'next/link'


let eventData = [
  {timeElapsed: "20 minutes", description: "Stayed on task", positivity: 1},
  {timeElapsed: "15 minutes", description: "Cursed teacher", positivity: -1},
  {timeElapsed: "30 minutes", description: "Pooped on floor", positivity: -1},
  {timeElapsed: "25 minutes", description: "Worked well with others", positivity: 1},
  {timeElapsed: "5 minutes", description: "Completed all work", positivity: 1},
]

export default ()=> (
  <EventViewer events={eventData} />
)
