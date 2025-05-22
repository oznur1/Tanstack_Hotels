import React from 'react'
import type{ FC } from 'react'


interface Props{
  rating:number;
  expand:boolean;
}
const Rating:FC<Props> = ({rating,expand=false}) => {
  //renk belirleme
  const color:string=
  rating >= 4.7
  ? "bg-blue-500"
  :rating >=4
  ? "bg-green-500"
  : rating >=3
  ? "bg-yellow-500"
  : "bg-red-500"

  //metin belirle
    const text=
  rating >= 4.7
  ? "Çok İyi"
  :rating >=4
  ? "İyi"
  : rating >=3
  ? "Orta"
  : "Kötü"

  return (
    <div>
    <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}>{rating}</span>
  

  {expand && <span className='fontsemibold text-lg ms-2'>{text}</span>}
    </div>
  )
}

export default Rating
