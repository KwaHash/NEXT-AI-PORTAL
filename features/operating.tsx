'use client'

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const CompanyOverviewData: { label: string; value: string }[] = [
	{ label: '会社名', value: 'XXX株式会社' },
	{ label: '設立', value: '2007年9月18日' },
	{ label: '資本金', value: '10,000,000円' },
	{ label: '代表取締役', value: '村上 竜太' },
	{ label: '所在地', value: '〒064-0912 札幌市中央区南12条西7丁目1-2' },
	{ label: '電話', value: '011-530-6633' },
	{ label: 'FAX', value: '011-530-6665' },
	{ label: '事業内容', value: '不動産関連情報サービス事業' },
	{ label: '従業員数', value: '10名' },
	{ label: '取引銀行', value: '北海道銀行' },
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