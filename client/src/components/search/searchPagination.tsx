'use client'

import { Dispatch, SetStateAction } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

type paginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    totalData: number,
    pageSize: number,
    setPageSize: Dispatch<SetStateAction<number>>,
    onPageSizeChange: (size: number) => void
}

export default function SearchPagination({ page, setPage, totalData, pageSize, setPageSize, onPageSizeChange }: paginationProps) {
    const totalPages = Math.ceil((totalData) / pageSize)
    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

    const handlePageSizeChange = (e: { target: { value: any; }; }) => {
        setPageSize(e.target.value);
        onPageSizeChange(e.target.value);
        setPage(1)
    };

    return (
        <>
            <section className="pagination">
                <button id="prevPag" onClick={handlePrev} disabled={page === 1}>
                    <ArrowLeft w="22" h="22" color="#eee" />
                </button>
                {[...Array(totalPages).keys()].map((_, idx) => (
                    <button
                        key={idx + 1}
                        className={page === idx + 1 ? "active" : ""}
                        onClick={() => setPage(idx + 1)}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button id="nextPag" onClick={handleNext} disabled={page === totalPages}>
                    <ArrowRight w="22" h="22" color="#eee" />
                </button>
            </section>
            <div className="page-size-selector">
                <label htmlFor="pageSize">Items por página:</label>
                <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </>
    );
}
