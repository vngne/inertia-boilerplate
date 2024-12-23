import { Head, Link } from "@inertiajs/react";
import UserCard from "@/components/users/user-card";
import { User } from "@/types/index";
import RootLayout from "@/layout";

export default function Users({ users }: { users: User[] }) {
    console.log(users);
    return (
        <RootLayout>
            <Head title="Users" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <Link href={`/users/${user?.username}`} key={user.id}>
                        <UserCard
                            key={user?.id}
                            id={user?.id ?? ""}
                            name={user?.name}
                            email={user?.email}
                            role={user?.role}
                            image={user?.image}
                            username={user?.username}
                            created_at={""}
                            updated_at={""}
                        />
                    </Link>
                ))}
            </div>
        </RootLayout>
    );
}
