const people = ["tim", "tom", "Jack"]
type Friend = "jack" | "Karen" | "Johathan"

const filterFriends =
    (people: Array<string>, friends = ["jack", "Karen", "Johathan"]) =>
        people.filter(p => friends
            .map(f => f.toLowerCase()).includes(p.toLowerCase()))

console.log(filterFriends(people))