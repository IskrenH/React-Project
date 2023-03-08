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

    getEmployeeNumber = (number) => {
        return number >= 1 && number <= this.employees.length ? this.employees[number-1] : null
    }
}

export default Project