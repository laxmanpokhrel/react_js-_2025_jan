import { useState } from 'react';
import useAddressFetch from '../hooks/useAddressFetch';
import Select from '../components/common/Select';
import { createDropDownData } from '../utils';

const LocalLevelInfo = () => {
  const [provinceId, setProvinceId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [municipalId, setMunicipalId] = useState(null);

  const { province, district, municipality } = useAddressFetch({
    provinceId,
    districtId,
  });

  return (
    <div>
      Province:
      <Select
        id="province"
        name="province"
        options={createDropDownData(province)}
        placeholder="Select Province"
        onChange={(val) => {
          setProvinceId(val);
        }}
        value={provinceId}
      />
      District:
      <Select
        disabled={!provinceId}
        name="district"
        id="district"
        options={createDropDownData(district)}
        placeholder="Please select District"
        onChange={(val) => setDistrictId(val)}
        value={districtId}
      />
      Municipality:
      <Select
        disabled={!districtId || !provinceId}
        id="municipality"
        name="municipality"
        placeholder="Please select municipalities"
        options={createDropDownData(municipality)}
        value={municipalId}
        onChange={(val) => setMunicipalId(val)}
      />
    </div>
  );
};

export default LocalLevelInfo;
