import React from 'react'
import Link from 'next/link'
import {FacebookOption, LinkedinOption, Pinterest, Twitter} from "grommet-icons";

const SocialSharing = () => {
    return (
        <div className="mb-10 mt-20">
            <span className="mr-2 inline-block text-sm">Կիսվել:</span>
            <div className="inline-block">
                <Link href="/pages">
                    <a className="mx-3">
                        <FacebookOption color="black" size="17px"></FacebookOption>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <LinkedinOption color="dark" size="17px"></LinkedinOption>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <Twitter color="dark" size="17px"></Twitter>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <Pinterest color="dark" size="17px"></Pinterest>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SocialSharing
