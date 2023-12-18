import ProjectsItem from "./ProjectsItem"

export default function Projects() {
  const projects = [
    {
      imgUrl: '/src/assets/ToDo.png',
      title: 'ToDo',
      gitHubUrl: 'https://github.com/AliakseiDonut/ToDo',
      description: 'Effortlessly stay organized: Simplify your tasks, boost productivity, and never miss a beat with our intuitive ToDoList app.',
      id: '1'
    },
    {
      imgUrl: '/src/assets/Notions.png',
      title: 'Notions',
      gitHubUrl: 'https://github.com/AliakseiDonut/Notion',
      description: 'Unleash your creativity and streamline your workflow with Notions: The all-in-one app for notes, tasks, and collaboration.',
      id: '2'
    },
    {
      imgUrl: '/src/assets/Store.png',
      title: 'Store',
      gitHubUrl: 'https://github.com/AliakseiDonut/store',
      description: 'Discover, shop, and save effortlessly with Store: Your ultimate shopping companion for finding the best deals and managing your purchases.',
      id: '3'
    }
  ]
  
  return (
    <div>
      <h2 className="text-3xl mb-2">Projects</h2>
      <div className="flex flex-col gap-10 py-5">
        {projects.map(el => <ProjectsItem key={el.id} item={ el } />)}
      </div>
    </div>
  )
}