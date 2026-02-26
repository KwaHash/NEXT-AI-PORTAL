import { benefits, faqs, processSteps } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { BsLampFill } from 'react-icons/bs'
import { FaArrowRight, FaRegChartBar } from 'react-icons/fa'
import { FcHome } from 'react-icons/fc'
import { FiCheckCircle, FiHelpCircle, FiUploadCloud } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { MdOutlinePalette } from 'react-icons/md'
import { PiCloudWarningFill } from 'react-icons/pi'

const MainHomePage = () => {
  return (
    <div className='w-full grow bg-white'>
      <section className='relative h-auto xl:h-[calc(100vh-80px)] bg-gradient-to-br bg-blue-700 text-white py-16 overflow-hidden'>
        <div className='absolute inset-0 opacity-10 animate-pulse'></div>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        
        <div className='w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24 relative'>
          <div className='flex flex-col xl:flex-row gap-12 items-center'>
            <div className='w-full xl:w-1/2'>
              <div className='inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg'>
                <PiCloudWarningFill className='w-6 h-6 mr-3 text-yellow-300 animate-bounce' />
                <span className='text-base'>ハウスメーカー経由だと2倍以上の費用に！</span>
              </div>
              
              <h1 className='text-4xl md:text-5xl font-black my-10 leading-tight'>
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-5xl md:text-6xl mb-2'>適正価格で</span>
                <span className='block drop-shadow-lg'>リフォームしませんか？</span>
              </h1>
              
              <div className='bg-white/10 backdrop-blur-md rounded-lg p-8 mb-10 border border-none shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <p className='flex items-center gap-3 text-xl font-bold text-yellow-300 mb-6'>
                  <FcHome className='w-7 h-7' />
                  <span>あなたはこんなお悩みありませんか？</span>
                </p>
                <ul className='flex flex-col gap-3'>
                  <li className='flex items-start transform hover:translate-x-1 transition-transform duration-300'>
                    <FiCheckCircle className='w-5 h-5 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-medium text-base'>リフォームの適正価格が分からない</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-1 transition-transform duration-300'>
                    <FiCheckCircle className='w-5 h-5 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-medium text-base'>信頼できる業者の見つけ方が分からない</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-1 transition-transform duration-300'>
                    <FiCheckCircle className='w-5 h-5 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-medium text-base'>ハウスメーカーの見積もりが高すぎる</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-1 transition-transform duration-300'>
                    <FiCheckCircle className='w-5 h-5 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-medium text-base'>複数社の比較が面倒で時間がかかる</span>
                  </li>
                </ul>
              </div>
              
              <p className='text-xl mb-10 text-blue-50 font-bold leading-relaxed'>
                <span className='text-yellow-400'>今すぐ</span>私たちの
                <span className='text-yellow-400'>「適正お見積もり診断」</span>
                を受けて、<br className='hidden xl:block' />リフォーム予算をスマートに管理しましょう！
              </p>
              
              <div className='flex flex-col sm:flex-row justify-center gap-3'>
                <Link href='/ai-simulation'
                  className='flex flex-1 items-center justify-center p-5 bg-yellow-400 rounded hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
                >
                  <span className='text-base font-semibold'>今すぐ適正お見積もり診断を受ける</span>
                </Link>
                <Link href='/color-simulation'
                  className='flex flex-1 items-center justify-center p-5 border-2 border-white rounded hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300'
                >
                  <span className='text-base font-semibold'>カラーシミュレーション</span>
                </Link>
              </div>
            </div>
            <div className='w-full xl:w-1/2 bg-white/10 rounded-lg p-8'>
                <div className='bg-white rounded p-8 shadow-2xl'>
                  <div className='flex items-center mb-8'>
                    <div className='w-16 h-16 bg-gradient-to-br bg-blue-600 rounded flex items-center justify-center shadow-lg'>
                      <HiOutlineCalculator className='w-12 h-12 text-white' />
                    </div>
                    <div className='ml-5'>
                      <h3 className='font-black text-gray-900 text-2xl'>AI概算</h3>
                      <p className='text-base font-medium text-gray-600'>キッチンリフォーム</p>
                    </div>
                  </div>
                  <div className='space-y-4 text-gray-900'>
                    <div className='flex items-center font-bold justify-between text-lg'>
                      <span>材料費</span>
                      <span>¥450,000</span>
                    </div>
                    <div className='flex items-center font-bold justify-between text-lg'>
                      <span>工事費</span>
                      <span>¥380,000</span>
                    </div>
                    <div className='border-t-2 pt-4 flex justify-between text-xl font-black'>
                      <span>合計</span>
                      <span className='text-blue-600'>¥830,000</span>
                    </div>
                    <div className='bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl mt-6'>
                      <p className='flex gap-3 text-base text-red-700 font-bold mb-2'>
                        <BsLampFill className='w-6 h-6 text-red-500' />
                        <span>ハウスメーカー経由なら約160万円</span>
                      </p>
                      <p className='font-black text-red-800 text-xl'>約77万円もお得！</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'>
        <div className='w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight'>
              <span className='bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent'>たった4ステップ</span>で
              <br className='md:hidden' />
              <span className='relative'>適正価格を診断</span>
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              面倒な見積もりプロセスを、<span className='font-bold text-blue-600'>最新のAI技術</span>で劇的に効率化。
              <br />
              わずか<span className='font-black'>3分</span>で、あなたの理想のリフォームの適正価格が分かります。
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12'>
            {processSteps.map((step, index) => {
              const Icon = step.icon as React.ElementType
              return (
                <div key={index} className='relative group'>
                  <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-none h-[320px] flex flex-col justify-center items-center p-6'>
                    <Icon className='w-12 h-12 mb-6' />
                    <div className='w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md'>
                      <span className='text-white font-black text-lg'>{step.step}</span>
                    </div>
                    <h3 className='font-bold text-lg text-gray-900 mb-3'>{step.title}</h3>
                    <p className='text-center font-medium text-sm'>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className='hidden xl:block absolute top-1/2 -right-10 transform -translate-y-1/2'>
                      <FaArrowRight className='w-8 h-8 text-blue-400 animate-pulse' />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className='text-center mt-16'>
            <Link href='/ai-simulation'
              className='inline-flex items-center px-6 sm:px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xl rounded hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1'
            >
              <HiOutlineCalculator className='w-7 h-7 mr-4 shrink-0' />
              <span>今すぐ適正お見積もり診断を開始</span>
              <FaArrowRight className='ml-4 w-5 h-5 shrink-0' />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white'>
        <div className='w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight'>
              <span className='relative inline-block'>AIの力で、リフォームがもっと身近に</span>
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              従来の煩雑な見積もりプロセスを、<span className='font-bold text-blue-600'>最新のAI技術</span>で効率化。
              <br />
              東京都内のリフォームに特化した<span className='font-bold'>4つの便利な機能</span>をご提供します。
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12'>
            <Link href='/ai-simulation'
              className='relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-[320px] p-6'
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-14 h-14 bg-blue-500 rounded flex items-center justify-center mb-6 shadow-lg'>
                  <HiOutlineCalculator className='w-8 h-8 text-white' />
                </div>
                <h3 className='font-bold text-lg text-gray-900 mb-3'>AI概算シミュレーション</h3>
                <p className='text-gray-600 text-center font-medium text-sm mb-6'>写真をアップロードするだけで、AIが瞬時にリフォーム費用を算出します。</p>
                <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
                  <span className='text-base'>詳しく見る</span>
                  <FaArrowRight className='ml-2 w-4 h-4 shrink-0' />
                </div>
              </div>
            </Link>
            <Link href='/color-simulation'
              className='relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-[320px] p-6'
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-14 h-14 bg-yellow-500 rounded flex items-center justify-center mb-6 shadow-lg'>
                  <MdOutlinePalette className='w-8 h-8 text-white' />
                </div>
                <h3 className='font-bold text-lg text-gray-900 mb-3'>カラーシミュレーション</h3>
                <p className='text-gray-600 text-center font-medium text-sm mb-6'>実際の写真に色を合成して、リフォーム後のイメージを確認できます。</p>
                <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
                  <span className='text-base'>詳しく見る</span>
                  <FaArrowRight className='ml-2 w-4 h-4 shrink-0' />
                </div>
              </div>
            </Link>
            <Link href='/estimate-upload'
              className='relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-[320px] p-6'
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-14 h-14 bg-green-500 rounded flex items-center justify-center mb-6 shadow-lg'>
                  <FiUploadCloud className='w-8 h-8 text-white' />
                </div>
                <h3 className='font-bold text-lg text-gray-900 mb-3'>見積書解析</h3>
                <p className='text-gray-600 text-center font-medium text-sm mb-6'>他社の見積書をアップロードして、詳細な価格比較と分析を行います。</p>
                <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
                  <span className='text-base'>詳しく見る</span>
                  <FaArrowRight className='ml-2 w-4 h-4 shrink-0' />
                </div>
              </div>
            </Link>
            <Link href='/comparison'
              className='relative group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-[320px] p-6'
            >
              <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-14 h-14 bg-purple-500 rounded flex items-center justify-center mb-6 shadow-lg'>
                  <FaRegChartBar className='w-8 h-8 text-white' />
                </div>
                <h3 className='font-bold text-lg text-gray-900 mb-3'>価格比較</h3>
                <p className='text-gray-600 text-center font-medium text-sm mb-6'>複数の施工会社の見積もりを一覧で比較検討できます。</p>
                <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
                  <span className='text-base'>詳しく見る</span>
                  <FaArrowRight className='ml-2 w-4 h-4 shrink-0' />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-24 bg-gray-50'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>
              なぜゆたかホームが選ばれるのか
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              30年の実績と最新技術で、お客様の住まいづくりをサポート
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 xl:gap-12'>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Icon className='w-9 h-9 text-white' />
                  </div>
                  <h3 className='font-bold text-gray-900 mb-2 text-xl'>{benefit.title}</h3>
                  <p className='text-gray-600'>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'></div>
        <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 relative'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              よくあるご質問
            </h2>
            <p className='text-xl text-gray-600'>
              お客様からよくいただくご質問にお答えします
            </p>
          </div>
          
          <div className='space-y-6'>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
              >
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg'>
                      <FiHelpCircle className='w-6 h-6 text-white' />
                    </div>
                  </div>
                  <div className='ml-6'>
                    <h3 className='font-bold text-gray-900 mb-3 text-lg'>{faq.question}</h3>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 overflow-hidden'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            あなたの理想のリフォームを適正価格で実現しませんか？
          </h2>
          <p className='text-lg mb-8 text-blue-100 leading-relaxed'>
            まずは無料のAI概算シミュレーションから始めてみましょう。
            <br />
            <span className='font-bold text-yellow-300'>わずか3分で適正価格が分かります！</span>
          </p>
          <div className='w-full max-w-3xl mx-auto flex flex-col lg:flex-row gap-3 justify-center items-center'>
            <Link href='/ai-simulation'
              className='w-full flex flex-1 items-center justify-center p-5 bg-yellow-400 rounded hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
            >
              <span className='text-base font-semibold'>今すぐ適正お見積もり診断を受ける</span>
            </Link>
            <Link
              href='/my-page'
              className='w-full flex flex-1 items-center justify-center p-5 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
            >
              マイページで管理
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainHomePage