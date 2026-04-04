export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const financingFaqs: FaqItem[] = [
  {
    question: 'Do you offer financing for roof replacement?',
    answer: [
      'Yes. We work with Service Finance Company and Wisetack to offer payment plans starting around $99/month. Options include 0% promotional APR, fixed rates in the 8–12% range, and terms up to 10 years. No down payment required for qualified applicants.',
    ],
  },
  {
    question: 'What credit score do I need to qualify?',
    answer: [
      "A minimum score of 600 is required. We use a soft credit check to prequalify, which doesn't affect your score. You'll see your options before committing to anything.",
    ],
  },
  {
    question: 'How long does the application process take?',
    answer: [
      'About two minutes. The soft pull prequalification is fast, and approval decisions typically come quickly. We can often get you approved and a project start date scheduled in the same conversation.',
    ],
  },
  {
    question: 'Can I finance a premium roofing system like stone-coated steel or concrete tile?',
    answer: [
      'Yes — and it often makes strong financial sense. A stone-coated steel or Newpoint™ concrete tile roof carries a 50-year to lifetime warranty. Spreading the cost over 10 years means long-term protection in manageable monthly amounts. We have higher approval rates on upgrade projects.',
    ],
  },
  {
    question: 'Is there a prepayment penalty if I pay off early?',
    answer: [
      "No. There's no repayment penalty on any of our financing plans. Pay it off early whenever you're ready.",
    ],
  },
  {
    question: 'Do you offer discounts in addition to financing?',
    answer: [
      'Yes — we offer a veteran discount and a senior/elderly discount. These can be combined with financing. Mention it when you call or when you apply.',
    ],
  },
];
