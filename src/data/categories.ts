import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'kisai',
    name: '起債',
    description: '地方債(借入金)の発行に関する事務',
    color: '#2f6f4f',
  },
  {
    id: 'yosan',
    name: '予算関係',
    description: '予算の編成・議決・執行に関する事務',
    color: '#1f5f8f',
  },
  {
    id: 'kessan',
    name: '決算',
    description: '決算の調製・審査・認定に関する事務',
    color: '#8f5f1f',
  },
]

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}
