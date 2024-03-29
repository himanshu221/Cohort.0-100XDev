"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();
    
    return <div>
        <button onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        <br />
        <input type="text" placeholder='username'/>
        <br />
        <input type="password" placeholder='password' />
        <br />
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
    </div>
}