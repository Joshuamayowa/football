import Image from "next/image"
export default function Football({list}) {
    const footballerList=list.map(football => (
        <section key= {football.id} className="m-auto text-white bg-slate-600">
            <Image className="hover:animate-spin" src = {football.image} alt = {football.name} width={200}  height= {200}/> 
            <h2>{football.name}</h2>
            <h2>{football.age}</h2>
            <h2>{football.country}</h2>
            <h2>{football.description}</h2>
        </section>
    ))
  return (
        <div className="grid grid-cols-3 gap-2 bg-blue-900 ">{footballerList}</div>
  )
}
