'use client'

import { Calendar, Clock, FileText, Home, MessageCircle, Settings, Star, User } from 'lucide-react'
import { useState } from 'react'

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    {
      id: 1,
      title: 'キッチンリフォーム',
      status: '進行中',
      progress: 65,
      company: '東京リフォーム A社',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      budget: 650000,
      nextMilestone: '配管工事完了'
    },
    {
      id: 2,
      title: 'バスルーム改装',
      status: '見積もり中',
      progress: 20,
      company: '都市部リノベーション B社',
      startDate: '2024-02-01',
      endDate: '2024-03-01',
      budget: 780000,
      nextMilestone: '詳細設計確認'
    },
    {
      id: 3,
      title: 'リビング壁紙張替え',
      status: '完了',
      progress: 100,
      company: 'プレミアムホーム C社',
      startDate: '2023-12-01',
      endDate: '2023-12-15',
      budget: 180000,
      nextMilestone: '完了'
    }
  ]

  const recentMessages = [
    {
      id: 1,
      company: '東京リフォーム A社',
      message: '明日の配管工事について確認事項があります',
      time: '2時間前',
      unread: true
    },
    {
      id: 2,
      company: '都市部リノベーション B社',
      message: '設計図面を送付いたしました',
      time: '1日前',
      unread: false
    },
    {
      id: 3,
      company: 'プレミアムホーム C社',
      message: '工事完了報告書をお送りします',
      time: '3日前',
      unread: false
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: '現地確認',
      date: '2024-01-20',
      time: '14:00',
      company: '東京リフォーム A社',
      type: 'inspection'
    },
    {
      id: 2,
      title: '最終打ち合わせ',
      date: '2024-01-25',
      time: '10:00',
      company: '都市部リノベーション B社',
      type: 'meeting'
    },
    {
      id: 3,
      title: '工事開始',
      date: '2024-02-01',
      time: '09:00',
      company: '都市部リノベーション B社',
      type: 'construction'
    }
  ]

  const tabs = [
    { id: 'overview', label: '概要', icon: Home },
    { id: 'projects', label: 'プロジェクト', icon: FileText },
    { id: 'messages', label: 'メッセージ', icon: MessageCircle },
    { id: 'calendar', label: 'スケジュール', icon: Calendar },
    { id: 'settings', label: '設定', icon: Settings }
  ]

  const renderOverview = () => (
    <div className='space-y-6'>
      {/* 統計カード */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='bg-blue-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <FileText className='w-8 h-8 text-blue-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-blue-600'>3</div>
              <div className='text-sm text-gray-600'>進行中プロジェクト</div>
            </div>
          </div>
        </div>
        <div className='bg-green-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <Star className='w-8 h-8 text-green-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-green-600'>1</div>
              <div className='text-sm text-gray-600'>完了プロジェクト</div>
            </div>
          </div>
        </div>
        <div className='bg-yellow-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <Clock className='w-8 h-8 text-yellow-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-yellow-600'>2</div>
              <div className='text-sm text-gray-600'>今週の予定</div>
            </div>
          </div>
        </div>
        <div className='bg-purple-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <MessageCircle className='w-8 h-8 text-purple-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-purple-600'>1</div>
              <div className='text-sm text-gray-600'>未読メッセージ</div>
            </div>
          </div>
        </div>
      </div>

      {/* 最近のメッセージ */}
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
        <h3 className='font-semibold mb-4'>最近のメッセージ</h3>
        <div className='space-y-3'>
          {recentMessages.slice(0, 3).map((message) => (
            <div key={message.id} className='flex items-start p-3 hover:bg-gray-50 rounded-lg'>
              <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <div className='font-medium text-sm'>{message.company}</div>
                  <div className='text-xs text-gray-500'>{message.time}</div>
                </div>
                <div className='text-sm text-gray-600'>{message.message}</div>
              </div>
              {message.unread && (
                <div className='w-2 h-2 bg-red-500 rounded-full'></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 今後の予定 */}
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
        <h3 className='font-semibold mb-4'>今後の予定</h3>
        <div className='space-y-3'>
          {upcomingEvents.map((event) => (
            <div key={event.id} className='flex items-center p-3 hover:bg-gray-50 rounded-lg'>
              <Calendar className='w-5 h-5 text-blue-600 mr-3' />
              <div className='flex-1'>
                <div className='font-medium text-sm'>{event.title}</div>
                <div className='text-xs text-gray-500'>
                  {event.date} {event.time} - {event.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className='space-y-6'>
      {projects.map((project) => (
        <div key={project.id} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div>
              <h3 className='font-semibold text-lg'>{project.title}</h3>
              <p className='text-sm text-gray-600'>{project.company}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === '完了' ? 'bg-green-100 text-green-800' :
              project.status === '進行中' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
          
          <div className='mb-4'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm text-gray-600'>進捗</span>
              <span className='text-sm font-medium'>{project.progress}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div
                className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
            <div>
              <span className='text-gray-600'>開始日: </span>
              <span>{project.startDate}</span>
            </div>
            <div>
              <span className='text-gray-600'>完了予定: </span>
              <span>{project.endDate}</span>
            </div>
            <div>
              <span className='text-gray-600'>予算: </span>
              <span>¥{project.budget.toLocaleString()}</span>
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-gray-200'>
            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <span className='text-gray-600'>次のマイルストーン: </span>
                <span className='font-medium'>{project.nextMilestone}</span>
              </div>
              <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm'>
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'projects':
        return renderProjects()
      case 'messages':
        return <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>メッセージ機能は開発中です</div>
      case 'calendar':
        return <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>カレンダー機能は開発中です</div>
      case 'settings':
        return <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>設定機能は開発中です</div>
      default:
        return renderOverview()
    }
  }

  return (
    <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
      <div className='flex items-center mb-8'>
        <User className='w-8 h-8 text-blue-600 mr-3' />
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>マイページ</h1>
          <p className='text-gray-600'>田中太郎様のダッシュボード</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* サイドバー */}
        <div className='w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-2'>
          <nav className='flex flex-col gap-2'>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 rounded transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className='w-4 h-4 mr-3' />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* メインコンテンツ */}
        <div className='flex-1'>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default MyPage