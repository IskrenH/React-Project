import Project from '../Model/Project'
class Summary {
    projects = {}

    getProject = (nodeId) => {
        if (!this.projects.hasOwnProperty(nodeId)) {
            this.projects[nodeId] = new Project()
        }

        return this.projects[nodeId]
    }
}

export default Summary