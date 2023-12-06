import ServiseCard from "./ServiceCard.";

const ServiseList = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <ServiseCard key={data.id} title={data.title} icons={data.icons} />
      ))}
    </>
  );
};

export default ServiseList;
