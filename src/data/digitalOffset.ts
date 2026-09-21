export interface PrintingMethod {
  id: string
  title: string
  description: string
  points: string[]
  icon: string
}

export const printingMethods: PrintingMethod[] = [
  {
    id: 'digital',
    title: 'Digital Printing',
    description: 'For customized and short-run printing.',
    points: ['Fast turnaround', 'Cost-effective for small runs', 'Ideal for personalization & variable data'],
    icon: 'MonitorSmartphone',
  },
  {
    id: 'offset',
    title: 'Offset Printing',
    description: 'For professional high-volume printing.',
    points: ['Consistent color accuracy', 'Efficient at scale', 'Suited to large production runs'],
    icon: 'Factory',
  },
]
