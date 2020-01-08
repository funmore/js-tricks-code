var comment=''
var count=0
function fetchUser() { 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            count++
            resolve('fetch sucess'+ comment+' '+count)
        },2000)
    });
}
/**
 * Promise 方式
 */
function getUserByPromise() {
    comment='promise'
    fetchUser()
        .then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
}
getUserByPromise();

/**
 * Generator 方式
 */
function* fetchUserByGenerator() {
    comment='generator'
    const user = yield fetchUser('generator');
    return user;
}

const g = fetchUserByGenerator();
const result = g.next().value;
result.then((v) => {
    console.log(v);
}, (error) => {
    console.log(error);
})

/**
 * async 方式
 */
async function getUserByAsync(){
    comment='async'
    let user = await fetchUser('async');
    return user;
}
getUserByAsync()
.then(v => {
    console.log(v)
});




