class Employee {
    constructor() {
        this.jobFinderList = [];
    }

    recommend(JobFinder) {
        JobFinder.subscribe(this);
    }

    notify(message) {
        this.jobFinderList.forEach(person => {
            const target = message.find(m => m.id === person.id)
            if (target) person.update(target.status);
        })
    }
}