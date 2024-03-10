import Banner from "@/components/Banner";

export default function Home() {
  const mockData = [
    {
      title: "Title 1",
      description: "Description 1",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "Title 2",
      description: "Description 2",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "Title 3",
      description: "Description 3",
      image: "https://via.placeholder.com/250",
    },

    {
      title: "Title 4",
      description: "Description 4",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "Title 5",
      description: "Description 5",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "Title 6",
      description: "Description 6",
      image: "https://via.placeholder.com/250",
    },
  ];

  return (
    <main>
      <Banner />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold my-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockData.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md flex flex-col">
              <img src={item.image} alt={item.title} />
              <h2 className="text-xl font-bold pt-4">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
