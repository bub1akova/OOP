// BEGIN
export function getMutualFriends(user1, user2) {
  const friends1 = user1.getFriends()
  const friends2 = user2.getFriends()
  return friends1.filter(friend1 => friends2.some(friend2 => friend1.id === friend2.id))
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});