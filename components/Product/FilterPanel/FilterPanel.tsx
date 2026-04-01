import "./FilterPanel.css"
import { useState } from "react"
import { DownArrow } from "@/assets/Icons"

const FilterPanel = ({ openPanel }: { openPanel: boolean }) => {
    const options = ['Men', 'Women', 'Baby & Kids']

    const titles = [
        "OCCASION",
        "WORK",
        "FABRIC",
        "SEGMENT",
        "SUITABLE FOR",
        "RAW MATERIALS",
        "PATTERN"
    ]

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<string[]>([])

    const toggleOption = (value: string) => {
        setSelected(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        )
    }

    const clearAll = () => setSelected([])

    const isAllSelected = selected.length === 0

    return (
        <div className={`filter_panel ${openPanel ? "open" : ""}`}>
            <div className="filter_section">
                <label><input type="checkbox" /> Customize</label>
            </div>

            <div className="filter_section_ideal">

                {/* HEADER */}
                <div
                    className="filter_ideal_block"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <div className="filter_ideal_text">
                        <h3 className="filter_title">Ideal For</h3>

                        <span className="filter_text">
                            {isAllSelected ? 'All' : selected.join(', ')}
                        </span>

                        {!isAllSelected && (
                            <span
                                className="filter_unselect"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    clearAll()
                                }}
                            >
                                Unselect All
                            </span>
                        )}
                    </div>

                    <DownArrow />
                </div>

                {/* DROPDOWN */}
                {open && (
                    <div className="filter_options">
                        {options.map(option => (
                            <label key={option}>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(option)}
                                    onChange={() => toggleOption(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {
                titles.map((title, idx) => (
                    <div key={idx} className="filter_section">
                        <div>
                            <h3 className="filter_title">{title}</h3>
                            <span className="filter_text">All</span>
                        </div>
                        <DownArrow />
                    </div>
                ))
            }
        </div>
    )
}

export default FilterPanel