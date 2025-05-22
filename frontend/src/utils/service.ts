 
 import { useQuery } from "@tanstack/react-query";
 import type { Place } from "../types";
 import api from "./api";
 
 /*
   * useQuery hookuna api isteğinin ismini ve api isteğini atan fonksiyonu veriyoruz
   *useQuery bizim için api isteğini atıyor ve gelen cevaba göre state'ini yönetir
   *isloading,error,data gibi stateleri otamatik olarak tutar
   *otamatik olarak cache işlemi uygular
 * * birden fazla component'da aynı veriye ihtiyacınız varsa state managment kütüphanesine gereke duymadan bütün componentl'larda useQuery ile api isteği atarız
 * Hata durumunda 3 kez daha ekstra deneme yapar
 * * anlık sunucu yoğunluğundan kaynaklanıcak hataların önüne geçeriz
   */


export const usePlaces=()=>
    useQuery<Place[]>({
        queryKey:["places"],
        queryFn:()=>api.get("/places")
        .then((res)=>res.data.places),

            // hata durumunda deneme sayısı
    retry: 3,
    // hata durumunda bekleme süresi
    retryDelay: 2000,
    // staleTime: cache'deki verilerin "geçerli / taze" kalma sreüsi
    staleTime: 0,
    // gcTime: cache'deki velerin "geçersiz / bayat olma / temizlenme" süresi
    gcTime: 30000,
    });