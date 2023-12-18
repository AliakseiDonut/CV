export default function ProjectsItem({item}) {
  return (
    <a className="flex flex-col gap-3 border-2 border-black p-5" href={item.gitHubUrl}>
        <h2 className="text-xl font-semibold text-center">{item.title}</h2>
        <img src={item.imgUrl} alt="" />
        <p className="font-medium">{item.description}</p>
    </a>
  )
}
