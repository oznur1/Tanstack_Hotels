import type { FC } from "react";
import { useParams } from "react-router-dom";
import { usePlace } from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Container from "./container";
import Images from "./images";
import Info from "./info";

const Detail: FC = () => {
  // useParams'ten id'yi alıyoruz ve string olarak belirtiyoruz
  const { id } = useParams<{ id: string }>();

  // Eğer id yoksa hata göster
  if (!id) {
    return (
      <Container>
        <Error message="ID bulunamadı." />
      </Container>
    );
  }

  // usePlace hookundan refetch'i de ekleyerek alıyoruz
  const { isLoading, error, data, refetch } = usePlace(id);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error message={error.message} refetch={refetch} />
      </Container>
    );
  }

  if(!data )return null;
  return (
    <Container>
      <Images image={data.image_url}/>
      <Info place={data}/>
    </Container>
  );
};

export default Detail;
