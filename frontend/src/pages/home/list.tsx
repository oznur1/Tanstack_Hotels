import { useQuery } from "@tanstack/react-query"
import type { FC } from "react"
import { usePlaces } from "../../utils/service";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";

const List:FC = () => {

  const [searchParams]=useSearchParams();
  const paramsObject=Object.fromEntries(searchParams.entries());
  console.log(paramsObject);
  
  
  const {isLoading,error,data}=usePlaces(paramsObject as FilterParams)
  
  
 if(isLoading) return <div>Yükleniyor</div>

   if(error) return <div>{error.message}</div>
  
   return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınımızdaki Lokasyonlar</h1>
      
        <div className="grid gap-5 mt-5">
        {!data || data?.length === 0 ? (
          <div>
            <p>Aradığınız kriterlere uygun bir sonuç bulunamadı</p>
          </div>
        ) : (
          data?.map((place) => <Card key={place.id} place={place} />)
        )}
      </div>
    </div>
  );
};

export default List