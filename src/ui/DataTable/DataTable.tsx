/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Select from "../Select/Select";
import styles from "./dataTable.module.scss";

interface Filter {
  //defaultFilter?: boolean
  data?: Array<any>;
}

interface DataTableProps {
  filters?: Filter;
  data: Array<any>;
  thead?: Array<any>;
  renderRow?: (item: any, idx: number) => React.ReactNode;
  selectedFilters: { [key: string]: any };
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<{ [key: string]: any }>
  >;
}
export default function DataTable(props: DataTableProps) {
  const {
    filters,
    data,
    thead,
    renderRow,
    selectedFilters,
    setSelectedFilters,
  } = props;
  console.log("filters", filters);
  // État pour stocker toutes les valeurs sélectionnées par name
  //const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: any }>({});
  //console.log('selectedFilters', selectedFilters);

  //default filter
  /* const defaultFilter = filters?.defaultFilter && (
    <Select
      options={[
        { label: "tout", value: "Tout" },
        { label: "Option 1", value: "def option1", statusColor: "red", count: 5 },
        { label: "Option 2", value: "def option2", statusColor: "green", count: 10},
        { label: "Option 3", value: "def option3", statusColor: "yellow", count: 18 },
      ]}
      onSelect={(option: any) =>
        setSelectedFilters(prev => ({
          ...prev,
          fan: option
        }))
      }
      statusColors={true}
      count={true}
      label={{title:"Filtre", name:"fan"}}
    />
  ); */

  //filter data
  interface FilterDataItem {
    options: Array<any>;
    label?: { title?: string; name?: string };
    [key: string]: any;
  }
  const filterData =
    filters?.data &&
    filters.data.map((f: FilterDataItem, idx: number) => (
      <Select
        key={idx}
        options={f.options}
        onSelect={(option: any) => {
          if (f.label?.name) {
            setSelectedFilters((prev) => ({
              ...prev,
              [f.label?.name ?? ""]: option,
            }));
          }
        }}
        statusColors={!!f.statusColors}
        count={!!f.count}
        label={f.label}
      />
    ));

  return (
    <div className={styles.datatable}>
      <div className={styles.datatable_head}>
        {/* {defaultFilter} */}
        {filterData}
      </div>
      <table>
        {thead && thead.length > 0 && (
          <thead>
            <tr>
              {thead.map((th: any, idx: number) => (
                <th key={idx}>{th}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data && data.length > 0 ? (data.map((item: any, idx: number) =>
            renderRow ? (renderRow(item, idx)) :(
                <tr key={idx}>
                  {Object.keys(item).map((key: any, idx: number) => (
                    <td key={idx}>{item[key]}</td>
                  ))}
                </tr>
              )
            )) : (
            <tr>
              <td colSpan={thead?.length}>Aucun resultat</td>
            </tr>
          )}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}
