interface TitleProps{
    title : string
}
const Title = ({title}: TitleProps) => {
  return (
    <h1 className="font-bold mb-5 text-center text-3xl">
        {title}
    </h1>
  )
}

export default Title