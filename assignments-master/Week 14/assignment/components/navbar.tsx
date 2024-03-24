import Link from "next/link"

export interface Prop {
    buttonContent: string,
    link: string
}

interface propArray {
    props: Prop[]
}

export const Navbar = (pp : propArray) =>  {
    return <div className="fixed flex justify-center items-center space-around top-0 left-0 right-0 h-24 bg-neutral-100">
        {pp.props.map((prop, ind) => {
            return (
                <Link href={prop.link} key={ind}>
                    <div className="text-lg p-3 mx-5 border border-black rounded-lg">
                        {prop.buttonContent}
                    </div>
                </Link>
            )
        })}
    </div>
}

