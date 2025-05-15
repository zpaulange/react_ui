import Select from "../Select/Select"
import styles from "./dataTable.module.scss"

export default function DataTable() {
  return (
    <div className={styles.datatable}>
        <div className={styles.datatable_head}>
            <Select
                options={[
                    { label: 'tout', value: 'Tout' }, 
                    { label: 'Option 1', value: 'option1' }, 
                    { label: 'Option 2', value: 'option2' }, 
                    { label: 'Option 3', value: 'option3' }
                ]}
                onSelect={(option: any) => {}}
            />
            <Select
                options={[
                    { label: 'tout', value: 'Tout' }, 
                    { label: 'Option 1', value: 'option1' }, 
                    { label: 'Option 2', value: 'option2' }, 
                    { label: 'Option 3', value: 'option3' }
                ]}
                onSelect={(option: any) => {}}
            />
        </div>

    </div>
  )
}
