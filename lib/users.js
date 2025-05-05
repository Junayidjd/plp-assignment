// lib/users.js
let users = [];

export function findUser(email) {
  return users.find((u) => u.email === email);
}

export function addUser(user) {
  users.push(user);
}
