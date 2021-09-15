import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Info from "../infoCharacter/infoCharacter.js";
import { GETALLPEOPLE } from "../../data/data";
import giphy from '../../assets/images/giphy.gif'
function AllPeople() {
  const { loading, error, data, fetchMore } = useQuery(GETALLPEOPLE, {
    variables: { after: null },
  });
  const [id, setId] = useState(null);

  const moreData = (data, fetchMore) => {
    setTimeout(() => {
      const { endCursor } = data.allPeople.pageInfo;
      fetchMore({
        variables: { after: endCursor },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.allPeople.edges = [
            ...prevResult.allPeople.edges,
            ...fetchMoreResult.allPeople.edges,
          ];
          return fetchMoreResult;
        },
      });
    }, 1000);
  };

  if (loading) return (
    <div className="w-1/4 py-4 flex justify-center items-start border-r-2 h-table">
      <img className="w-8" src={giphy} alt="loading..." />
      <p className="mx-4 text-gray-400">loading</p>
    </div>
  );
  if (error)
    return (
      <div className="w-1/4 py-4 flex justify-center border-r-2 h-table">
        <div className="text-red-500 text-lg">Failed to load data</div>
      </div>
    );
  return (
    <div className="flex">
      <div className="w-1/4 border-r-2">
        {data.allPeople.edges.map(({ node }) => {
          return (
            <div
              className="w-full cursor-pointer relative px-4 py-5"
              onClick={() => setId(node.id)}
            >
              <div className="text-base font-bold">{node.name}</div>
              <div className="text-xs text-gray-500">
                {node.species == null ? "Human" : node.species.name} from{" "}
                {node.homeworld.name}
              </div>
              <div className="border-b-2 w-card absolute right-0 bottom-0"></div>
            </div>
            
          );
        })}
        {data.allPeople.pageInfo.hasNextPage ? (
          <div className="w-full flex justify-center items-center py-4">
            {moreData(data, fetchMore)}
            <img className="w-8" src={giphy} alt="loading..." />
            <p className="mx-4 text-gray-400">loading</p>
          </div>
        ) : null}
      </div>
      {id ? <Info id={id} /> : null}
    </div>
  );
}
export default AllPeople;
