import { CaseScenario } from '../types';

export const cases31to40: CaseScenario[] = [
  {
    id: 'case-31',
    caseNumber: 31,
    title: 'Dynamic Energy Ltd.: Borrowing Costs Capitalisation & Suspension Period',
    applicableStandards: ['AS 16 (Borrowing Costs)'],
    scenarioParagraphs: [
      'Dynamic Energy Ltd. commenced construction of a thermal power plant on 1st April 2024 with a dedicated term loan of ` 200 crores carrying interest at 10% per annum.',
      'Active construction was suspended for 3 months from 1st July 2024 to 30th September 2024 due to high monsoon floods which are normal and customary in that region.',
      'During this period, idle loan funds were temporarily deposited in liquid mutual funds earning ` 2.5 crores.',
    ],
    questions: [
      {
        id: 'case31-q1',
        questionNumber: 1,
        questionText: 'Should borrowing costs incurred during the 3-month suspension period be capitalized under AS 16?',
        options: [
          { key: 'a', text: 'Yes, because temporary suspension that is customary or normal does not require suspension of capitalisation' },
          { key: 'b', text: 'No, capitalisation must be suspended during any stoppage exceeding 30 days' },
          { key: 'c', text: '50% should be capitalized and 50% expensed' },
          { key: 'd', text: 'Capitalised only if approved by the lenders' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 16',
        reasoning: 'Under AS 16, capitalisation is not suspended when temporary delay is a necessary part of the process of getting an asset ready for its intended use (such as normal monsoon stoppage).',
      },
      {
        id: 'case31-q2',
        questionNumber: 2,
        questionText: 'What is the net borrowing cost capitalized for the year ended 31st March 2025?',
        options: [
          { key: 'a', text: '` 20.0 crores' },
          { key: 'b', text: '` 17.5 crores' },
          { key: 'c', text: '` 15.0 crores' },
          { key: 'd', text: '` 22.5 crores' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 16',
        reasoning: 'Gross interest = 10% of ` 200 cr = ` 20 cr. Income earned on temporary investment of specific borrowing (` 2.5 cr) is deducted. Net borrowing cost = ` 17.5 crores.',
      },
    ],
  },
  {
    id: 'case-32',
    caseNumber: 32,
    title: 'Apex Tech Ltd.: Internally Generated Software & Amortisation',
    applicableStandards: ['AS 26 (Intangible Assets)'],
    scenarioParagraphs: [
      'Apex Tech Ltd. develops cloud enterprise software. During 2024-25, it spent ` 45 lakhs on research and feasibility testing, and ` 80 lakhs on development after technical feasibility was formally established on 1st October 2024.',
      'The software was ready for commercial launch on 1st January 2025 with an estimated useful life of 4 years.',
    ],
    questions: [
      {
        id: 'case32-q1',
        questionNumber: 1,
        questionText: 'What amount should be recognized as an Intangible Asset in the Balance Sheet as on 31st March 2025?',
        options: [
          { key: 'a', text: '` 125 lakhs' },
          { key: 'b', text: '` 80 lakhs less 3 months amortisation' },
          { key: 'c', text: '` 45 lakhs' },
          { key: 'd', text: 'Nil, all software development must be expensed' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning: 'Research phase expenses (` 45L) are expensed immediately. Development costs incurred after technical feasibility (` 80L) are capitalized and amortised from launch date.',
      },
    ],
  },
  {
    id: 'case-33',
    caseNumber: 33,
    title: 'Omega Chemicals: Cash Generating Unit Impairment Allocation',
    applicableStandards: ['AS 28 (Impairment of Assets)'],
    scenarioParagraphs: [
      'Omega Chemicals operates a chemical plant considered as a single Cash Generating Unit (CGU). The carrying amounts are: Goodwill ` 20 lakhs, Plant & Machinery ` 100 lakhs, Factory Building ` 60 lakhs (Total ` 180 lakhs).',
      'Due to stricter pollution norms, the recoverable amount of the CGU was estimated at ` 140 lakhs on 31st March 2025.',
    ],
    questions: [
      {
        id: 'case33-q1',
        questionNumber: 1,
        questionText: 'How is the impairment loss of ` 40 lakhs allocated among the assets of the CGU under AS 28?',
        options: [
          { key: 'a', text: 'Pro-rata across all assets including Goodwill' },
          { key: 'b', text: 'Goodwill: ` 20 lakhs; Plant & Machinery: ` 12.5 lakhs; Building: ` 7.5 lakhs' },
          { key: 'c', text: 'Goodwill: ` 20 lakhs; Plant & Machinery: ` 15 lakhs; Building: ` 5 lakhs' },
          { key: 'd', text: 'Goodwill: Nil; Plant & Machinery: ` 25 lakhs; Building: ` 15 lakhs' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 28',
        reasoning: 'Impairment loss is first allocated to reduce Goodwill to zero (` 20 lakhs). The remaining ` 20 lakhs is allocated pro-rata between Plant (` 100L) and Building (` 60L) in 5:3 ratio = ` 12.5L and ` 7.5L.',
      },
    ],
  },
  {
    id: 'case-34',
    caseNumber: 34,
    title: 'Trident Marine: Site Restoration & Decommissioning Provision',
    applicableStandards: ['AS 10 (PPE)', 'AS 29 (Provisions)'],
    scenarioParagraphs: [
      'Trident Marine installed an offshore drilling platform on 1st April 2024 at a cost of ` 80 crores. Environmental laws obligate the entity to decommission and restore the seabed at the end of 20 years.',
      'The estimated decommissioning cost at current prices is ` 10 crores, with present value discounted at 8% being ` 2.15 crores.',
    ],
    questions: [
      {
        id: 'case34-q1',
        questionNumber: 1,
        questionText: 'What is the initial capitalized cost of the platform under AS 10?',
        options: [
          { key: 'a', text: '` 80.00 crores' },
          { key: 'b', text: '` 90.00 crores' },
          { key: 'c', text: '` 82.15 crores' },
          { key: 'd', text: '` 85.00 crores' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 10 / AS 29',
        reasoning: 'Cost of PPE includes the initial estimate of the costs of dismantling and removing the item and restoring the site (` 80 cr + ` 2.15 cr = ` 82.15 crores).',
      },
    ],
  },
  {
    id: 'case-35',
    caseNumber: 35,
    title: 'Horizon Real Estate: Revenue Recognition Criteria for Construction Projects',
    applicableStandards: ['AS 9 (Revenue Recognition)', 'Guidance Note on Real Estate'],
    scenarioParagraphs: [
      'Horizon Real Estate launched a luxury residential project. Booking advances of ` 15 crores were received against flat agreements where only 12% of total estimated project costs had been incurred by year-end.',
    ],
    questions: [
      {
        id: 'case35-q1',
        questionNumber: 1,
        questionText: 'Can revenue be recognized under the percentage of completion method for this project?',
        options: [
          { key: 'a', text: 'Yes, 12% revenue can be recognized' },
          { key: 'b', text: 'No, revenue cannot be recognized until stage of completion reaches at least 25%' },
          { key: 'c', text: 'Revenue recognized up to booking advances received' },
          { key: 'd', text: 'Revenue recognized only on completion of the full project' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 9',
        reasoning: 'As per ICAI Guidance Note, percentage of completion method is applied only when the stage of completion of project reaches at least 25% of estimated construction cost.',
      },
    ],
  },
  {
    id: 'case-36',
    caseNumber: 36,
    title: 'Spectrum Telecom: Operating Lease Rentals with Scheduled Escalations',
    applicableStandards: ['AS 19 (Leases)'],
    scenarioParagraphs: [
      'Spectrum Telecom entered into a 3-year operating lease for office premises. Lease rentals are ` 10 lakhs in Year 1, ` 12 lakhs in Year 2, and ` 14 lakhs in Year 3 to compensate for general inflation.',
    ],
    questions: [
      {
        id: 'case36-q1',
        questionNumber: 1,
        questionText: 'How should the lease expense be recognized in the Statement of Profit and Loss for Year 1?',
        options: [
          { key: 'a', text: '` 10 lakhs as per actual payment' },
          { key: 'b', text: '` 12 lakhs straight-lined over 3 years (` 36L / 3)' },
          { key: 'c', text: '` 14 lakhs' },
          { key: 'd', text: '` 11 lakhs' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 19',
        reasoning: 'Operating lease payments should be recognized as an expense in P&L on a straight-line basis over the lease term (` 36 lakhs ÷ 3 = ` 12 lakhs/year) unless another systematic basis is more representative.',
      },
    ],
  },
  {
    id: 'case-37',
    caseNumber: 37,
    title: 'Zenith Pharma: Deferred Tax Asset on Unabsorbed Depreciation & Losses',
    applicableStandards: ['AS 22 (Accounting for Taxes on Income)'],
    scenarioParagraphs: [
      'Zenith Pharma incurred tax losses and unabsorbed depreciation of ` 150 lakhs during 2024-25. The company has no firm orders or binding sales contracts but projects high growth based on industry forecasts.',
    ],
    questions: [
      {
        id: 'case37-q1',
        questionNumber: 1,
        questionText: 'Can Zenith Pharma recognize a Deferred Tax Asset on unabsorbed depreciation under AS 22?',
        options: [
          { key: 'a', text: 'Yes, based on reasonable certainty of future profits' },
          { key: 'b', text: 'No, DTA on unabsorbed loss/depreciation requires virtual certainty supported by convincing evidence' },
          { key: 'c', text: 'Yes, up to 50% of the loss' },
          { key: 'd', text: 'Yes, if approved by Board of Directors' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning: 'Under AS 22, where an enterprise has unabsorbed depreciation or carry forward tax losses, DTA is recognized only to the extent that there is virtual certainty supported by convincing evidence of sufficient future taxable income.',
      },
    ],
  },
  {
    id: 'case-38',
    caseNumber: 38,
    title: 'Premier Motors: Net Realisable Value Valuation for Raw Materials and Finished Goods',
    applicableStandards: ['AS 2 (Valuation of Inventories)'],
    scenarioParagraphs: [
      'Premier Motors holds 5,000 units of raw materials costing ` 100 each. The replacement cost is ` 80 each. Finished product selling price has fallen below cost, and estimated cost of completion and selling expenses exceed realization.',
    ],
    questions: [
      {
        id: 'case38-q1',
        questionNumber: 1,
        questionText: 'At what value should raw material inventory be valued under AS 2?',
        options: [
          { key: 'a', text: 'Cost of ` 100 each' },
          { key: 'b', text: 'Replacement cost of ` 80 each' },
          { key: 'c', text: 'Weighted average of ` 90 each' },
          { key: 'd', text: 'Zero' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 2',
        reasoning: 'Materials held for use in production are written down to replacement cost when there has been a decline in the price of materials and finished products are expected to be sold below cost.',
      },
    ],
  },
  {
    id: 'case-39',
    caseNumber: 39,
    title: 'Royal Hotels: Revaluation of Property & Upward/Downward Adjustments',
    applicableStandards: ['AS 10 (Property, Plant and Equipment)'],
    scenarioParagraphs: [
      'Royal Hotels revalued its hotel building in 2022-23, resulting in an upward revaluation of ` 50 lakhs credited to Revaluation Reserve. In 2024-25, a revaluation deficit of ` 70 lakhs was determined.',
    ],
    questions: [
      {
        id: 'case39-q1',
        questionNumber: 1,
        questionText: 'What is the correct accounting treatment for the ` 70 lakhs deficit under AS 10?',
        options: [
          { key: 'a', text: 'Full ` 70 lakhs debited to Profit & Loss' },
          { key: 'b', text: '` 50 lakhs debited to Revaluation Reserve and ` 20 lakhs debited to Profit & Loss' },
          { key: 'c', text: 'Full ` 70 lakhs debited to Revaluation Reserve' },
          { key: 'd', text: '` 70 lakhs credited to General Reserve' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 10',
        reasoning: 'A revaluation decrease should be charged to P&L, except to the extent that it reverses a previous revaluation surplus on the same asset, where it is debited directly to Revaluation Reserve.',
      },
    ],
  },
  {
    id: 'case-40',
    caseNumber: 40,
    title: 'Galaxy Textiles: Amalgamation with Mutual Inter-Company Holdings',
    applicableStandards: ['AS 14 (Accounting for Amalgamations)'],
    scenarioParagraphs: [
      'Galaxy Textiles acquired Nebula Fabrics. Prior to acquisition, Galaxy held 10,000 equity shares in Nebula (cost ` 1,50,000). Nebula held trade debts due from Galaxy amounting to ` 80,000.',
    ],
    questions: [
      {
        id: 'case40-q1',
        questionNumber: 1,
        questionText: 'How are mutual debts and inter-company shareholdings treated upon amalgamation?',
        options: [
          { key: 'a', text: 'Mutual debts are cancelled against each other, and inter-company shares are eliminated against share capital' },
          { key: 'b', text: 'Mutual debts must be settled in cash before amalgamation' },
          { key: 'c', text: 'Mutual holdings are shown as investments in the consolidated sheet' },
          { key: 'd', text: 'Transferred to Suspense Account' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 14',
        reasoning: 'Mutual balances (trade receivables/payables) are cancelled in full. Pre-existing cross-holdings are cancelled without issue of new shares.',
      },
    ],
  },
];
