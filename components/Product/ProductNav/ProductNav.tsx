'use client'

import "./ProductNav.css"
import { useState } from 'react'
import { DownArrow, LeftArrow, RightArrow } from '@/assets/Icons'
import FilterPanel from "../FilterPanel/FilterPanel"

const ProductNav = ({ list }: { list: number }) => {
    const [openSort, setOpenSort] = useState<string | null>(null)
    const [openPanel, setOpenPanel] = useState(false)
    const [selectedSort, setSelectedSort] = useState("Recommended")

    const sortOptions = [
        "Recommended",
        "Newest First",
        "Popular",
        "Price: High to Low",
        "Price: Low to High"
    ]

    const toggle = (section: string) => {
        setOpenSort(prev => (prev === section ? null : section))
    }

    const togglePanel = () => {
        setOpenPanel(prev => !prev)
    }

    const handleSelect = (option: string) => {
        setSelectedSort(option)
        setOpenSort(null)
    }

    return (
        <>
            <div className='nav'>
                <div className='nav_list_btn'>
                    <div className='nav_items_count'>
                        {list} ITEMS
                    </div>

                    <button
                        className='nav_filter_btn'
                        onClick={togglePanel}
                    >
                        <div className="filter_btn_text">
                            {openPanel ? (
                                <>
                                    <LeftArrow className="filter_arrow" /> Hide Filter
                                </>
                            ) : (
                                <>
                                    <RightArrow className="filter_arrow" /> Show Filter
                                </>
                            )}
                        </div>
                    </button>
                </div>

                <div className="sort">
                    <p
                        className="sort_heading"
                        onClick={() => toggle("meta")}
                    >
                        {selectedSort}
                        <DownArrow
                            className={`sort_arrow ${openSort === "meta" ? "rotate" : ""}`}
                        />
                    </p>
                </div>

                <div className="nav_mobile">
                    <button className="mobile_btn" onClick={togglePanel}>
                        Filter
                    </button>

                    <span className="mobile_divider"></span>

                    <button
                        className="mobile_btn arrow_btn"
                        onClick={() => toggle("meta")}
                    >
                        {selectedSort}
                        <DownArrow />
                    </button>
                </div>

                <div className={`sort_dropdown ${openSort === "meta" ? "open" : ""}`}>
                    {sortOptions.map((option) => (
                        <div
                            key={option}
                            className={`sort_item ${selectedSort === option ? "active" : ""}`}
                            onClick={() => handleSelect(option)}
                        >
                            {selectedSort === option && <span className="tick">✔</span>}
                            <span>{option}</span>
                        </div>
                    ))}
                </div>
            </div>
            <FilterPanel openPanel={openPanel} />
        </>
    )
}

export default ProductNav