import { CaseScenario } from '../types';

export const cases41to50: CaseScenario[] = [
  {
    id: 'case-41',
    caseNumber: 41,
    title: 'Synergy Steels Ltd.: Unrealized Intra-Group Profit Elimination in Consolidation',
    applicableStandards: ['AS 21 (Consolidated Financial Statements)'],
    scenarioParagraphs: [
      'Synergy Steels Ltd. holds 80% equity in Ferro Alloys Ltd. During 2024-25, Synergy sold raw materials costing ` 50 lakhs to Ferro Alloys at an invoice price of ` 65 lakhs.',
      'At 31st March 2025, one-third of these goods remained unsold in the inventory of Ferro Alloys Ltd.',
    ],
    questions: [
      {
        id: 'case41-q1',
        questionNumber: 1,
        questionText: 'What is the amount of unrealized profit to be eliminated from consolidated financial statements?',
        options: [
          { key: 'a', text: '` 15.0 lakhs' },
          { key: 'b', text: '` 5.0 lakhs' },
          { key: 'c', text: '` 4.0 lakhs' },
          { key: 'd', text: '` 12.0 lakhs' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 21',
        reasoning: 'Total profit = ` 65L - ` 50L = ` 15 lakhs. Unsold inventory portion = 1/3. Unrealized profit = 1/3 × ` 15 lakhs = ` 5.0 lakhs eliminated in full against parent profit.',
      },
    ],
  },
  {
    id: 'case-42',
    caseNumber: 42,
    title: 'Quantum Biotech: Government Grants for Research Laboratory',
    applicableStandards: ['AS 12 (Accounting for Government Grants)'],
    scenarioParagraphs: [
      'Quantum Biotech received a grant of ` 1 crore from the Department of Biotechnology towards 50% cost of specialised lab equipment costing ` 2 crores. Useful life of equipment is 5 years with nil salvage value.',
    ],
    questions: [
      {
        id: 'case42-q1',
        questionNumber: 1,
        questionText: 'If the company presents the grant as deferred income, what is the annual credit to Profit & Loss?',
        options: [
          { key: 'a', text: '` 40 lakhs' },
          { key: 'b', text: '` 20 lakhs' },
          { key: 'c', text: '` 10 lakhs' },
          { key: 'd', text: '` 50 lakhs' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 12',
        reasoning: 'Deferred grant income of ` 1 crore is recognized in P&L over the 5-year useful life on a systematic basis: ` 100 lakhs ÷ 5 = ` 20 lakhs per annum.',
      },
    ],
  },
  {
    id: 'case-43',
    caseNumber: 43,
    title: 'Paramount Infrastructure: Contract Variations & Incentive Payments',
    applicableStandards: ['AS 7 (Construction Contracts)'],
    scenarioParagraphs: [
      'Paramount Infrastructure is executing a bridge contract. The original contract price is ` 100 crores. In Year 2, client approved variations of ` 10 crores and an early completion incentive of ` 5 crores became highly probable of being achieved.',
    ],
    questions: [
      {
        id: 'case43-q1',
        questionNumber: 1,
        questionText: 'Can the incentive payment of ` 5 crores be included in contract revenue under AS 7?',
        options: [
          { key: 'a', text: 'No, incentives are never recognized until cash is received' },
          { key: 'b', text: 'Yes, when the contract is sufficiently advanced and achievement is probable and reliably measurable' },
          { key: 'c', text: 'Only after the bridge is opened to public' },
          { key: 'd', text: 'Credited directly to Capital Reserve' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 7',
        reasoning: 'Incentive payments are included in contract revenue when the contract is sufficiently advanced that it is probable that specified performance standards will be met and the amount can be measured reliably.',
      },
    ],
  },
  {
    id: 'case-44',
    caseNumber: 44,
    title: 'Crest Logistics: Reclassification of Investments from Current to Long-Term',
    applicableStandards: ['AS 13 (Accounting for Investments)'],
    scenarioParagraphs: [
      'Crest Logistics holds current investments in shares purchased at ` 12,00,000. On 31st March 2025, the management decided to retain them as long-term strategic investments. The fair market value on the date of transfer is ` 9,50,000.',
    ],
    questions: [
      {
        id: 'case44-q1',
        questionNumber: 1,
        questionText: 'At what value should the investment be transferred and how is the difference accounted for under AS 13?',
        options: [
          { key: 'a', text: 'Transferred at cost ` 12,00,000 without any P&L impact' },
          { key: 'b', text: 'Transferred at lower of cost and fair value (` 9,50,000); difference of ` 2,50,000 charged to P&L' },
          { key: 'c', text: 'Transferred at ` 9,50,000; difference debited to Capital Reserve' },
          { key: 'd', text: 'Transferred at ` 12,00,000; difference credited to Revaluation Reserve' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 13',
        reasoning: 'Where current investments are reclassified to long-term, transfers are made at lower of cost and fair value at date of transfer, and the loss is charged to P&L.',
      },
    ],
  },
  {
    id: 'case-45',
    caseNumber: 45,
    title: 'Metro Retailers: Presentation of Discontinuing Operations in Financial Statements',
    applicableStandards: ['AS 24 (Discontinuing Operations)'],
    scenarioParagraphs: [
      'Metro Retailers resolved to discontinue its Electronics Division on 15th January 2025. The division had revenue of ` 400 lakhs, expenses of ` 450 lakhs, and tax benefit of ` 15 lakhs for the year ended 31st March 2025.',
    ],
    questions: [
      {
        id: 'case45-q1',
        questionNumber: 1,
        questionText: 'How should the operating results of the discontinuing operation be presented in the Statement of Profit and Loss?',
        options: [
          { key: 'a', text: 'Merged completely with continuing operations without disclosure' },
          { key: 'b', text: 'Separately disclosed on the face or in the notes showing pre-tax profit/loss, tax expense, and net profit/loss' },
          { key: 'c', text: 'Only in the Directors\' Report' },
          { key: 'd', text: 'As an extraordinary item' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 24',
        reasoning: 'AS 24 requires separate disclosure of the revenue, expenses, pre-tax profit/loss attributable to discontinuing operations, and the related tax expense.',
      },
    ],
  },
  {
    id: 'case-46',
    caseNumber: 46,
    title: 'Orion Manufacturing: Actuarial Assumptions & Gratuity Valuation',
    applicableStandards: ['AS 15 (Employee Benefits)'],
    scenarioParagraphs: [
      'Orion Manufacturing got its gratuity liability evaluated by an actuary. Present value of Defined Benefit Obligation was ` 45 lakhs at beginning of year. Current service cost was ` 6 lakhs, interest cost ` 3.6 lakhs, benefits paid ` 4 lakhs, and closing DBO was ` 53 lakhs.',
    ],
    questions: [
      {
        id: 'case46-q1',
        questionNumber: 1,
        questionText: 'What is the net actuarial gain or loss for the year under AS 15?',
        options: [
          { key: 'a', text: 'Actuarial loss of ` 2.4 lakhs' },
          { key: 'b', text: 'Actuarial gain of ` 2.4 lakhs' },
          { key: 'c', text: 'Actuarial loss of ` 4.0 lakhs' },
          { key: 'd', text: 'Nil' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 15',
        reasoning: 'Expected closing DBO = ` 45L + ` 6L + ` 3.6L - ` 4L = ` 50.6 lakhs. Actual closing DBO = ` 53.0 lakhs. Actuarial loss = ` 53.0L - ` 50.6L = ` 2.4 lakhs recognized immediately in P&L.',
      },
    ],
  },
  {
    id: 'case-47',
    caseNumber: 47,
    title: 'Radiant Electronics: Restatement of Prior Period EPS for Bonus Issue',
    applicableStandards: ['AS 20 (Earnings Per Share)'],
    scenarioParagraphs: [
      'Radiant Electronics reported net profit of ` 30 lakhs and basic EPS of ` 3.00 (on 10,00,000 shares) in 2023-24. In 2024-25, it issued 1 bonus share for every 2 shares held without consideration. Profit for 2024-25 was ` 45 lakhs.',
    ],
    questions: [
      {
        id: 'case47-q1',
        questionNumber: 1,
        questionText: 'What is the adjusted basic EPS for 2023-24 presented in the comparative financial statements?',
        options: [
          { key: 'a', text: '` 3.00' },
          { key: 'b', text: '` 2.00' },
          { key: 'c', text: '` 1.50' },
          { key: 'd', text: '` 2.50' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 20',
        reasoning: 'Bonus issue increases shares without inflow of resources. Shares for 2023-24 restated to 15,00,000 shares. Restated EPS = ` 30,00,000 ÷ 15,00,000 = ` 2.00 per share.',
      },
    ],
  },
  {
    id: 'case-48',
    caseNumber: 48,
    title: 'Falcon Exports: Forward Exchange Contract Premium Amortisation',
    applicableStandards: ['AS 11 (Effects of Changes in Foreign Exchange Rates)'],
    scenarioParagraphs: [
      'Falcon Exports entered into a 6-month forward contract on 1st January 2025 to sell US $ 1,00,000 at ` 83.50. Spot rate on 1st January 2025 was ` 82.00. Financial year ends on 31st March 2025.',
    ],
    questions: [
      {
        id: 'case48-q1',
        questionNumber: 1,
        questionText: 'How is the forward premium of ` 1.50 per dollar (` 1,50,000) recognized in the financial statements?',
        options: [
          { key: 'a', text: 'Full ` 1,50,000 credited to P&L on 1st January 2025' },
          { key: 'b', text: 'Amortised over the 6-month contract life; ` 75,000 credited to P&L in 2024-25' },
          { key: 'c', text: 'Credited to capital reserve upon maturity' },
          { key: 'd', text: 'Ignored until settlement' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 11',
        reasoning: 'Under AS 11, premium or discount on forward contract not intended for trading is amortized as expense or income over the life of the contract (3 months in 2024-25 = ` 75,000).',
      },
    ],
  },
  {
    id: 'case-49',
    caseNumber: 49,
    title: 'Pioneer Cement: Capitalisation of Borrowing Costs upon Substantial Completion',
    applicableStandards: ['AS 16 (Borrowing Costs)'],
    scenarioParagraphs: [
      'Pioneer Cement constructed a clinker grinding unit financed by loan. All physical construction and trial runs were successfully completed on 31st December 2024, but commercial production commenced on 1st April 2025 awaiting marketing rollout.',
    ],
    questions: [
      {
        id: 'case49-q1',
        questionNumber: 1,
        questionText: 'When should capitalisation of borrowing costs cease under AS 16?',
        options: [
          { key: 'a', text: 'On 31st December 2024 when substantially all activities necessary to prepare the asset for its intended use are complete' },
          { key: 'b', text: 'On 1st April 2025 when commercial sales begin' },
          { key: 'c', text: 'When plant reaches 100% rated capacity' },
          { key: 'd', text: 'At the discretion of management' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 16',
        reasoning: 'Capitalisation of borrowing costs should cease when substantially all the activities necessary to prepare the qualifying asset for its intended use or sale are complete (31st December 2024).',
      },
    ],
  },
  {
    id: 'case-50',
    caseNumber: 50,
    title: 'Vista Consumer Goods: Disclosures for Joint Ventures and Significant Influence',
    applicableStandards: ['AS 18 (Related Party Disclosures)', 'AS 27 (Financial Reporting of Interests in Joint Ventures)'],
    scenarioParagraphs: [
      'Vista Consumer Goods holds 50% voting power in a jointly controlled entity, FreshPack LLP. During 2024-25, Vista sold packaging materials of ` 80 lakhs to FreshPack LLP.',
    ],
    questions: [
      {
        id: 'case50-q1',
        questionNumber: 1,
        questionText: 'Is FreshPack LLP a related party of Vista Consumer Goods under AS 18?',
        options: [
          { key: 'a', text: 'No, joint ventures are exempt from AS 18' },
          { key: 'b', text: 'Yes, parties with joint control over an enterprise or co-venturers are related parties' },
          { key: 'c', text: 'Only if holding exceeds 51%' },
          { key: 'd', text: 'Only if transactions are at non-market prices' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 18',
        reasoning: 'Under AS 18, joint ventures in which the reporting enterprise is a venturer are related parties and require full transaction disclosure.',
      },
    ],
  },
];
