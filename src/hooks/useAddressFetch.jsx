import { useEffect, useState } from 'react';

const useAddressFetch = ({ provinceId, districtId }) => {
  const base_url = 'http://localhost:3000';
  const [province, setProvinence] = useState([]);
  const [district, setDistrictList] = useState([]);
  const [municipality, setMunicipality] = useState([]);

  useEffect(() => {
    (async () => {
      console.log('fetching province');
      const response = await fetch(`${base_url}/provinces`);
      const result = await response.json();
      setProvinence(result);
    })();
  }, []);

  useEffect(() => {
    if (!provinceId) return;
    (async () => {
      console.log('fetching district, province id:', provinceId);
      const response = await fetch(
        `${base_url}/districts?provinceId=${provinceId}`
      );
      const result = await response.json();
      setDistrictList(result);
    })();
  }, [provinceId]);

  useEffect(() => {
    if (!districtId) return;
    (async () => {
      console.log('fetching municipal, district id:', districtId);
      const response = await fetch(
        `${base_url}/municipalities?districtId=${districtId}`
      );
      const result = await response.json();
      setMunicipality(result);
    })();
  }, [districtId]);

  return { province, district, municipality };
};

export default useAddressFetch;
