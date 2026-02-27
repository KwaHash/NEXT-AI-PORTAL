'use client'

import { AlertCircle, BarChart3, Building, Calendar, DollarSign, FileText, TrendingUp, Users } from 'lucide-react'
import { useState } from 'react'

const BuilderPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    totalProjects: 12,
    activeProjects: 8,
    completedProjects: 4,
    totalRevenue: 15600000,
    monthlyRevenue: 2800000,
    profitMargin: 22.5
  }

  const projects = [
    {
      id: 1,
      client: '田中太郎',
      title: 'キッチンリフォーム',
      type: 'キッチン',
      status: '進行中',
      progress: 65,
      budget: 650000,
      profit: 145000,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      location: '新宿区'
    },
    {
      id: 2,
      client: '佐藤花子',
      title: 'バスルーム改装',
      type: 'バスルーム',
      status: '見積もり中',
      progress: 20,
      budget: 780000,
      profit: 185000,
      startDate: '2024-02-01',
      endDate: '2024-03-01',
      location: '渋谷区'
    },
    {
      id: 3,
      client: '山田次郎',
      title: 'リビング改装',
      type: 'リビング',
      status: '完了',
      progress: 100,
      budget: 920000,
      profit: 210000,
      startDate: '2023-12-01',
      endDate: '2023-12-28',
      location: '港区'
    }
  ]

  const leads = [
    {
      id: 1,
      name: '鈴木一郎',
      phone: '03-1234-5678',
      email: 'suzuki@example.com',
      location: '文京区',
      type: 'キッチン',
      budget: '50-100万円',
      status: '新規',
      priority: 'high',
      lastContact: '2024-01-18'
    },
    {
      id: 2,
      name: '高橋美子',
      phone: '03-2345-6789',
      email: 'takahashi@example.com',
      location: '世田谷区',
      type: 'バスルーム',
      budget: '80-150万円',
      status: '見積もり中',
      priority: 'medium',
      lastContact: '2024-01-17'
    },
    {
      id: 3,
      name: '伊藤正夫',
      phone: '03-3456-7890',
      email: 'ito@example.com',
      location: '杉並区',
      type: '全面改装',
      budget: '200-300万円',
      status: 'フォローアップ',
      priority: 'high',
      lastContact: '2024-01-16'
    }
  ]

  const tabs = [
    { id: 'overview', label: '概要', icon: BarChart3 },
    { id: 'projects', label: 'プロジェクト管理', icon: FileText },
    { id: 'leads', label: 'リード管理', icon: Users },
    { id: 'calendar', label: 'スケジュール', icon: Calendar },
    { id: 'analytics', label: '分析', icon: TrendingUp }
  ]

  const renderOverview = () => (
    <div className='space-y-6'>
      {/* 統計カード */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-blue-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <FileText className='w-8 h-8 text-blue-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-blue-600'>{stats.activeProjects}</div>
              <div className='text-sm text-gray-600'>進行中プロジェクト</div>
            </div>
          </div>
        </div>
        <div className='bg-green-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <DollarSign className='w-8 h-8 text-green-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-green-600'>
                ¥{(stats.monthlyRevenue / 1000000).toFixed(1)}M
              </div>
              <div className='text-sm text-gray-600'>今月の売上</div>
            </div>
          </div>
        </div>
        <div className='bg-yellow-50 rounded-lg p-6'>
          <div className='flex items-center'>
            <TrendingUp className='w-8 h-8 text-yellow-600 mr-3' />
            <div>
              <div className='text-2xl font-bold text-yellow-600'>{stats.profitMargin}%</div>
              <div className='text-sm text-gray-600'>利益率</div>
            </div>
          </div>
        </div>
      </div>

      {/* 最近のプロジェクト */}
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
        <h3 className='font-semibold mb-4'>最近のプロジェクト</h3>
        <div className='space-y-3'>
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className='flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg'>
              <div className='flex-1'>
                <div className='font-medium text-sm'>{project.title}</div>
                <div className='text-xs text-gray-500'>{project.client} - {project.location}</div>
              </div>
              <div className='text-right'>
                <div className='text-sm font-medium'>¥{project.budget.toLocaleString()}</div>
                <div className='text-xs text-gray-500'>
                  利益: ¥{project.profit.toLocaleString()}
                </div>
              </div>
              <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                project.status === '完了' ? 'bg-green-100 text-green-800' :
                project.status === '進行中' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 注目リード */}
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
        <h3 className='font-semibold mb-4'>注目リード</h3>
        <div className='space-y-3'>
          {leads.filter(lead => lead.priority === 'high').map((lead) => (
            <div key={lead.id} className='flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg'>
              <div className='flex-1'>
                <div className='font-medium text-sm'>{lead.name}</div>
                <div className='text-xs text-gray-500'>{lead.type} - {lead.location}</div>
              </div>
              <div className='text-right'>
                <div className='text-sm font-medium'>{lead.budget}</div>
                <div className='text-xs text-gray-500'>最終コンタクト: {lead.lastContact}</div>
              </div>
              <div className='ml-3 flex items-center'>
                <AlertCircle className='w-4 h-4 text-red-500' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>プロジェクト管理</h3>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
          新規プロジェクト追加
        </button>
      </div>
      
      {projects.map((project) => (
        <div key={project.id} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
          <div className='flex items-start justify-between mb-4'>
            <div>
              <h4 className='font-semibold text-lg'>{project.title}</h4>
              <p className='text-sm text-gray-600'>{project.client} - {project.location}</p>
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

          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-sm'>
            <div>
              <span className='text-gray-600'>予算: </span>
              <span className='font-medium'>¥{project.budget.toLocaleString()}</span>
            </div>
            <div>
              <span className='text-gray-600'>予想利益: </span>
              <span className='font-medium text-green-600'>¥{project.profit.toLocaleString()}</span>
            </div>
            <div>
              <span className='text-gray-600'>開始日: </span>
              <span>{project.startDate}</span>
            </div>
            <div>
              <span className='text-gray-600'>完了予定: </span>
              <span>{project.endDate}</span>
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-gray-200 flex justify-end space-x-2'>
            <button className='bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm'>
              編集
            </button>
            <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm'>
              詳細を見る
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  const renderLeads = () => (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>リード管理</h3>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
          新規リード追加
        </button>
      </div>
      
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>顧客</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>タイプ</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>予算</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>状態</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>優先度</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>最終コンタクト</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>アクション</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {leads.map((lead) => (
              <tr key={lead.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='font-medium text-gray-900'>{lead.name}</div>
                  <div className='text-sm text-gray-500'>{lead.location}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{lead.type}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{lead.budget}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    lead.status === '新規' ? 'bg-blue-100 text-blue-800' :
                    lead.status === '見積もり中' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    lead.priority === 'high' ? 'bg-red-100 text-red-800' :
                    lead.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {lead.priority === 'high' ? '高' : lead.priority === 'medium' ? '中' : '低'}
                  </span>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{lead.lastContact}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  <div className='flex space-x-2'>
                    <button className='text-blue-600 hover:text-blue-800'>編集</button>
                    <button className='text-green-600 hover:text-green-800'>連絡</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'projects':
        return renderProjects()
      case 'leads':
        return renderLeads()
      case 'calendar':
        return <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>スケジュール機能は開発中です</div>
      case 'analytics':
        return <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>分析機能は開発中です</div>
      default:
        return renderOverview()
    }
  }

  return (
    <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
      <div className='flex items-center mb-8'>
        <Building className='w-8 h-8 text-blue-600 mr-3' />
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>施工会社ダッシュボード</h1>
          <p className='text-gray-600'>東京リフォーム A社</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* サイドバー */}
        <div className='w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-2'>
          <nav className='space-y-2'>
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

export default BuilderPage