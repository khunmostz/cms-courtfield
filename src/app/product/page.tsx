"use client";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export default function Product({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const mockData: any = [
    {
      title: "สนามฟุตบอล 1",
      description: "สนามฟุตบอล 1",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "สนามฟุตบอล 2",
      description: "สนามฟุตบอล 2",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "สนามฟุตบอล 3",
      description: "สนามฟุตบอล 3",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "สนามฟุตบอล 4",
      description: "สนามฟุตบอล 4",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "สนามฟุตบอล 5",
      description: "สนามฟุตบอล 5",
      image: "https://via.placeholder.com/250",
    },
    {
      title: "สนามฟุตบอล 6",
      description: "สนามฟุตบอล 6",
      image: "https://via.placeholder.com/250",
    },
  ];

  function onClickViewDetail(id: number) {
    router.push(`${pathname}/${id}`);
  }

  return (
    <div className="container mx-auto p-4 mb-2">
      <div className="text-xl mb-2 text-bold">สนามฟุตบอล</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockData.map((item: any, index: number) => (
          <div
            onClick={() => onClickViewDetail(index + 1)}
            key={index}
            className="bg-white p-4 shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img src={item.image} alt={item.title} />
            <h2 className="text-xl font-bold pt-4">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
