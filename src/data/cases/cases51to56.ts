import { CaseScenario } from '../types';

export const cases51to56: CaseScenario[] = [
  {
    id: 'case-51',
    caseNumber: 51,
    title: 'Delta Technologies: Review of Amortisation Method and Useful Life of Intangible Assets',
    applicableStandards: ['AS 26 (Intangible Assets)'],
    scenarioParagraphs: [
      'Delta Technologies acquired a specialized proprietary patent for ` 50 lakhs on 1st April 2021 with an estimated useful life of 10 years amortised on straight-line basis.',
      'On 1st April 2024, due to sudden technological innovation in AI, the company assessed that the remaining economic benefits will be exhausted over the next 2 years only.',
    ],
    questions: [
      {
        id: 'case51-q1',
        questionNumber: 1,
        questionText: 'How should the change in useful life of the patent be treated under AS 26?',
        options: [
          { key: 'a', text: 'Retrospectively adjust prior years\' amortisation through reserves' },
          { key: 'b', text: 'Accounted as a change in accounting estimate prospectively over the revised remaining useful life (2 years)' },
          { key: 'c', text: 'Write off the entire remaining book value immediately as an extraordinary item' },
          { key: 'd', text: 'Continue amortisation over the original 10-year period' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning: 'Under AS 26, the amortisation period and method should be reviewed at each financial year end. Any change is treated as a change in accounting estimate under AS 5 and applied prospectively.',
      },
      {
        id: 'case51-q2',
        questionNumber: 2,
        questionText: 'What is the revised annual amortisation charge for the year 2024-25?',
        options: [
          { key: 'a', text: '` 5.0 lakhs' },
          { key: 'b', text: '` 17.5 lakhs' },
          { key: 'c', text: '` 25.0 lakhs' },
          { key: 'd', text: '` 10.0 lakhs' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning: 'Cost = ` 50L. Amortisation for 3 years (2021-24) = 3 × ` 5L = ` 15L. Carrying value as on 1st April 2024 = ` 35L. Revised amortisation over 2 years = ` 35L ÷ 2 = ` 17.5 lakhs per year.',
      },
    ],
  },
  {
    id: 'case-52',
    caseNumber: 52,
    title: 'Imperial Capital: Buy-Back Financing & Free Reserves Utilization',
    applicableStandards: ['Section 68 of Companies Act, 2013'],
    scenarioParagraphs: [
      'Imperial Capital has paid-up share capital of ` 100 lakhs (` 10 each), Securities Premium ` 40 lakhs, General Reserve ` 60 lakhs, and Revaluation Reserve ` 25 lakhs.',
      'The company plans to buy back 2,00,000 equity shares at ` 30 per share.',
    ],
    questions: [
      {
        id: 'case52-q1',
        questionNumber: 1,
        questionText: 'Which of the following reserves CANNOT be used for financing the buy-back of shares?',
        options: [
          { key: 'a', text: 'Securities Premium Account' },
          { key: 'b', text: 'General Reserve' },
          { key: 'c', text: 'Revaluation Reserve' },
          { key: 'd', text: 'Profit and Loss credit balance' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'Companies Act 2013',
        reasoning: 'Under Section 68 of Companies Act 2013, buy-back can be financed from free reserves, securities premium, or proceeds of any fresh issue of other shares, but never from Revaluation Reserve or unrealized capital profits.',
      },
      {
        id: 'case52-q2',
        questionNumber: 2,
        questionText: 'What amount must be transferred to Capital Redemption Reserve (CRR) upon this buy-back?',
        options: [
          { key: 'a', text: '` 60 lakhs (Total buyback consideration)' },
          { key: 'b', text: '` 20 lakhs (Nominal value of shares bought back)' },
          { key: 'c', text: '` 40 lakhs' },
          { key: 'd', text: 'Nil' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'Companies Act 2013',
        reasoning: 'Under Section 69, when shares are bought back out of free reserves or securities premium, an amount equal to the nominal value of shares so bought back (2,00,000 × ` 10 = ` 20 lakhs) must be transferred to CRR.',
      },
    ],
  },
  {
    id: 'case-53',
    caseNumber: 53,
    title: 'Fortune Agro: EPCG Duty Concession & Export Obligation Grant Accounting',
    applicableStandards: ['AS 12 (Accounting for Government Grants)'],
    scenarioParagraphs: [
      'Fortune Agro imported processing machinery under the Export Promotion Capital Goods (EPCG) Scheme. The customs duty saved was ` 30 lakhs, conditional on fulfilling export commitments equal to 6 times the duty saved within 6 years.',
    ],
    questions: [
      {
        id: 'case53-q1',
        questionNumber: 1,
        questionText: 'How should the customs duty saved under the EPCG scheme be accounted for under AS 12?',
        options: [
          { key: 'a', text: 'Credited directly to general reserves upon import' },
          { key: 'b', text: 'Treated as a government grant related to assets and recognized in P&L in proportion to fulfillment of export obligations' },
          { key: 'c', text: 'Ignored until all export obligations are fully completed' },
          { key: 'd', text: 'Deducted from future sales revenues' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 12',
        reasoning: 'The duty saved represents a government grant with attached export conditions. It is deferred and recognized in P&L systematically as export obligations are satisfied.',
      },
    ],
  },
  {
    id: 'case-54',
    caseNumber: 54,
    title: 'Phoenix Refineries: Determining Discount Rate for Value in Use',
    applicableStandards: ['AS 28 (Impairment of Assets)'],
    scenarioParagraphs: [
      'Phoenix Refineries is estimating the Value in Use of its coastal refinery unit. Management is selecting the appropriate discount rate to apply to projected future cash flows.',
    ],
    questions: [
      {
        id: 'case54-q1',
        questionNumber: 1,
        questionText: 'Which discount rate should be used under AS 28 when calculating Value in Use?',
        options: [
          { key: 'a', text: 'Post-tax weighted average cost of capital' },
          { key: 'b', text: 'Pre-tax rate that reflects current market assessments of the time value of money and the risks specific to the asset' },
          { key: 'c', text: 'Risk-free sovereign bond rate without risk adjustment' },
          { key: 'd', text: 'Prime lending rate of the company\'s lead commercial bank' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 28',
        reasoning: 'As per AS 28, the discount rate should be a pre-tax rate that reflects current market assessments of the time value of money and risks specific to the asset for which future cash flow estimates have not been adjusted.',
      },
    ],
  },
  {
    id: 'case-55',
    caseNumber: 55,
    title: 'Matrix Software: Multi-Element Software License and Post-Delivery Support Revenue',
    applicableStandards: ['AS 9 (Revenue Recognition)'],
    scenarioParagraphs: [
      'Matrix Software entered into a contract to deliver enterprise ERP software for ` 120 lakhs. The contract includes upfront perpetual software license delivery and 2 years of post-delivery technical support and updates. Standalone selling prices are: License ` 100 lakhs, Support ` 40 lakhs (Total ` 140 lakhs).',
    ],
    questions: [
      {
        id: 'case55-q1',
        questionNumber: 1,
        questionText: 'How should the total contract price of ` 120 lakhs be allocated and recognized between the license and support services?',
        options: [
          { key: 'a', text: 'Recognize full ` 120 lakhs upfront upon license delivery' },
          { key: 'b', text: 'Allocate contract consideration proportionately based on relative standalone selling prices: License ` 85.71 lakhs upon delivery, Support ` 34.29 lakhs over 2 years' },
          { key: 'c', text: 'Defer full ` 120 lakhs until completion of 2-year support' },
          { key: 'd', text: 'Recognize 50% in Year 1 and 50% in Year 2' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 9',
        reasoning: 'In multi-element arrangements, the total fee is allocated to identifiable components on the basis of relative fair values/standalone selling prices. License fee is recognized upon delivery and support revenue straight-lined over service period.',
      },
    ],
  },
  {
    id: 'case-56',
    caseNumber: 56,
    title: 'Bharat Heavy Engineering: Provision for Restructuring and Plant Relocation',
    applicableStandards: ['AS 29 (Provisions, Contingent Liabilities and Contingent Assets)'],
    scenarioParagraphs: [
      'Bharat Heavy Engineering announced a detailed formal plan on 15th February 2025 to close its casting foundry and relocate assembly operations. Planned expenditures include:\n• Employee redundancy and severance payments: ` 80 lakhs\n• Retraining remaining staff for new operations: ` 25 lakhs\n• Relocation and moving costs of machinery: ` 35 lakhs\n• Penalty for terminating lease of foundry premises: ` 20 lakhs',
    ],
    questions: [
      {
        id: 'case56-q1',
        questionNumber: 1,
        questionText: 'What total amount should be recognized as a restructuring provision under AS 29 as on 31st March 2025?',
        options: [
          { key: 'a', text: '` 160 lakhs (all expenditures)' },
          { key: 'b', text: '` 100 lakhs (severance ` 80L + lease termination penalty ` 20L)' },
          { key: 'c', text: '` 80 lakhs only' },
          { key: 'd', text: 'Nil, until actual payments are disbursed' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 29',
        reasoning: 'Under AS 29, a restructuring provision includes only direct expenditures arising from restructuring (severance ` 80L and lease termination ` 20L = ` 100 lakhs). Costs associated with ongoing activities such as retraining (` 25L) or relocation (` 35L) cannot be provided for.',
      },
    ],
  },
];
