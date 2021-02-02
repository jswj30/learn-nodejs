async function findAndSaveUser(Users) {
  // 생략
}
findAndSaveUser().then(() => {
  /* 생략 */
});
// 또는
async function other() {
  const result = await findAndSaveUser();
}

// const promise1 = Promise.resolve("성공1");
// const promise2 = Promise.resolve("성공2");
// (async () => {
//   for await (promise of [promise1, promise2]) {
//     console.log(promise);
//   }
// })();

// const findAndSaveUser = async (Users) => {
//   try {
//     let user = await Users.findOne({});
//     user.name = "zero";
//     user = await user.save();
//     user = await Users.findOne({ gender: "m" });
//     // 생략
//   } catch (error) {
//     console.error(error);
//   }
// };
