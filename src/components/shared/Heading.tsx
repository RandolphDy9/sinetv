
type HeadingType = {
  title: string;
}

const Heading = ({ title }: HeadingType) => {
  return (
    <div className="text-4xl font-bold text-yellow-400 mb-3">
      { title }
    </div>
  )
}

export default Heading;