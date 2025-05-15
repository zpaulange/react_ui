/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from 'react'
import styles from './select.module.scss'

interface Option {
  value: string | number
  label: string
  statusColor?: string
  count?: number
}

interface SelectProps {
  width?: string
  options: Option[]
  onSelect: (option: Option) => void
  isLabel?: boolean,
  label?: any
  statusColors?: boolean
  count?: boolean
}
export default function Select(props: SelectProps) {
  const {width, options, onSelect, isLabel, label, statusColors, count} = props
  //states
  const [showSelectOptions, setShowSelectOptions] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [search, setSearch] = useState('')


  //close if click outside
  useEffect(() => {
    if (!showSelectOptions) return
    const handleClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShowSelectOptions(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [showSelectOptions])

  //close other selects when one is open
  useEffect(() => {
    if (!showSelectOptions) return
    const closeOthers = () => setShowSelectOptions(false)
    window.addEventListener('closeAllSelects', closeOthers)
    return () => window.removeEventListener('closeAllSelects', closeOthers)
  }, [showSelectOptions])

  //open and close the select
  const handleDisplaySelectOptions = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!showSelectOptions) {
      window.dispatchEvent(new CustomEvent('closeAllSelects'))
      setShowSelectOptions(true)
    } else {
      setShowSelectOptions(false)
    }
  }

  //select an option
  const handleSelect = (option: any) => {
    onSelect(option)
    setSelectedOption(option)
    //console.log("option", option);
    setShowSelectOptions(false)
  }

  // Filtrer les options selon la recherche
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase()) ||
    option.value.toString().toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.select} ref={selectRef} style={{...(width && { width }) }}>
      {label && label.title && <span className={styles.select_label_title}>{label.title}</span>}
      <div className={styles.select_value} onClick={handleDisplaySelectOptions}>
        <span className={styles.select_value_text}>
          {selectedOption ? selectedOption.value : 'Select an option'}
        </span>
        <span className={styles.select_item_right}>
          {statusColors && selectedOption?.statusColor &&
            <span className={styles.select_item_statut} style={{ backgroundColor: selectedOption?.statusColor }}></span>
          }
          {count &&
            <span className={styles.select_item_count}>
              ({selectedOption?.count?selectedOption.count:0})
            </span>
          }
        </span>
      </div>
      {showSelectOptions && (
        <div className={styles.select_box} style={{ ...(label && { top: '44px' }) }}>
          <div className={styles.select_search_box}>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.select_search_input}
              autoFocus
            />
          </div>
          <ul className={styles.select_list}>
            {filteredOptions.length === 0 ? (
              <li className={[styles.select_item, styles.select_no_result].join(' ')}>Aucun résultat</li>
            ) : (
              filteredOptions.map((option: Option) => (
                <li
                  key={option.value}
                  className={styles.select_item}
                  onClick={() => handleSelect(option)}
                >
                  <span className={styles.select_item_left}>{option.value} {isLabel && `(${option.label})`}</span>
                  <span className={styles.select_item_right}>
                    {statusColors &&
                      <span className={styles.select_item_statut} style={{ backgroundColor: option.statusColor }}></span>
                    }
                    {count &&
                      <span className={styles.select_item_count}>({option.count})</span>
                    }
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
