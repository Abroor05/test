import React, { useEffect, useState } from "react";
import { getLikeData } from "../../services/App";
import LikeCard from "../../components/likeCard/LikeCard";

function Like() {
  const [likeProdact, setLikeProdact] = useState(null);

  useEffect(() => {
    getLikeData().then(setLikeProdact);
  }, []);

  return (
    <section className="likePages">
      <div className="container">
        <div className="cards">
          {likeProdact?.results?.map((item) => (
            <LikeCard likeProdact={likeProdact} key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Like;
