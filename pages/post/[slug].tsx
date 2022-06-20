import React from 'react'
import style from '/styles/pages/article_details.module.scss'
import SocialSharing from '../../components/article-details/social-sharing/SocialSharing'
import {Down, Favorite} from 'grommet-icons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Comments from "../../components/article-details/comments/Comments";

const ArticleDetails = () => {
  const codeEx = 'function createStyleObject(classNames, style) {\n' +
      '  return classNames.reduce((styleObject, className) => {\n' +
      '    return {...styleObject, ...style[className]};\n' +
      '  }, {});\n' +
      '}'

  return (
    <main className="relative">
      <div
        className={
          `relative flex items-center justify-center bg-black ` +
          style.gs_primary_image_wrapper
        }
      >
        <div className="relative z-50 text-center text-white">
          <span className="text-xs font-bold text-amber-500">
            FASHION / 5 MIN READ
          </span>
          <h2 className="my-2.5 text-4xl font-bold uppercase">
            THAT LONDON CALLING
          </h2>
          <p className="text-xl italic">This is an optional secondary title</p>
        </div>
        <div
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/picsum/2100/900)',
          }}
          className="absolute top-0 left-0 h-full w-full bg-fixed opacity-60"
        />
        <button className='absolute bottom-14 duration-300 hover:bottom-12'><Down size='35px' color='white'></Down></button>
        <div className="absolute right-12 bottom-12">
          <button className='w-14'><Favorite color="white" size="large" className='duration-500 transition-all hover:stroke-amber-500'></Favorite></button>
          <span className='ml-3 text-lg font-light text-white'>759</span>
        </div>
      </div>
      <div className="container mx-auto mt-20 w-1/2">
        <SocialSharing />
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          architecto consequatur corporis delectus dignissimos dolor ducimus
          excepturi impedit iusto maxime nobis, obcaecati porro possimus quas
          quia tempora temporibus? Adipisci aliquid atque debitis delectus
          doloremque ducimus et, fugiat, fugit hic ipsum minima natus nobis
          praesentium quo repellat repudiandae soluta tempora temporibus?
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
          commodi dolores ea, enim facere hic id impedit ipsam ipsum itaque iure
          laboriosam nam necessitatibus neque, recusandae repellat ut vel velit
          voluptas. Animi corporis cupiditate dolores facilis nostrum nulla
          repellat totam unde veritatis voluptatum. Consequuntur culpa cumque
          facilis fuga in, laborum laudantium mollitia nam nemo neque
          perspiciatis possimus provident sint velit veritatis. Dignissimos,
          dolorem voluptatem.
        </p>
        <h2 className="mb-8 text-2xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h2>
        <img
          className="mb-8 h-80 w-full object-cover"
          src="https://picsum.photos/2000/700/"
          alt=""
        />
        <img
          className="mb-8 h-80 w-full object-cover"
          src="https://picsum.photos/2000/700/"
          alt=""
        />
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          animi asperiores cumque, deleniti ex facere iure labore natus nesciunt
          placeat praesentium sit vel vero voluptatum. Blanditiis dignissimos
          eos explicabo id modi nesciunt, porro possimus sed suscipit veritatis.
          A cum est eum harum modi?
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          animi asperiores cumque, deleniti ex facere iure labore natus nesciunt
          placeat praesentium sit vel vero voluptatum. Blanditiis dignissimos
          eos explicabo id modi nesciunt, porro possimus sed suscipit veritatis.
          A cum est eum harum modi?
        </p>
        <div className="mb-10 grid grid-cols-3 gap-7">
          <div>
            <img
              className="h-full w-full object-cover"
              src="https://picsum.photos/id/870/2000/760?grayscale&blur=2"
              alt=""
            />
          </div>
          <div>
            <img
              className="mb-8 h-full w-full object-cover"
              src="https://picsum.photos/id/820/2000/760"
              alt=""
            />
          </div>
          <div>
            <img
              className="mb-8 h-full w-full object-cover"
              src="https://picsum.photos/id/810/2000/760"
              alt=""
            />
          </div>
          <div>
            <img
              className="mb-8 h-full w-full object-cover"
              src="https://picsum.photos/id/823/2000/760"
              alt=""
            />
          </div>
          <div>
            <img
              className="mb-8 h-full w-full object-cover"
              src="https://picsum.photos/id/840/2000/760"
              alt=""
            />
          </div>
          <div>
            <img
              className="mb-8 h-full w-full object-cover"
              src="https://picsum.photos/id/870/2000/760"
              alt=""
            />
          </div>
        </div>
        <h2 className="mb-8 text-2xl font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
          amet, atque consequatur consequuntur cupiditate eligendi esse eveniet
          fugit illo inventore molestiae, natus necessitatibus, nihil odio saepe
          vero! Doloremque excepturi officia recusandae veritatis.
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          deserunt exercitationem incidunt ipsam labore minima odio sint unde!
          Est necessitatibus nihil recusandae. A ad, asperiores at consectetur
          deleniti distinctio error id illum ipsa molestias nam nemo nesciunt
          nisi obcaecati optio quasi quibusdam, temporibus, tenetur vero.
        </p>
        <blockquote className="mb-16">
          <div className="h-3 text-left text-5xl leading-tight text-amber-500">
            “
          </div>
          <p className="px-5 text-center text-sm font-bold text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident.
          </p>
          <div className="-mt-3 h-3 text-right text-5xl leading-tight text-amber-500">
            ”
          </div>
        </blockquote>
        <div className='mb-10'>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeEx}
          </SyntaxHighlighter>
        </div>
        <SocialSharing />
        <div className="justify-center flex items-center mt-32">
          <button className='w-14'><Favorite color="black" size="large" className='duration-500 transition-all hover:stroke-amber-500'></Favorite></button>
          <span className='ml-3 text-lg font-light'>759</span>
        </div>
        <div className='text-center mt-10 pb-20 border-b-2 border-b-black'>
          <div className='inline-flex items-center'>
            <img className='rounded-full border border-gray-100 w-10 h-10 object-cover mr-4' src="https://picsum.photos/id/870/2000/760" alt=""/>
            <p className='text-sm'>Հեղինակ՝ Գոռ Սարգսյան</p>
          </div>
          <p>May 12, 2019</p>
        </div>
        <section className='my-20'>
          <h2 className='font-bold text-center text-2xl mb-16'>Մեկնաբանություններ(4)</h2>
          <Comments/>
          <h2 className='font-bold text-center text-2xl mb-14'>Թողնել մեկնաբանություն</h2>
          <p className='text-xs text-xs text-gray-500 mb-8'>Ձեր մեյլի հասցեն չի հրապարակվի մեկնաբանություններ բաժնում*</p>
          <form action="">
            <div className='mb-6'>
              <label htmlFor="commentField">Մեկնաբանություն<span className="required" aria-hidden="true">*</span></label>
              <textarea className='w-full mt-3 bg-gray-100 p-5' id="commentField" rows={10} maxLength={65525}></textarea>
            </div>
            <div className='mb-6'>
              <label htmlFor="nameField">Ձեր անունը<span className="required" aria-hidden="true">*</span></label>
              <input type='text' className='w-full mt-3 bg-gray-100 h-16 p-5' id="nameField"></input>
            </div>
            <div className='mb-6'>
              <label htmlFor="emailField">Մեյլի հասցեն<span className="required" aria-hidden="true">*</span></label>
              <input type='email' className='w-full mt-3 bg-gray-100 h-16 p-5' id="emailField"></input>
            </div>
            <button type='submit' className='mt-8 py-3 px-6 border-2 border-black duration-500 hover:bg-gray-100'>Հրապարակել</button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default ArticleDetails
