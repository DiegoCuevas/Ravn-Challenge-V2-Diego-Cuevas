import React from "react";
import { useQuery } from "@apollo/client";
import { GETPERSON } from "../../data/data";
import giphy from "../../assets/images/giphy.gif";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function InfoTable({ id }) {
  const { loading, error, data } = useQuery(GETPERSON, { variables: { id } });
  if (loading)
    return (
      <div className="w-2/3 py-6 flex justify-center items-start">
        <img className="w-8" src={giphy} alt="loading..." />
        <p className="mx-4 text-gray-400">loading</p>
      </div>
    );

  if (error)
    return (
      <div className="w-2/3 py-6 flex justify-center items-start">
        <div className=" text-red-500 text-lg">Failed to load data</div>
      </div>
    );

  return (
    <div className={`tablet:w-2/3 cel:w-1/2 cel:px-10 px-24 py-8`}>
      <div>
        <div className="font-bold">General Information</div>
        <div className="flex justify-between border-b-2 py-4">
          <div className="text-gray-500 font-semibold"> Eye Color </div>{" "}
          <div className="font-semibold">
            {capitalize(data.person.eyeColor)}
          </div>
        </div>
        <div className="flex justify-between border-b-2 py-4">
          <div className="text-gray-500 font-semibold"> Hair Color </div>{" "}
          <div className="font-semibold">
            {capitalize(data.person.hairColor)}
          </div>
        </div>
        <div className="flex justify-between border-b-2 py-4">
          <div className="text-gray-500 font-semibold"> Skin Color </div>{" "}
          <div className="font-semibold">
            {capitalize(data.person.skinColor)}
          </div>
        </div>
        <div className="flex justify-between border-b-2 py-4">
          <div className="text-gray-500 font-semibold"> Birth Year </div>{" "}
          <div className="font-semibold">{data.person.birthYear}</div>
        </div>
        {data.person.vehicleConnection.vehicles[0] ? (
          <div className="font-bold py-4">Vehicles</div>
        ) : null}
        <div className="">
          {data.person.vehicleConnection.vehicles.map((vehicle) => {
            return (
              <div className="border-b-2 py-4">
                <div className="text-gray-500 font-semibold">
                  {vehicle.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
