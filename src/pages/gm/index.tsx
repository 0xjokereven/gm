import type { Task } from "gantt-task-react"
import { Gantt } from "gantt-task-react"
import "gantt-task-react/dist/index.css"

export default function App() {
  const tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ]
  return <Gantt tasks={tasks} />
}
