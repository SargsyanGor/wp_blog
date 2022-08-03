import React from 'react'
import { FacebookOption, LinkedinOption, Twitter } from 'grommet-icons'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

interface Props {
  slug: string
}

const SocialSharing = ({ slug }: Props) => {
  function shareOnFacebook() {
    const navUrl = `https://www.facebook.com/sharer/sharer.php?u=https://whitepaper.am/post/${slug}`
    window.open(navUrl, '_blank')
  }

  function shareOnLinkedIn() {
    const navUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://whitepaper.am/post/${slug}`
    window.open(navUrl, '_blank')
  }

  function shareOnTwitter() {
    const navUrl = `https://twitter.com/intent/tweet?text=https://whitepaper.am/post/${slug}`
    window.open(navUrl, '_blank')
  }

  return (
    <div className="mb-10 mt-20">
      <span className="mr-2 inline-block text-sm">Կիսվել:</span>
      <div className="inline-block">
        <button onClick={shareOnFacebook} className="mx-3">
          <Tooltip
            placement="top"
            overlay="Facebook"
            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <FacebookOption color="black" size="17px"></FacebookOption>
          </Tooltip>
        </button>
        <button onClick={shareOnLinkedIn} className="mx-3">
          <Tooltip
            placement="top"
            overlay="Linkedin"
            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <LinkedinOption color="dark" size="17px"></LinkedinOption>
          </Tooltip>
        </button>
        <button onClick={shareOnTwitter} className="mx-3">
          <Tooltip
            placement="top"
            overlay="Twitter"
            arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <Twitter color="dark" size="17px"></Twitter>
          </Tooltip>
        </button>
      </div>
    </div>
  )
}

export default SocialSharing
