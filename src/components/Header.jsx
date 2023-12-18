export default function Header() {
  return (
    <div className="flex flex-col gap-3 py-4 border-b-2">
        <h1 className="text-center text-5xl font-medium">Alexey Domut</h1>
        <h2 className="text-center text-4xl">Frontend Developer</h2>
        <div className="flex gap-3 justify-center">
            <span>Minsk, Belarus</span>
            <a className="underline" href="mailto:alexeydomut@gmail.com">alexeydomut@gmail.com</a>
        </div>
        <p className="text-lg font-normal">
            I am an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.
        </p>
    </div>
  )
}
