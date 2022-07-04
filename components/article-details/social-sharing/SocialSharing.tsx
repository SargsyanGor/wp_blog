import React from 'react'
import Link from 'next/link'
import {FacebookOption, LinkedinOption, Pinterest, Twitter} from "grommet-icons";
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

const SocialSharing = () => {
    return (
        <div className="mb-10 mt-20">
            <span className="mr-2 inline-block text-sm">Կիսվել:</span>
            <div className="inline-block">
                <Link href="/pages">
                    <a className="mx-3">
                        <Tooltip
                            placement="top"
                            overlay="Facebook"
                            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                        >
                            <FacebookOption color="black" size="17px"></FacebookOption>
                        </Tooltip>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <Tooltip
                            placement="top"
                            overlay="Linkedin"
                            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                        >
                            <LinkedinOption color="dark" size="17px"></LinkedinOption>
                        </Tooltip>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <Tooltip
                            placement="top"
                            overlay="Twitter"
                            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                        >
                            <Twitter color="dark" size="17px"></Twitter>
                        </Tooltip>
                    </a>
                </Link>
                <Link href="/pages">
                    <a className="mx-3">
                        <Tooltip
                            placement="top"
                            overlay="Pinterest"
                            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                        >
                            <Pinterest color="dark" size="17px"></Pinterest>
                        </Tooltip>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SocialSharing
