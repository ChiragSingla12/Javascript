//Promises

// console.log('person1: shows Ticket');
// console.log('person2: shows Ticket')

// const promiseWifeBringingTicks = new Promise( (resolve, reject) => {
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000);
// })

// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: I have the ticks');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my Popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// })

// const getButter = getPopcorn.then((t)=>{
//     console.log('wife: I have the ticks');
//     console.log('husband: we should go in');
//     console.log('wife: No I am hungry');
//     return new Promise((resolve, reject)=>{
//         resolve(`${t} butter`)
//     })
// })

// const getColdDrinks = getButter.then((t)=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`${t} colddrinks`);
//     })
// })


// getColdDrinks.then((t) => console.log(t));

// console.log('person4: shows Ticket');
// console.log('person5: shows Ticket')




//Using Async/Await



// console.log('person1: shows Ticket');
// console.log('person2: shows Ticket');

// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise( (resolve, reject) => {
//             setTimeout( () => resolve('ticket'),3000);
//         });

//     const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

//     const getButter = new Promise((resolve, reject)=> resolve(`butter`));

//     const getColdDrinks = new Promise((resolve, reject)=> resolve(`coldDrinks`));

//     let ticket = await promiseWifeBringingTicks;

//     console.log(`wife: I have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: No I am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: I got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my Popcorn');

//     let butter = await getButter;

//     console.log(`husband: i got some ${butter} on popcorn`);

//     let colddrink = await getColdDrinks;

//     console.log(`husband: i got some ${colddrink} on popcorn`);

//     return ticket;
// }

// preMovie().then((m)=> console.log(`person3 : shows ${m}`));

// console.log('person4: shows Ticket');
// console.log('person5: shows Ticket');




//Promise.all code



// console.log('person1: shows Ticket');
// console.log('person2: shows Ticket');

// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise( (resolve, reject) => {
//             setTimeout( () => resolve('ticket'),3000);
//         });

//     const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

//     const getCandy = new Promise((resolve, reject)=> resolve(`candy`));

//     const getCoke = new Promise((resolve, reject)=> resolve(`coke`));

//     let ticket = await promiseWifeBringingTicks;

//     let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

//     console.log(`${popcorn}, ${candy}, ${coke}`);

//     return ticket;
// }

// preMovie().then((m)=> console.log(`person3 : shows ${m}`));

// console.log('person4: shows Ticket');
// console.log('person5: shows Ticket');



// Conversion of createPost, deletePost into Async/Await



// const posts = [{ title: 'POST1' }];
// let lastActivityTime = null;

// // Helper function to log user's lastActivityTime

// function logLastActivityTime() {
//     console.log('User lastActivityTime:', lastActivityTime);
// }

// // Function to simulate creating a post
// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             resolve();
//         }, 1000);
//     });
// }

// // Function to update lastActivityTime
// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             lastActivityTime = new Date().toISOString();
//             resolve();
//         }, 1000);
//     });
// }

// // Function to delete the last post
// function deleteLastPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 const deletedPost = posts.pop();
//                 resolve(deletedPost);
//             } else {
//                 reject("ERROR: No posts to delete");
//             }
//         }, 1000);
//     });
// }


// // Main function using async/await
// async function main() {
//     const newPost = { title: 'POST2' };

//     try {
//         // Create a post and update lastActivityTime simultaneously
//         await Promise.all([createPost(newPost), updateLastUserActivityTime()]);

//         // Log all posts and lastActivityTime
//         console.log('All posts:', posts);
//         logLastActivityTime();

//         // Delete the last post and log the new set of posts after deletion
//         const deletedPost = await deleteLastPost();
//         console.log('Posts after deletion:', posts);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();