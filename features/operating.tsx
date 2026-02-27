'use client'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const CompanyOverviewData: { label: string; value: string }[] = [
	{ label: '会社名', value: '株式会社ユタカホーム' },
	{ label: '設立', value: '2011年（平成23年）9月' },
	{ label: '代表取締役', value: '谷口 豊和' },
	{ label: '本社所在地', value: '〒114-0023　東京都北区滝野川7-35-10アルス立野岡 東棟1F' },
  { label: '東京支社所在地', value: '〒114-0023　東京都北区滝野川7-35-10アルス立野岡 西棟1F' },
	{ label: '電話', value: '0120-546-111' },
	{ label: 'FAX', value: '03-5972-1831' },
	{ label: '従業員数', value: '45名' },
	{ label: '主要取引銀行', value: '千葉興業銀行、みずほ銀行、りそな銀行、三菱東京ＵＦＪ銀行' },
  { label: '加入機構', value: '三井住友海上火災保険株式会社、あいおいニッセイ同和損保' },
  { label: '事業年度', value: '毎年9月1日から翌年8月31日まで' },
  { label: '事業内容', value: '一般住宅建設・ビル・マンショントータルリフォーム' },
]

const OperatingCompanyPage = () => {
  return (
    <div className='w-full xl:max-w-screen-xl mx-auto xl:py-12'>
      <div className='container mx-auto px-4 py-12 max-w-4xl'>
        <h2 className='text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-8'>
          運営会社 <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>会社概要</span>
        </h2>

        <div className='relative rounded-lg border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden'>
          <Table>
            <TableBody>
              {CompanyOverviewData.map((row, index) => (
                <TableRow
                  key={row.label}
                  className={cn('border-b border-dotted border-slate-200 last:border-b-0 hover:bg-slate-100/80', index % 2 === 1 ? 'bg-white' : 'bg-slate-100/50')}
                >
                  <TableCell
                    className='w-[36%] py-4 pl-6 pr-4 text-sm font-bold text-slate-700 whitespace-nowrap border-0'
                  >
                    {row.label}
                  </TableCell>
                  <TableCell className='py-4 pl-4 pr-6 text-sm font-medium text-slate-700 border-0'>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default OperatingCompanyPage