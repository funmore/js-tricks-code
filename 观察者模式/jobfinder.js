class JobFinder(){
    constructor(id, job) {
        this.id = id;
        this.job = job;
        this.status = null;
    }
    subscrible(employee){
        employee.joblist.push(this) 
    }
    unsubscrible(employee){
        employee.jobFinderList = employee.jobFinderList.filter(person => person.id !== this.id)
    }
    update(status) {
        this.status = status;
        console.log(this.id + '知道自己求职状态变更为：' + status);
    }
}