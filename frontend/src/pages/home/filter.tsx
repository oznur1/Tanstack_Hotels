import type { FC } from "react"
import { usePlaces } from "../../utils/service"
import { sortOptions } from "../../utils/constants";

const Filter:FC = () => {
  
  const {data}=usePlaces();
  const locations=[...new Set(data?.map((i)=>i.location))];
  

  return (
   <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
    <div className="field">
      <label htmlFor="location">Nereye Gitmek İstiyorsunuz?</label>

      <select className="input" name="location" id="location">
      
      <option value="">Seçiniz</option>
       {locations?.map((location, index) => (
  <option key={index} value={location}>
    {location}
  </option>
))}
</select>
    </div>
     
     <div className="field">
      <label htmlFor="location">Konaklama yeri adına göre ara?</label>
      <input  className ="input"
      type="text"
      name="location"
      id="location"
      placeholder="örn:Seaside Villa" />
     </div>

<div className="field">
  <label htmlFor="sort">Sıralama Ölçütü</label>
   <select className="input" name="sort" id="sort">
    {sortOptions?.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}

   </select>

</div>
   </form>

  )
}

export default Filter
