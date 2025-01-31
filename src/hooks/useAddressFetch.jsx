import { useEffect, useState } from "react";

const useAddressFetch = ({ allProvience }) => {
  const base_url = "http://localhost:3000";
  const [provience, setProvinence] = useState([]);
  const [provienceId, setProvienceId] = useState(null);
  const [district, setDistrictList] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [municipality, setMunicipality] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${base_url}` + allProvience);
      const result = await response.json();
      setProvinence(result);
    })();
  }, [allProvience]);

  useEffect(() => {
    (async () => {
      console.log("provience id:", provienceId);
      const response = await fetch(
        `${base_url}/districts?provinceId=${provienceId}`
      );
      const result = await response.json();
      setDistrictList(result);
    })();
  }, [provienceId]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${base_url}/municipalities?districtId=${districtId}`
      );
      const result = await response.json();
      setMunicipality(result);
    })();
  }, [districtId]);

  const setProvience = (id) => {
    setProvienceId(id);
  };

  const setDistrict = (id) => {
    setDistrictId(id);
  };
  return { provience, setProvience, district, setDistrict, municipality };
};

export default useAddressFetch;
