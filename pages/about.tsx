import React, { useEffect, useRef, useState } from 'react'
import style from '../styles/pages/about.module.scss'
import { NextPage } from 'next'
import { Checkmark, Down } from 'grommet-icons'

const About: NextPage = () => {
  const [firstRenderComplete, setFirstRenderComplete] = useState(false)
  const mainContentContainer = useRef(null)

  useEffect(() => {
    setFirstRenderComplete(true)

    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll('.gs_show_on_scroll')
    // Callback for IntersectionObserver
    const callback = function (entries: any) {
      entries.forEach((entry: any) => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add('motion-safe:animate-fadeIn')
        }
      })
    }
    // Set up a new observer
    const observer = new IntersectionObserver(callback)

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add('opacity-0')

      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({
      // @ts-ignore
      top: mainContentContainer.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className={`relative bg-black ` + style.gs_primary_image_wrapper}>
        <div
          style={{
            backgroundImage: 'url(/olena.jpg)',
          }}
          className={`${
            firstRenderComplete ? 'opacity-80' : 'opacity-0'
          } absolute top-0 left-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-1000 ease-in`}
        />
        <div className="text-center">
          <button
            onClick={handleClick}
            className="absolute bottom-14 duration-300 hover:bottom-12"
          >
            <Down size="35px" color="white"></Down>
          </button>
        </div>
      </div>
      <div className="container mx-auto px-10 sm:w-1/2 sm:px-0 py-20" ref={mainContentContainer}>
        <div className="mb-20 text-center">
          <img className="mx-auto w-1/2 rounded-full" src="/me.jpeg" alt="me" />
        </div>
        <p className="gs_show_on_scroll mb-12 text-2xl font-bold text-amber-500">
          Ողջույն!
        </p>
        <p className="gs_show_on_scroll mb-10">
          Ես Գոռն եմ՝ մասնագիտությամբ Front-end ծրագրավորող: Հանդիսանում եմ
          Whitepaper-ի հիմնադիրը և միակ խմբագիրը :) Կայքը պատրաստել եմ ինքս` 4
          ամսում: Աշխատում եմ որպես ծրագրավորող մոտ 5 տարի:
        </p>

        <p className="gs_show_on_scroll mb-10">
          Իմ փոքրիկ բլոգում դու կգտնես լիքը մասնագիտական նյութեր, որոնք՝ հուսով
          եմ պետք կգան քեզ ու կօգնեն դառնալ ավելի լավը քո ոլորտում:
          Whitepaper-ում փորձելու եմ գրել բարդ բաների մասին՝ հնարավորինս բարզ,
          բայց լիարժեք:
        </p>
        <p className="gs_show_on_scroll mb-10">
          Քանի որ միայն տեխնիկական գիտելիքները բավական չեն առաջխաղացման համար,
          կլինեն նաև անձնային աճին և սոֆտ սքիլերին վերաբերվող հոդվածներ:
        </p>

        <div className="mb-10">
          <p className="gs_show_on_scroll mb-5">
            Կնշեմ 5 կարևոր պատճառ թե ինչի ընտրեցի այս մասնագիտությունը՝
          </p>
          <ul>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="orange" size="small" />
              <span className="ml-3">
                {' '}
                Սիրում եմ լուծել անհնարին թվացող խնդիրներ
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="red" size="small" />
              <span className="ml-3">
                {' '}
                Կարող եմ աշխատելիս լսել երաժշտություն
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="blue" size="small" />
              <span className="ml-3"> Կա լավ եկամտի շանսեր</span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="green" size="small" />
              <span className="ml-3">
                {' '}
                Ունեմ հնարավորություն անվերջ կատարելագործվելու
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="purple" size="small" />
              <span className="ml-3">
                {' '}
                Հաճելիա աշխատել գիտակից ու ինտելեկտուալ մարդկանց հետ
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="gs_show_on_scroll mb-5">
            Մի քանի հետաքրքիր փաստ իմ և Whitepaper-ի մասին
          </p>
          <ul>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="orange" size="small" />
              <span className="ml-3">
                Մինչև ծրագրավորող դառնալը՝ 3 անգամ կիսատ եմ թողել ուսումս, քանի
                որ անհամբեր էի ու շուտափույթ արդյունք էի ակնկալում
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="red" size="small" />
              <span className="ml-3">
                {' '}
                Սիրում եմ մտովի գնալ մոլորակի տարբեր հատվածներ
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="blue" size="small" />
              <span className="ml-3">
                {' '}
                Սիրում եմ մեքենայով գնալ անծանոթ վայրեր
              </span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="green" size="small" />
              <span className="ml-3">Վախենում եմ պարապ մարդկանցից</span>
            </li>
            <li className="gs_show_on_scroll mb-2 flex items-center text-sm italic">
              <Checkmark color="purple" size="small" />
              <span className="ml-3">
                {' '}
                Whitepaper-ի անունը սկզբում որոշել էի դնել JsCorner
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
