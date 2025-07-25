import { useMemo } from "react";
import { SpecialOffers } from "../../Data/special";
import { Offer } from "./offer";
import "./special.css";

export let Specials = () => {
  const offersList = useMemo(() => {
    return SpecialOffers.map((offer, i) => (
      <Offer key={offer.id} offer={offer} index={i} />
    ));
  }, []);

  return (
    <>
      <h2 className="title">العروض اليوميه</h2>
      <div className="container">
        <div className="cards">{offersList}</div>
      </div>
    </>
  );
};
