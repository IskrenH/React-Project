import React from "react";
import Papa from 'papaparse';

class Summary {
    projects = {}

    getProject = (nodeId) => {
        if (!this.projects.hasOwnProperty(nodeId)) {
            this.projects[nodeId] = new Project()
        }

        return this.projects[nodeId]
    }
}

class Project {
    employees = []

    workingDays = 0

    addEmployee = (employeeId) => {
        if (this.employees.indexOf(employeeId) < 0) {
            this.employees.push(employeeId)
        }
    }

    addWorkingDays = (value) => {
        this.workingDays = this.workingDays + value
    }
}

function dateDiffInDays(firstDate, secondDate) {
    const diffTime = Math.abs(firstDate - secondDate);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

let checkForFile = (e) => {
    let upload = document.querySelector('.upload input')
    let data = document.querySelector('.output')

    Papa.parse(upload.files[0], {
        download: true,
        header: false,
        skipEmptyLines: false,
        complete: function (results) {
            let summary = new Summary()
            data.innerHTML = ''

            for (let i in results.data) {
                if (results.data[i].length !== 4) {
                    continue
                }

                let project = summary.getProject(results.data[i][1].trim())
                let dateFrom = new Date(results.data[i][2].trim())
                let dateTo = new Date();

                if (results.data[i][3].trim() !== 'NULL') {
                    dateTo = new Date(results.data[i][3].trim())
                }

                project.addEmployee(results.data[i][0])
                project.addWorkingDays(dateDiffInDays(dateFrom, dateTo))
            }

            for (let i in summary.projects) {
                let project = summary.projects[i];

                if (project.employees.length > 1) {
                    console.log(summary.projects)
                }
            }
        }
    })
}

class Upload extends React.Component{
    render(){
        return(
            React.createElement('div', {className: 'upload'},
                <input type='file' onChange={checkForFile}/>,
                <label>Upload</label>,
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
        )
    }
}

export default Upload