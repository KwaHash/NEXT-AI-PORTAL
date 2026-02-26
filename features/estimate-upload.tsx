'use client'

import { AlertCircle, CheckCircle, FileText, TrendingUp, Upload } from 'lucide-react'
import React, { useState } from 'react'

const EstimateUploadPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [analysisResult, setAnalysisResult] = useState<any>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newFiles = files.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      uploadTime: new Date().toISOString()
    }))
    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const analyzeEstimates = () => {
    if (uploadedFiles.length === 0) return

    setIsAnalyzing(true)
    setTimeout(() => {
      setAnalysisResult({
        totalEstimates: uploadedFiles.length,
        averagePrice: 750000,
        priceRange: { min: 650000, max: 950000 },
        recommendations: [
          { type: 'warning', message: '見積もりB社の材料費が相場より20%高い可能性があります' },
          { type: 'info', message: '工事期間は平均3-4週間です' },
          { type: 'success', message: 'A社の価格が最も競争力があります' }
        ],
        companyComparison: [
          { name: 'A社', total: 650000, materials: 350000, labor: 280000, other: 20000, rating: 'excellent' },
          { name: 'B社', total: 780000, materials: 420000, labor: 330000, other: 30000, rating: 'good' },
          { name: 'C社', total: 850000, materials: 480000, labor: 340000, other: 30000, rating: 'average' }
        ],
        insights: {
          materialsCost: { average: 416666, trend: 'stable' },
          laborCost: { average: 316666, trend: 'increasing' },
          timeline: '3-4週間',
          marketComparison: 'competitive'
        }
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  if (analysisResult) {
    return (
      <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <div className='flex items-center mb-6'>
            <CheckCircle className='w-8 h-8 text-green-500 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>見積書解析結果</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
            <div className='bg-blue-50 rounded-lg p-6'>
              <div className='text-2xl font-bold text-blue-600 mb-2'>
                {analysisResult.totalEstimates}社
              </div>
              <div className='text-sm text-gray-600'>解析対象見積書</div>
            </div>
            <div className='bg-green-50 rounded-lg p-6'>
              <div className='text-2xl font-bold text-green-600 mb-2'>
                ¥{analysisResult.averagePrice.toLocaleString()}
              </div>
              <div className='text-sm text-gray-600'>平均価格</div>
            </div>
            <div className='bg-yellow-50 rounded-lg p-6'>
              <div className='text-2xl font-bold text-yellow-600 mb-2'>
                ¥{analysisResult.priceRange.min.toLocaleString()}
              </div>
              <div className='text-sm text-gray-600'>最安価格</div>
            </div>
            <div className='bg-red-50 rounded-lg p-6'>
              <div className='text-2xl font-bold text-red-600 mb-2'>
                ¥{analysisResult.priceRange.max.toLocaleString()}
              </div>
              <div className='text-sm text-gray-600'>最高価格</div>
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-lg font-semibold mb-4'>AI分析による推奨事項</h3>
            <div className='space-y-3'>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {analysisResult.recommendations.map((rec: any, index: number) => {
                const Icon = rec.type === 'warning' ? AlertCircle : rec.type === 'success' ? CheckCircle : FileText
                const colorClass = rec.type === 'warning' ? 'text-yellow-600 bg-yellow-50' : 
                                 rec.type === 'success' ? 'text-green-600 bg-green-50' : 
                                 'text-blue-600 bg-blue-50'
                return (
                  <div key={index} className={`flex items-start p-4 rounded-lg ${colorClass}`}>
                    <Icon className='w-5 h-5 mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-sm'>{rec.message}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-lg font-semibold mb-4'>会社別比較</h3>
            <div className='overflow-x-auto'>
              <table className='w-full border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>会社</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>総額</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>材料費</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>工事費</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>その他</th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>評価</th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {analysisResult.companyComparison.map((company: any, index: number) => (
                    <tr key={index}>
                      <td className='px-6 py-4 whitespace-nowrap font-medium text-gray-900'>{company.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-gray-900'>¥{company.total.toLocaleString()}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-gray-900'>¥{company.materials.toLocaleString()}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-gray-900'>¥{company.labor.toLocaleString()}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-gray-900'>¥{company.other.toLocaleString()}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          company.rating === 'excellent' ? 'bg-green-100 text-green-800' :
                          company.rating === 'good' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {company.rating === 'excellent' ? '優秀' :
                           company.rating === 'good' ? '良好' : '平均'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 rounded-lg p-6'>
              <h4 className='font-semibold mb-4'>材料費トレンド</h4>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='text-xl font-bold text-gray-900'>
                    ¥{analysisResult.insights.materialsCost.average.toLocaleString()}
                  </div>
                  <div className='text-sm text-gray-600'>平均材料費</div>
                </div>
                <div className='flex items-center text-green-600'>
                  <TrendingUp className='w-5 h-5 mr-1' />
                  <span className='text-sm'>安定</span>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 rounded-lg p-6'>
              <h4 className='font-semibold mb-4'>工事費トレンド</h4>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='text-xl font-bold text-gray-900'>
                    ¥{analysisResult.insights.laborCost.average.toLocaleString()}
                  </div>
                  <div className='text-sm text-gray-600'>平均工事費</div>
                </div>
                <div className='flex items-center text-red-600'>
                  <TrendingUp className='w-5 h-5 mr-1' />
                  <span className='text-sm'>上昇傾向</span>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-8 pt-6 border-t border-gray-200'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => window.location.href = '/comparison'}
                className='flex-1 bg-blue-600 py-4 px-6 rounded hover:bg-blue-700 transition-colors'
              >
                <span className='font-bold text-white'>詳細比較ページへ</span>
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className='flex-1 bg-yellow-500 py-4 px-6 rounded hover:bg-yellow-400 transition-colors'
              >
                <span className='font-bold text-white'>マイページで管理</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
      <div className='bg-white rounded-2xl shadow-lg p-8'>
        <div className='flex items-center mb-6'>
          <Upload className='w-8 h-8 text-blue-600 mr-3' />
          <h2 className='text-2xl font-bold text-gray-900'>見積書アップロード・解析</h2>
        </div>

        <div className='space-y-8'>
          <div className='bg-blue-50 rounded-lg p-6'>
            <h3 className='font-semibold text-blue-900 mb-2'>
              見積書解析サービスについて
            </h3>
            <ul className='text-sm text-blue-800 space-y-1'>
              <li>• 他社の見積書をアップロードして、AIが詳細分析を行います</li>
              <li>• 価格の妥当性、市場相場との比較を自動で実施</li>
              <li>• 複数の見積書を比較して最適な選択をサポート</li>
              <li>• 対応ファイル形式：PDF、JPG、PNG</li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>見積書をアップロード</h3>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center'>
              <Upload className='w-16 h-16 text-gray-400 mx-auto mb-4' />
              <p className='text-gray-600 mb-4'>
                見積書のファイルをここにドラッグ&ドロップするか、
                <br />
                下のボタンからファイルを選択してください
              </p>
              <label className='inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors'>
                <Upload className='w-5 h-5 mr-2' />
                ファイルを選択
                <input
                  type='file'
                  multiple
                  accept='.pdf,.jpg,.jpeg,.png'
                  onChange={handleFileUpload}
                  className='hidden'
                />
              </label>
              <p className='text-xs text-gray-500 mt-2'>
                最大10MBまで、PDF・JPG・PNG形式に対応
              </p>
            </div>
          </div>

          {/* アップロード済みファイル一覧 */}
          {uploadedFiles.length > 0 && (
            <div>
              <h3 className='text-lg font-semibold mb-4'>アップロード済みファイル</h3>
              <div className='space-y-3'>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className='flex items-center p-4 bg-gray-50 rounded-lg'>
                    <FileText className='w-8 h-8 text-blue-600 mr-3' />
                    <div className='flex-1'>
                      <div className='font-medium text-gray-900'>{file.name}</div>
                      <div className='text-sm text-gray-600'>
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                    <div className='text-xs text-gray-500'>
                      {new Date(file.uploadTime).toLocaleString('ja-JP')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 解析オプション */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>解析オプション</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input type='checkbox' className='mr-3' defaultChecked />
                <div>
                  <div className='font-medium'>価格妥当性チェック</div>
                  <div className='text-sm text-gray-600'>市場相場と比較して価格の妥当性を判定</div>
                </div>
              </label>
              <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input type='checkbox' className='mr-3' defaultChecked />
                <div>
                  <div className='font-medium'>工期・品質分析</div>
                  <div className='text-sm text-gray-600'>工事期間と品質基準の妥当性を確認</div>
                </div>
              </label>
              <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input type='checkbox' className='mr-3' defaultChecked />
                <div>
                  <div className='font-medium'>競合他社比較</div>
                  <div className='text-sm text-gray-600'>同業他社の価格帯との比較分析</div>
                </div>
              </label>
              <label className='flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50'>
                <input type='checkbox' className='mr-3' />
                <div>
                  <div className='font-medium'>詳細レポート作成</div>
                  <div className='text-sm text-gray-600'>PDFレポートを生成（有料オプション）</div>
                </div>
              </label>
            </div>
          </div>

          {/* 解析実行ボタン */}
          <div className='text-center'>
            <button
              onClick={analyzeEstimates}
              disabled={uploadedFiles.length === 0 || isAnalyzing}
              className='bg-blue-600 text-white py-4 px-8 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center mx-auto'
            >
              {isAnalyzing ? (
                <div className='flex items-center gap-2'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3'></div>
                  <span className='text-[15px] font-bold'>AI解析中...</span>
                </div>
              ) : (
                <div className='flex items-center gap-2'>
                  <FileText className='w-5 h-5 mr-2' />
                  <span className='text-[15px] font-bold'>見積書解析を開始</span>
                </div>
              )}
            </button>
            <p className='text-sm text-gray-500 mt-2'>
              解析には1-2分程度かかる場合があります
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstimateUploadPage