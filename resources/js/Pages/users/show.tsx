import { User } from "@/types";

export default function UsersShow({user}: {user: User}) {
    console.log(user)
  return (
    <div>Username: {user.username}</div>
  )
}
