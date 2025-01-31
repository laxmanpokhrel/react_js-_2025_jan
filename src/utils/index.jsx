export function createDropDownData(data) {
  return data?.map((dataItem) => ({
    id: dataItem.id,
    value: dataItem.id,
    label: dataItem.name,
  }));
}
