/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "../Select/Select";
import styles from "./dataTable.module.scss";

interface Filter {
  defaultFilter?: boolean
  data?: Array<any>
}

interface DataTableProps {
  filters?: Filter;
  data: Array<any>
}
export default function DataTable(props: DataTableProps) {
  const { filters, data } = props;
  console.log(filters);

  //default filter
  const defaultFilter = filters?.defaultFilter && (
    <Select
      options={[
        { label: "tout", value: "Tout" },
        { label: "Option 1", value: "def option1", statusColor: "red", count: 5 },
        { label: "Option 2", value: "def option2", statusColor: "green", count: 10},
        { label: "Option 3", value: "def option3", statusColor: "yellow", count: 18 },
      ]}
      onSelect={(option: any) => {}}
      statusColors={true}
      count={true}
    />
  );


  //filter data
  interface FilterDataItem {
    options: Array<any>
    [key: string]: any
  }
  const filterData = filters?.data && (
    filters.data.map((f: FilterDataItem, idx: number) => (
        <Select 
            key={idx}
            options={f.options}
            onSelect={(option: any) => {console.log("option", option)}}
            statusColors={!!f.statusColors}
            count={!!f.count}
        />
    ))
  )

  return (
    <div className={styles.datatable}>
      <div className={styles.datatable_head}>
        {defaultFilter}
        {filterData}
      </div>
    </div>
  );
}
