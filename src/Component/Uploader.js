import React from "react";
import {usePapaParse} from "react-papaparse"
import Summary from '../Model/Summary'
import Button from '@mui/material/Button';
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'

function dateDiffInDays(firstDate, secondDate) {
    return differenceInCalendarDays(parseISO(secondDate), parseISO(firstDate))
}

export default function Uploader({onUpload}){
    const { readString } = usePapaParse()

    const onComplete = (results) => {
        let summary = new Summary()

        for (let i in results.data) {
            if (results.data[i].length !== 4) {
                continue
            }

            let project = summary.getProject(results.data[i][1].trim())
            let dateFrom = format(new Date(results.data[i][2]), 'yyyy-MM-dd')
            let dateTo = format(new Date(), 'yyyy-MM-dd')

            if (results.data[i][3].trim() !== 'NULL') {
                dateTo = format(new Date(results.data[i][3]), 'yyyy-MM-dd')
            }

            project.addEmployee(results.data[i][0])
            project.addWorkingDays(dateDiffInDays(dateFrom, dateTo))
        }

        onUpload(summary)
    }

    const onChange = (event) => {
        readString(event.target.files[0], {
            delimiter: ',',
            worker: true,
            download: false,
            complete: onComplete,
        })
    }

    return (
        <Button sx={{my: 5}} className="upload" variant="contained" component="label">
            Upload
            <input hidden multiple type="file" onChange={onChange} accept=".csv" dir="./"/>
        </Button>
    );
}