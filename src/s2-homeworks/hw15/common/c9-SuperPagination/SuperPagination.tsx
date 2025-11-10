import React, { ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(page, +event.target.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // Pagination styles // student writes
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                    mb: 2,
                    "& .MuiPaginationItem-root": {
                      color: "#444",
                      fontWeight: 500,
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      },
                    },
                  }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                show
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: String(4)},
                    {id: 7, value: String(7)},
                    {id: 10, value: String(10)},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                rows in table
            </span>
        </div>
    )
}

export default SuperPagination
