import { useState } from "react";
import useAddressFetch from "../hooks/useAddressFetch";

const LocalLevelInfo = () => {
  const { provience, setProvience, district, setDistrict, municipality } =
    useAddressFetch({ allProvience: "/provinces" });
  return (
    <div>
      Provience:
      <select
        name="provience"
        id="provience"
        onChange={(e) => {
          setProvience(e.target.value);
        }}
      >
        <option value="" selected={true}>
          Select Provience
        </option>
        {provience.length > 0
          ? provience.map((provience) => {
              return (
                <option value={provience.id} key={provience.id}>
                  {provience.name}
                </option>
              );
            })
          : null}
      </select>
      District:
      <select
        name="district"
        id="district"
        onChange={(e) => setDistrict(e.target.value)}
      >
        <option value="" selected={true}>
          Please select District
        </option>
        {district.length > 0
          ? district.map((district) => {
              return (
                <option value={district.id} key={district.id}>
                  {district.name}
                </option>
              );
            })
          : null}
      </select>
      Municipality:
      <select name="municipality" id="municipality">
        <option value="" selected={true}>
          Please select municipalities
        </option>

        {municipality.length > 0
          ? municipality.map((municipality) => {
              return (
                <option value={municipality.id} key={municipality.id}>
                  {municipality.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default LocalLevelInfo;
