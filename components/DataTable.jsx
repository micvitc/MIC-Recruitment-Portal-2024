"use client";
import { React, useState, useEffect, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import FilterDepartment from "./FilterDepartment";
import FilterShortlisted from "./FilterShortlisted";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "./ui/button";
import { CheckBoxComp } from "./CheckBoxComp";
import { toast } from "sonner";
import { curDate, curDay, curMonth, curYear, months, days } from "@/constants";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    usePagination,
    useRowSelect,
} from "react-table";
import { Input } from "@/components/ui/input";
import PaginationComp from "./PaginationComp";
import DialogComp from "./DialogComp";
import MailComposer from "./MailComposer";

const DataTable = ({ data }) => {
    const [tableData, setTableData] = useState(data);
    const [deptFiltered, setDeptFiltered] = useState(data);
    const [shortFiltered, setShortFiltered] = useState(data);

    const commonElements = (arr1, arr2) => {
        let common = [];
        arr1.map((elt1) => {
            arr2.map((elt2) => {
                if (elt1 === elt2) {
                    common.push(elt1);
                }
            });
        });
        return common;
    };

    const filterFunc = (dept) => {
        setDeptFiltered(data);
        const filteredData = data.filter((data) => {
            return data.Department === dept;
        });

        setDeptFiltered(filteredData);
    };

    const shortlistedFilterFunc = (status) => {
        const filteredData = data.filter((data) => {
            return String(data.shortlisted) === status;
        });

        setShortFiltered(filteredData);
    };

    useEffect(() => {
        if (deptFiltered !== data && shortFiltered !== data) {
            setTableData(commonElements(deptFiltered, shortFiltered));
        } else if (deptFiltered !== data && shortFiltered === data) {
            setTableData(deptFiltered);
        } else if (deptFiltered === data && shortFiltered !== data) {
            setTableData(shortFiltered);
        } else {
            setTableData(data);
        }
    }, [deptFiltered, shortFiltered]);

    const handleShortlist = async (id, isShortlisted) => {
        console.log(
            `Shortlist button pressed for ID: ${id}, current status: ${isShortlisted}`
        );

        try {
            const res = await fetch(`/api/shortlist/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ shortlisted: !isShortlisted }), // Send the new status
            });

            if (res.ok) {
                const updatedData = tableData.map((applicant) => {
                    if (applicant._id === id) {
                        console.log(
                            `Updating applicant with ID: ${id} to shortlisted status: ${!isShortlisted}`
                        );
                        return { ...applicant, shortlisted: !isShortlisted }; // Update in local state
                    }
                    return applicant;
                });
                setTableData(updatedData);
                toast.success("Student status updated!");
            } else {
                console.error("Failed to update applicant status.");
                throw new Error("Failed to update");
            }
        } catch (error) {
            console.error(
                "Error occurred while updating the status:",
                error.message
            );
            toast.error("Failed to update status");
        }
    };

    const columns = useMemo(
        () => [
            {
                Header: "Sr No",
                accessor: (row, index) => index + 1,
            },
            {
                Header: "Name",
                accessor: "Name",
            },
            {
                Header: "Email",
                accessor: "Email",
            },
            {
                Header: "Phone",
                accessor: "Phone",
            },
            {
                Header: "Department",
                accessor: "Department",
            },
            {
                Header: "Reason",
                accessor: "Reason",
            },
            {
                Header: "Projects",
                accessor: "Projects",
            },
            {
                Header: "Shortlisted",
                accessor: "shortlisted",
                Cell: ({ row }) => (
                    <button
                        onClick={() =>
                            handleShortlist(
                                row.original._id,
                                row.original.shortlisted
                            )
                        }
                        className={`px-4 py-2 rounded w-[115px] ${
                            row.original.shortlisted
                                ? "bg-red-600 text-white"
                                : "bg-green-600 text-white"
                        }`}
                    >
                        {row.original.shortlisted ? "Unshortlist" : "Shortlist"}
                    </button>
                ),
            },
        ],
        [tableData]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        setGlobalFilter,
        selectedFlatRows,
    } = useTable(
        {
            columns,
            data: tableData,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <CheckBoxComp
                                {...getToggleAllRowsSelectedProps()}
                            />
                        ),
                        Cell: ({ row }) => (
                            <CheckBoxComp
                                {...row.getToggleRowSelectedProps()}
                            />
                        ),
                    },
                    ...columns,
                ];
            });
        }
    );

    const { globalFilter, pageIndex } = state;

    const handlePageSize = (e) => {
        const sz = Number(e.target.value);
        if (sz) {
            setPageSize(sz);
        } else {
            setPageSize(10);
        }
    };

    const handleRowSelection = async (paylaodData) => {
        const selectedApplicants = selectedFlatRows.map((row) => row.original);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recipients: selectedApplicants,
                    paylaodData: payloadData,
                }),
            });

            if (response.ok) {
                toast("Invite has been sent!", {
                    description: `On ${days[curDay - 1]}, ${
                        months[curMonth - 1]
                    } ${curDate}, ${curYear}`,
                });
            } else {
                toast("Failed to send invite", {
                    description: "Please try again later.",
                });
            }
        } catch (error) {
            console.error("Error sending emails:", error);
            toast("Failed to send invite", {
                description: "Please try again later.",
            });
        }
    };

    const showRowData = () => {
        const selectedApplicants = selectedFlatRows.map((row) => row.original);
        return selectedApplicants;
    };

    return (
        <div className="flex flex-col gap-3 p-3 mt-5">
            <div className="flex items-start justify-start gap-3">
                <Input
                    value={globalFilter || ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Filter Data"
                    className="w-[25%]"
                />
                <Input
                    className="w-fit"
                    onChange={(e) => handlePageSize(e)}
                    placeholder={"Page Size"}
                />
                <FilterDepartment filterFunc={filterFunc} />
                <FilterShortlisted filterFunc={shortlistedFilterFunc} />
                <DialogComp selectedApplicants={showRowData} />
                {/* <Button
                    onClick={() => handleRowSelection()}
                    variant="secondary"
                >
                    Send Custom Mail
                </Button> */}
                <MailComposer
                    recipients={selectedFlatRows.length}
                    handleRowSelection={handleRowSelection}
                />
                <Button
                    onClick={() => window.location.reload()}
                    className="flex gap-2"
                >
                    <GrPowerReset />
                    Reset Filters
                </Button>
            </div>

            <div className="border rounded-md">
                <Table {...getTableProps()}>
                    <TableHeader>
                        {headerGroups.map((hg) => (
                            <TableRow key={hg.id} {...hg.getHeaderGroupProps()}>
                                {hg.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        {...header.getHeaderProps(
                                            header.getSortByToggleProps()
                                        )}
                                    >
                                        <div className="inline-flex gap-1 items-center">
                                            {header.render("Header")}
                                            <FaSortAmountDownAlt />
                                        </div>
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <TableRow key={row.id} {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render("Cell")}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>

            <PaginationComp
                pageIndex={pageIndex}
                pages={pageOptions.length}
                nextPage={nextPage}
                canNext={canNextPage}
                previousPage={previousPage}
                canPrev={canPreviousPage}
                goto={gotoPage}
                pageCount={pageCount}
            />
        </div>
    );
};

export default DataTable;
