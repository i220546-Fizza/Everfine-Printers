export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
}

/** HOW IT WORKS */
export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Idea', description: 'Tell us what you need.', icon: 'Lightbulb' },
  { step: '02', title: 'Design', description: 'Prepare or submit your artwork.', icon: 'PenTool' },
  { step: '03', title: 'Proof', description: 'Review your design.', icon: 'Eye' },
  { step: '04', title: 'Print', description: 'Professional printing begins.', icon: 'Printer' },
  { step: '05', title: 'Finish', description: 'Cutting, folding, binding or finishing.', icon: 'Scissors' },
  { step: '06', title: 'Delivery', description: 'Your finished products are ready.', icon: 'Truck' },
]
