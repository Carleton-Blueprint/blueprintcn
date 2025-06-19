type cardProps = {
  text?:string
  time:number
}


export default function Card({text} :cardProps) {
//  if (text){
//   const title = text + "title"
//  }

  return <div className='bg-blue-800 flex'>{text ? <h1 className="bg-red-500">
    {text}
  </h1>:null}
  </div>;
}
