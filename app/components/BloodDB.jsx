"use client";

import { useEffect, useState } from "react";

export default function BloodDB() {
  const [AllRecords, setAllRecords] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  const getAllRecords = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blood_db`);
    let data = await res.json();
    setAllRecords(data.data);

    if(res.status == 200){
        setLoaded(true);
    }
  };

  useEffect(() => {
    getAllRecords();
  }, []);

  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        {loaded && AllRecords.length == 0 ? (
          <div className="flex items-center justify-center h-[20vh]">
            <div className="">No Entries found</div>
          </div>
        ) : AllRecords ? (
          AllRecords.map((item) => (
            <div className="data my-4 text-zinc-800 flex flex-col gap-4">
              <div className="box flex flex-col ring-1 py-2 px-2 sm:px-4 md:py-4 ring-zinc-300 rounded-lg">
                <div className="top flex flex-col mb-4">
                  <div className="localty text-xl font-semibold">
                    Region: {item.region}
                  </div>
                </div>
                <div className="mid flex flex-col">
                  <div className="name text-zinc-600">
                    Donar Name:{" "}
                    <span className="text-zinc-600 font-bold">{item.name}</span>
                  </div>{" "}
                  <div className="age text-zinc-600">age: {item.age}</div>{" "}
                </div>
                <div className="bottom mt-2 flex flex-col gap-1">
                  <div className="blood-type text-zinc-600 ">
                    Blood Type:{" "}
                    <span className="text-zinc-600 font-bold">
                      {item.bloodType}
                    </span>{" "}
                  </div>
                  <div className="available-blood text-zinc-600 ">
                    Quantity:{" "}
                    <span className="text-zinc-600 font-bold">
                      {item.quantity}ml
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="box py-4 my-4 md:px-6 px-4 bg-gray-100 rounded-lg">
              <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
              <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
            <div className="box py-4 my-4 md:px-6 px-4 bg-gray-100 rounded-lg">
              <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
              <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
            <div className="box py-4 my-4 md:px-6 px-4 bg-gray-100 rounded-lg">
              <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
              <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
            <div className="box py-4 my-4 md:px-6 px-4 bg-gray-100 rounded-lg">
              <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
              <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
