'use client'

import { BarChart3, Clock, MapPin, MessageCircle, Phone, Shield, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ComparisonResultPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const [showChat, setShowChat] = useState<string | null>(null)

  const companies = [
    {
      id: 'company-a',
      name: '東京リフォーム A社',
      rating: 4.8,
      totalCost: 650000,
      breakdown: {
        materials: 350000,
        labor: 280000,
        permits: 20000
      },
      timeline: '3週間',
      warranty: '5年',
      location: '新宿区',
      distance: '1.2km',
      phone: '03-1234-5678',
      features: ['無料設計相談', '24時間アフターサポート', 'エコ素材使用'],
      pros: ['価格が最も競争力がある', '実績豊富', '近隣での施工多数'],
      cons: ['予約が取りにくい場合がある'],
      portfolio: [
        'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 'company-b',
      name: '都市部リノベーション B社',
      rating: 4.6,
      totalCost: 780000,
      breakdown: {
        materials: 420000,
        labor: 330000,
        permits: 30000
      },
      timeline: '4週間',
      warranty: '7年',
      location: '渋谷区',
      distance: '2.5km',
      phone: '03-2345-6789',
      features: ['デザイン重視', '3Dシミュレーション', 'IoT対応'],
      pros: ['デザイン性が高い', '最新技術導入', '保証期間が長い'],
      cons: ['価格がやや高め', '工期が長い'],
      portfolio: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 'company-c',
      name: 'プレミアムホーム C社',
      rating: 4.4,
      totalCost: 850000,
      breakdown: {
        materials: 480000,
        labor: 340000,
        permits: 30000
      },
      timeline: '3週間',
      warranty: '10年',
      location: '港区',
      distance: '3.8km',
      phone: '03-3456-7890',
      features: ['高級素材使用', '専属デザイナー', 'VIP対応'],
      pros: ['最高品質の材料', '専属デザイナー付き', '手厚いアフターサービス'],
      cons: ['価格が最も高い', 'スケジュール調整が必要'],
      portfolio: [
        'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CompanyCard = ({ company, isSelected, onSelect }: any) => (
    <div
      className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer ${
        isSelected ? 'border-blue-600 shadow-md' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(company.id)}
    >
      <div className='p-6'>
        <div className='flex items-start justify-between mb-4'>
          <div>
            <h3 className='font-semibold text-lg text-gray-900'>{company.name}</h3>
            <div className='flex items-center mt-1'>
              <Star className='w-4 h-4 text-yellow-500 mr-1' />
              <span className='text-sm text-gray-600'>{company.rating}</span>
              <span className='text-sm text-gray-500 ml-2'>
                <MapPin className='w-3 h-3 inline mr-1' />
                {company.location} ({company.distance})
              </span>
            </div>
          </div>
          <div className='text-right'>
            <div className='text-2xl font-bold text-gray-900'>
              ¥{company.totalCost.toLocaleString()}
            </div>
            <div className='text-sm text-gray-600'>税込み総額</div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 mb-4'>
          <div className='text-center'>
            <div className='text-sm text-gray-600'>材料費</div>
            <div className='font-semibold'>¥{company.breakdown.materials.toLocaleString()}</div>
          </div>
          <div className='text-center'>
            <div className='text-sm text-gray-600'>工事費</div>
            <div className='font-semibold'>¥{company.breakdown.labor.toLocaleString()}</div>
          </div>
          <div className='text-center'>
            <div className='text-sm text-gray-600'>諸経費</div>
            <div className='font-semibold'>¥{company.breakdown.permits.toLocaleString()}</div>
          </div>
        </div>

        <div className='flex items-center justify-between text-sm text-gray-600 mb-4'>
          <div className='flex items-center'>
            <Clock className='w-4 h-4 mr-1' />
            工期: {company.timeline}
          </div>
          <div className='flex items-center'>
            <Shield className='w-4 h-4 mr-1' />
            保証: {company.warranty}
          </div>
        </div>

        <div className='flex flex-wrap gap-2 mb-4'>
          {company.features.map((feature: string, index: number) => (
            <span key={index} className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'>
              {feature}
            </span>
          ))}
        </div>

        <div className='flex gap-2'>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setShowChat(company.id)
            }}
            className='flex-1 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors text-sm flex items-center justify-center'
          >
            <MessageCircle className='w-4 h-4 mr-1' />
            <span className='text-sm font-bold'>チャット</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(`tel:${company.phone}`)
            }}
            className='flex-1 bg-yellow-500 text-white p-3 rounded hover:bg-yellow-400 transition-colors text-sm flex items-center justify-center'
          >
            <Phone className='w-4 h-4 mr-1' />
            <span className='text-sm font-bold'>電話</span>
          </button>
        </div>
      </div>
    </div>
  )

  const selectedCompanyData = companies.find(c => c.id === selectedCompany)

  return (
    <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
      <div className='mb-8'>
        <div className='flex items-center mb-4'>
          <BarChart3 className='w-8 h-8 text-blue-600 mr-3' />
          <h2 className='text-2xl font-bold text-gray-900'>見積もり比較結果</h2>
        </div>
        <p className='text-gray-600'>
          お客様の条件に合った3社の見積もりを比較しました。詳細を確認して最適な会社を選択してください。
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* 会社一覧 */}
        <div className='lg:col-span-2 space-y-4'>
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              isSelected={selectedCompany === company.id}
              onSelect={setSelectedCompany}
            />
          ))}
        </div>

        {/* 詳細情報 */}
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8'>
            {selectedCompanyData ? (
              <div>
                <h3 className='font-semibold text-lg mb-4'>
                  {selectedCompanyData.name}
                </h3>
                
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>メリット</h4>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      {selectedCompanyData.pros.map((pro, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='text-green-500 mr-2'>•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>注意点</h4>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      {selectedCompanyData.cons.map((con, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='text-yellow-500 mr-2'>•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='font-medium text-gray-900 mb-2'>施工実績</h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {selectedCompanyData.portfolio.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`施工実績 ${index + 1}`}
                          width={800}
                          height={800}
                          className='w-full h-20 object-cover rounded'
                          priority
                        />
                      ))}
                    </div>
                  </div>

                  <div className='pt-4'>
                    <button className='w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors'>
                      この会社に決定
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='text-center text-gray-500'>
                会社を選択してください
              </div>
            )}
          </div>
        </div>
      </div>

      {/* チャットモーダル */}
      {showChat && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden'>
            <div className='p-4 border-b border-gray-200'>
              <div className='flex items-center justify-between'>
                <h3 className='font-semibold'>
                  {companies.find(c => c.id === showChat)?.name}
                </h3>
                <button
                  onClick={() => setShowChat(null)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  ×
                </button>
              </div>
            </div>
            <div className='p-4 h-64 overflow-y-auto'>
              <div className='space-y-3'>
                <div className='bg-gray-100 rounded-lg p-3'>
                  <p className='text-sm'>
                    こんにちは！見積もりについてご質問がございましたら、お気軽にお聞かせください。
                  </p>
                </div>
                <div className='bg-blue-100 rounded-lg p-3 ml-8'>
                  <p className='text-sm'>
                    工事開始時期について相談したいです。
                  </p>
                </div>
                <div className='bg-gray-100 rounded-lg p-3'>
                  <p className='text-sm'>
                    承知いたしました。現在のスケジュールでは最短で来月から開始可能です。詳しい日程についてお打ち合わせさせていただけますでしょうか？
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 border-t border-gray-200'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  placeholder='メッセージを入力...'
                  className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                  送信
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComparisonResultPage