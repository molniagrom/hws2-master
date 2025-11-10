import React from 'react'
import downIcon from '../../../../assets/arrow/downIcon.svg';
import upIcon from '../../../../assets/arrow/upIcon.svg';
import twoArror from '../../../../assets/arrow/twoArror.svg';
import s from './SuperSort.module.css' // Add styles import

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // student writes, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === down) return up;
    if (sort === up) return '';
    return down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : twoArror

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.sortContainer} // Add class for container
        >
            {/*make icon*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'icon'}
                className={s.sortIcon} // Add class for icon
            />
        </span>
    )
}

export default SuperSort
