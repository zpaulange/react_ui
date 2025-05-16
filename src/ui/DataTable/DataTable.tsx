/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Pagination from "../Pagination/Pagination"
import Select from "../Select/Select"
import styles from "./dataTable.module.scss"

interface FilterConfigItem {
  key: string
  isLabel?: boolean
  isValue?: boolean
  statusColors?: boolean
  count?: boolean
}
interface DataTableProps {
  data: Array<any>
  thead?: Array<string>
  renderRow?: (item: any, idx: number) => React.ReactNode
  selectedFilters: { [key: string]: any }
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  filterConfig: FilterConfigItem[]
  statusLabels?: { [key: string]: { label: string; count: number; color: string } };
  extraSelects?: Array<{
    label: { title: string, name: string },
    options: Array<{ label: string, value: any }>,
    onSelect: (option: any) => void,
    isLabel?: boolean,
    isValue?: boolean,
    statusColors?: boolean,
    count?: boolean
  }>
  className?: string
  rowsPerPage?: number
  loading?: boolean
}

function getOptionLabel(key: string, value: any, statusLabels?: { [key: string]: { label: string, count: number } }) {
  if (key === "status" && statusLabels && statusLabels[value]) {
    const { label, count } = statusLabels[value];
    //return `${label} (${count})`;
    return label;
  }
  return value;
}

export default function DataTable(props: DataTableProps) {
  const {
    data,
    thead,
    renderRow,
    selectedFilters,
    setSelectedFilters,
    filterConfig,
    extraSelects,
    className,
    rowsPerPage,
    loading=false
  } = props

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  //display currente page
  //==================================================
  // si la donnée viendra de l'api, je dois mettre à jour tout ceci
  const startIdx = (currentPage - 1) * (rowsPerPage??10);
  const endIdx = startIdx + (rowsPerPage??10);
  const paginatedData = data.slice(startIdx, endIdx);
  //=====================================================

  // Génération dynamique des Selects selon filterKeys
  const filtersData = filterConfig.map((conf) => {
    const key = conf.key;
    let uniqueValues: any[] = [];

    // Pour le status, on prend toutes les clés de statusLabels
    if (key === "status" && props.statusLabels) {
      uniqueValues = Object.keys(props.statusLabels);
    } else {
      uniqueValues = Array.from(new Set(data.map((item) => item[key])));
    }

    const options = [
      { label: 'Tout', value: 'Tout' },
      ...uniqueValues.map((val) => {
        const option: any = {
          label: getOptionLabel(key, val, props.statusLabels),
          value: val,
        };
        //Ajoute la couleur depuis statusLabels si demandé
        if (key === "status" && conf.statusColors && props.statusLabels && props.statusLabels[val]) {
          option.statusColor = props.statusLabels[val].color;
        }
        // Ajoute le count depuis statusLabels si demandé
        if (key === "status" && conf.count && props.statusLabels && props.statusLabels[val]) {
          option.count = props.statusLabels[val].count;
        }
        return option;
      }),
    ];
    return {
      label: { title: key.charAt(0).toUpperCase() + key.slice(1), name: key },
      options,
      ...conf,
    };
  });

  const filterSelects = filtersData.map((f, idx) => (
    <Select
      key={idx}
      options={f.options}
      onSelect={(option: any) => {
        if (f.label?.name) {
          setSelectedFilters((prev) => ({
            ...prev,
            [f.label.name]: option,
          }))
        }
      }}
      label={f.label}
      isLabel={f.isLabel}
      isValue={f.isValue}
      statusColors={f.statusColors}
      count={f.count}
    />
  ))

  return (
    <div className={styles.datatable}>
      <div className={styles.datatable_head}>
        {filterSelects}
        {extraSelects && extraSelects.map((select, idx) => (
          <Select
            key={idx}
            options={select.options}
            onSelect={select.onSelect}
            label={select.label}
            isLabel={select.isLabel}
            isValue={select.isValue}
            statusColors={select.statusColors}
            count={select.count}
          />
        ))}
      </div>
      <table className={className}>
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
          {loading ? (
            <tr>
              <td colSpan={thead?.length || 1} style={{ textAlign: "center" }}>
                Chargement...
              </td>
            </tr>
          ) : paginatedData && paginatedData.length > 0 ? (
            paginatedData.map((item: any, idx: number) =>
              renderRow ? renderRow(item, idx) : (
                <tr key={idx}>
                  {Object.keys(item).map((key: any, idx: number) => (
                    <td key={idx}>{item[key]}</td>
                  ))}
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={thead?.length}>Aucun resultat</td>
            </tr>
          )}
        </tbody>
      </table>
      {data && data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / (rowsPerPage??10))}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}