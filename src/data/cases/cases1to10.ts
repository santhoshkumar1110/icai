import { CaseScenario } from '../types';

export const cases1to10: CaseScenario[] = [
  {
    id: 'case-1',
    caseNumber: 1,
    title: 'Digitex Limited: Accounting for Intellectual Property & Development Costs',
    applicableStandards: ['AS 26 (Intangible Assets)'],
    scenarioParagraphs: [
      'Digitex limited acquired an intellectual property at the cost of ` 70,00,000 (at the beginning of the year) and it meets the definition of intangible asset as per AS 26. As per the calculations made by the Company, the benefit from this intellectual property will accrue for next 5 years wherein for first year will be 30%, for next two years it will be 25% each and 10% for the next 2 years.',
      'Year 2: The Company incurred development cost for its new product and incurred ` 25,00,000 (at the beginning of the year) and was of the view that it will get the benefits for the next 5 years.',
      'Year 3: During the year, it was found that due to change in government policies, no further benefits will be available to the Company from development cost.',
      'Year 4: At beginning of year 4 it was found that the remaining 20% benefit from intellectual property will flow to the Company in this year itself.',
    ],
    scenarioTables: [
      {
        headers: [
          'Period',
          'IP Amortised During Year (`)',
          'IP Value at End of Year (`)',
          'Dev Cost Amortised (`)',
          'Dev Cost Value at End (`)',
          'Total Intangible Assets (`)',
          'Total Amortised in Year (`)',
        ],
        rows: [
          ['Year 1', '21,00,000', '49,00,000', '—', '—', '49,00,000', '21,00,000'],
          ['Year 2', '17,50,000', '31,50,000', '5,00,000', '20,00,000', '51,50,000', '22,50,000'],
          ['Year 3', '17,50,000', '14,00,000', '20,00,000', '0', '14,00,000', '37,50,000'],
          ['Year 4', '14,00,000', '0', '0', '0', '0', '14,00,000'],
          ['Year 5', '0', '0', '0', '0', '0', '0'],
        ],
      },
    ],
    questions: [
      {
        id: 'case1-q1',
        questionNumber: 1,
        questionText:
          'At the end of year 2, what will be the value of Intangible Asset of the Company in the financial statements:',
        options: [
          { key: 'a', text: '` 95,00,000' },
          { key: 'b', text: '` 74,00,000' },
          { key: 'c', text: '` 56,50,000' },
          { key: 'd', text: '` 51,50,000' },
        ],
        correctKey: 'd',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning:
          'At the end of Year 2, IP value = ` 70,00,000 - ` 21,00,000 (30%) - ` 17,50,000 (25%) = ` 31,50,000. Development Cost value = ` 25,00,000 - ` 5,00,000 (20%) = ` 20,00,000. Total Intangible Assets = ` 31,50,000 + ` 20,00,000 = ` 51,50,000.',
      },
      {
        id: 'case1-q2',
        questionNumber: 2,
        questionText:
          'For the year 2, how much amount will be expensed in the profit and loss account from Intangible assets in the financial statements:',
        options: [
          { key: 'a', text: '` 21,00,000' },
          { key: 'b', text: '` 22,50,000' },
          { key: 'c', text: '` 14,00,000' },
          { key: 'd', text: '` 5,00,000' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning:
          'For Year 2, IP amortisation = 25% of ` 70,00,000 = ` 17,50,000. Development Cost amortisation = ` 25,00,000 / 5 = ` 5,00,000. Total expensed in P&L = ` 17,50,000 + ` 5,00,000 = ` 22,50,000.',
      },
      {
        id: 'case1-q3',
        questionNumber: 3,
        questionText:
          'For the year 3, how much amount will be expensed in the profit and loss account from Intangible assets in the financial statements:',
        options: [
          { key: 'a', text: '` 37,50,000' },
          { key: 'b', text: '` 22,50,000' },
          { key: 'c', text: '` 20,00,000' },
          { key: 'd', text: 'None of the above' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning:
          'For Year 3, IP amortisation = 25% of ` 70,00,000 = ` 17,50,000. Development cost write-off = ` 20,00,000 (since no further benefits flow due to policy change). Total expensed = ` 17,50,000 + ` 20,00,000 = ` 37,50,000.',
      },
      {
        id: 'case1-q4',
        questionNumber: 4,
        questionText:
          'For the year 4, how much amount will be expensed in the profit and loss account from Intangible assets in the financial statements:',
        options: [
          { key: 'a', text: '` 19,00,000' },
          { key: 'b', text: '` 20,00,000' },
          { key: 'c', text: '` 14,00,000' },
          { key: 'd', text: 'Nil' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 26',
        reasoning:
          'At the beginning of Year 4, remaining carrying value of IP was ` 14,00,000 (20% of ` 70,00,000). Since all remaining 20% benefit flows in Year 4 itself, the full ` 14,00,000 is amortised in Year 4.',
      },
    ],
  },
  {
    id: 'case-2',
    caseNumber: 2,
    title: 'Expert Ltd.: Accounting for Taxes on Income & Impairment Indications',
    applicableStandards: ['AS 22 (Accounting for Taxes on Income)', 'AS 26 / AS 28 (Impairment of Assets)'],
    scenarioParagraphs: [
      'Situation 1: Expert Ltd. has depreciation amounting to ` 6,00,000 in its books as per accounting records and depreciation as per tax records at ` 15,00,000. There is adequate evidence of future profit sufficiency.',
      'Situation 2: Further, they have accrued ` 8,00,000 towards GST liability for the last month of the year which is expected to be paid off by next month. As per the provisions of Section 43B of the Income Tax Act, 1961 – Any expenditure of the nature mentioned in section 43B (e.g. taxes, duty, cess, fees, etc.) accrued in the statement of profit and loss on mercantile basis will be allowed for tax purposes in subsequent years on payment basis only. Answer the following questions on the basis of above information:',
    ],
    questions: [
      {
        id: 'case2-q1',
        questionNumber: 1,
        questionText:
          'In Situation 1: How much deferred tax asset/liability should be recognized as transition adjustment when the tax rate is 50%:',
        options: [
          { key: 'a', text: '` 8,50,000 (deferred tax liability)' },
          { key: 'b', text: '` 4,50,000 (deferred tax liability)' },
          { key: 'c', text: '` 8,50,000 (deferred tax asset)' },
          { key: 'd', text: '` 4,50,000 (deferred tax asset)' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'Excess depreciation as per tax (` 15,00,000 - ` 6,00,000) = ` 9,00,000 which is a timing difference. Tax expense is more than current tax. Therefore, deferred tax liability = 50% of ` 9,00,000 = ` 4,50,000 (deferred tax liability).',
      },
      {
        id: 'case2-q2',
        questionNumber: 2,
        questionText:
          'In Situation 1: How much deferred tax asset/liability should be recognized as transition adjustment when the tax rate is 35%:',
        options: [
          { key: 'a', text: '` 3,15,000 (deferred tax asset)' },
          { key: 'b', text: '` 7,35,000 (deferred tax asset)' },
          { key: 'c', text: '` 3,15,000 (deferred tax liability)' },
          { key: 'd', text: '` 7,35,000(deferred tax liability)' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'Excess depreciation as per tax (` 15,00,000 - ` 6,00,000) = ` 9,00,000 which is timing difference. Deferred tax liability = 35% of ` 9,00,000 = ` 3,15,000 (deferred tax liability).',
      },
      {
        id: 'case2-q3',
        questionNumber: 3,
        questionText:
          'In Situation 2: How much deferred tax asset/liability should be recognized as transition adjustment when the tax rate is 35%:',
        options: [
          { key: 'a', text: '` 2,80,000' },
          { key: 'b', text: '` 5,20,000' },
          { key: 'c', text: '` 8,00,000' },
          { key: 'd', text: 'Nil' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'GST Liability in books = ` 8,00,000. Allowed for tax in subsequent year under Section 43B. Timing difference creates Deferred Tax Asset = 35% of ` 8,00,000 = ` 2,80,000.',
      },
      {
        id: 'case2-q4',
        questionNumber: 4,
        questionText:
          'In assessing whether there is any indication that an asset may be impaired, an enterprise should consider, as a minimum, the following indications from internal sources of information:',
        options: [
          {
            key: 'a',
            text: "during the period, an asset's market value has declined significantly more than would be expected as a result of the passage of time or normal use",
          },
          {
            key: 'b',
            text: "market interest rates or other market rates of return on investments have increased during the period, and those increases are likely to affect the discount rate used in calculating an asset's value in use and decrease the asset's recoverable amount materially",
          },
          {
            key: 'c',
            text: 'the carrying amount of the net assets of the reporting enterprise is more than its market capitalisation',
          },
          {
            key: 'd',
            text: 'evidence is available from internal reporting that indicates that the economic performance of an asset is, or will be, worse than expected',
          },
        ],
        correctKey: 'd',
        marks: 2,
        accountingStandard: 'AS 26 / AS 28',
        reasoning:
          'As per Paragraph 8 of AS 26, only option (d) is an internal source of information and the rest are external sources of information.',
      },
    ],
  },
  {
    id: 'case-3',
    caseNumber: 3,
    title: 'Suman Ltd.: Acquisition, Bonus Shares & Sale of Investments',
    applicableStandards: ['AS 13 (Accounting for Investments)'],
    scenarioParagraphs: [
      'Suman Ltd. acquired 1000 shares of Sarika Ltd @ ` 150 each and paid brokerage @ 1%. In the same financial year, Sarika Ltd. issued bonus shares at one share for every four shares held by shareholders. Suman Ltd. sold 500 shares in the month of March in the same year and paid 1% brokerage.',
    ],
    questions: [
      {
        id: 'case3-q1',
        questionNumber: 1,
        questionText:
          'What will be the carrying value of investment in Sarika Ltd. after sale of shares as per AS 13.',
        options: [
          { key: 'a', text: '` 1,50,000' },
          { key: 'b', text: '` 1,13,625' },
          { key: 'c', text: '` 90,900' },
          { key: 'd', text: '` 1,12,500' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 13',
        reasoning:
          '• Purchase cost = 1000 shares × ` 150 = ` 150,000.\n• Purchase brokerage = 1% of ` 150,000 = ` 1,500.\n• Total cost = ` 150,000 + ` 1,500 = ` 151,500.\n• Bonus issue = 1 for 4 on 1000 shares => bonus shares = 1000 ÷ 4 = 250.\n• Total shares after bonus = 1000 + 250 = 1,250.\n• Cost per share after bonus = ` 151,500 ÷ 1,250 = ` 121.20.\n• After selling 500 shares, remaining shares = 1,250 - 500 = 750.\n• Carrying value = 750 × ` 121.20 = ` 90,900.',
      },
    ],
  },
  {
    id: 'case-4',
    caseNumber: 4,
    title: 'Black Limited: Government Grants Refund & Impairment',
    applicableStandards: ['AS 12 (Government Grants)', 'AS 28 (Impairment of Assets)', 'AS 10 (PPE)'],
    scenarioParagraphs: [
      'On 1st April, 2019, Black Limited received a government grant of ` 15,00,000 for acquisition of a Machine costing ` 50,00,000. The grant was credited to the cost of the Machine. The life of the Machine is expected to be 10 years and estimated residual value at the end of 10 years is ` 5,00,000. The company charges depreciation on straight line basis.',
      'Due to non-fulfillment of certain conditions the company had to refund the entire grant on 1st April, 2021.',
      'On 31st March, 2023, Black Limited received certain indications of impairment of the Machine and the recoverable amount was ascertained to be ` 28,00,000 with revised useful life of 4 years and nil residual value.',
      'On 1st April, 2024, the company exchanged the Machine by paying cash of ` 2,00,000 and new Machine valued at ` 18,00,000.',
    ],
    questions: [
      {
        id: 'case4-q1',
        questionNumber: 1,
        questionText:
          'What will be the carrying amount of the Machine as on 31st March, 2021 after charging depreciation for the year?',
        options: [
          { key: 'a', text: '` 28,00,000' },
          { key: 'b', text: '` 26,00,000' },
          { key: 'c', text: '` 41,00,000' },
          { key: 'd', text: '` 29,00,000' },
        ],
        correctKey: 'd',
        marks: 2,
        accountingStandard: 'AS 12',
        reasoning:
          'Cost = ` 50,00,000 - Grant ` 15,00,000 = ` 35,00,000. Depreciable amount = ` 35,00,000 - ` 5,00,000 = ` 30,00,000. Annual Depreciation = ` 3,00,000. As of 31 March 2021 (after 2 years): ` 35,00,000 - ` 6,00,000 = ` 29,00,000.',
      },
      {
        id: 'case4-q2',
        questionNumber: 2,
        questionText:
          'What will be the amount of depreciation to be charged on the Machine for the year ended 31st March, 2022?',
        options: [
          { key: 'a', text: '` 4,87,500' },
          { key: 'b', text: '` 6,37,500' },
          { key: 'c', text: '` 4,50,000' },
          { key: 'd', text: '` 5,37,500' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 12',
        reasoning:
          'On 1 April 2021, grant refund adds to book value: ` 29,00,000 + ` 15,00,000 = ` 44,00,000. Depreciable amount = ` 44,00,000 - ` 5,00,000 = ` 39,00,000. Remaining life = 8 years. New depreciation = ` 39,00,000 / 8 = ` 4,87,500 per year.',
      },
      {
        id: 'case4-q3',
        questionNumber: 3,
        questionText:
          'What will be the impact of test of impairment on Profit & Loss Account of the company?',
        options: [
          { key: 'a', text: 'Impairment loss of ` 4,00,000 to be debited to Profit & Loss A/c.' },
          { key: 'b', text: 'Impairment loss of ` 4,25,000 to be debited to Profit & Loss A/c.' },
          { key: 'c', text: 'Impairment loss of ` 6,25,000 to be debited to Profit & Loss A/c.' },
          { key: 'd', text: 'Impairment loss of ` 15,25,000 to be debited to Profit & Loss A/c.' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 28',
        reasoning:
          'Carrying amount as of 31 March 2023 = ` 44,00,000 - (2 × ` 4,87,500) = ` 34,25,000. Recoverable Amount = ` 28,00,000. Impairment Loss = ` 34,25,000 - ` 28,00,000 = ` 6,25,000 debited to P&L.',
      },
    ],
  },
  {
    id: 'case-5',
    caseNumber: 5,
    title: 'Star Limited: Comprehensive Deferred Tax Asset & Liability Reconciliations',
    applicableStandards: ['AS 22 (Accounting for Taxes on Income)'],
    scenarioParagraphs: [
      'The following particulars are stated in the Balance Sheet of Star Limited as on 31st March, 2023:',
      'Deferred Tax Assets (Dr.) ` 1,20,000\nDeferred Tax Liabilities (Cr.) ` 2,10,000',
      'The following transactions were reported during the year 2023-24:\n1. Depreciation as per accounting records ` 12,00,000\n2. Depreciation as per income tax records ` 18,00,000\n3. Interest paid accounted in books on accrual basis ` 4,50,000 but paid on 15-05-2024\n4. Employer PF Contribution exp. disallowed for tax purpose in year 2022-23 but allowed in year 2023-24 ` 82,000\n5. Unamortized preliminary expenses as per tax records ` 1,00,000\n6. Donation ` 70,000\n7. Tax Rate 20%',
    ],
    questions: [
      {
        id: 'case5-q1',
        questionNumber: 1,
        questionText: 'What would be the value of the Deferred Tax Assets as on 31-03-2024?',
        options: [
          { key: 'a', text: '` 1,52,000' },
          { key: 'b', text: '` 3,30,000' },
          { key: 'c', text: '` 1,23,600' },
          { key: 'd', text: '` 4,50,000' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'Opening DTA = ` 1,20,000. Reversal of DTA on PF allowed = ` 82,000 × 20% = ` 16,400. DTA on preliminary expenses = ` 1,00,000 × 20% = ` 20,000. Closing DTA = ` 1,20,000 - ` 16,400 + ` 20,000 = ` 1,23,600.',
      },
      {
        id: 'case5-q2',
        questionNumber: 2,
        questionText: 'What would be the value of the Deferred Tax Liabilities as on 31-03-2024?',
        options: [
          { key: 'a', text: '` 1,23,600' },
          { key: 'b', text: '` 3,30,000' },
          { key: 'c', text: '` 1,52,000' },
          { key: 'd', text: '` 1,20,000' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'Opening DTL = ` 2,10,000. Timing diff on depreciation = (` 18,00,000 - ` 12,00,000) × 20% = ` 1,20,000. Closing DTL = ` 2,10,000 + ` 1,20,000 = ` 3,30,000.',
      },
      {
        id: 'case5-q3',
        questionNumber: 3,
        questionText: 'What would be the value of reversal of Deferred Tax Assets as on 31-03-2024?',
        options: [
          { key: 'a', text: '` 20,000' },
          { key: 'b', text: '` 1,04,000' },
          { key: 'c', text: '` 16,400' },
          { key: 'd', text: '` 90,000' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'PF contribution earlier disallowed now allowed in 2023-24: ` 82,000 × 20% = ` 16,400 reversed.',
      },
      {
        id: 'case5-q4',
        questionNumber: 4,
        questionText: 'Which is the permanent difference item as per AS 22?',
        options: [
          { key: 'a', text: 'Employer PF Contribution exp.' },
          { key: 'b', text: 'Donation' },
          { key: 'c', text: 'Unamortized preliminary expenses' },
          { key: 'd', text: 'Depreciation' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 22',
        reasoning:
          'Donation is not an allowable expenditure under the Income Tax Act and will never reverse in future periods; hence it is a permanent difference.',
      },
    ],
  },
  {
    id: 'case-6',
    caseNumber: 6,
    title: 'AB Contractors: Construction Contract Profit/Loss Evaluation',
    applicableStandards: ['AS 7 (Construction Contracts)'],
    scenarioParagraphs: [
      'AB Contractors undertakes a fixed price contract of ` 350 Lakhs. Information related to contract is given as under:\n• Material purchased ` 125 lakhs\n• Labour charges ` 95 lakhs\n• Unused material ` 22 lakhs\n• Estimated future costs to be incurred to complete the contract ` 115 Lakhs.\n• Payment received as part payment of contract ` 50 Lakhs.\n• Machinery used for 4 years for the contract. Original cost of the machine is ` 210 Lakhs. Expected life of machinery is 20 years.',
    ],
    questions: [
      {
        id: 'case6-q1',
        questionNumber: 1,
        questionText: 'What will be the Profit/Loss on the contract?',
        options: [
          { key: 'a', text: 'Loss on contract ` 5 lakhs' },
          { key: 'b', text: 'Loss on contract ` 49 Lakhs' },
          { key: 'c', text: 'Profit on contract ` 45 Lakhs' },
          { key: 'd', text: 'Profit on contract ` 26.5 Lakhs' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 7',
        reasoning:
          'Total cost till date = Material consumed (` 125 - ` 22) + Labour (` 95) + Depreciation (4/20 × ` 210 = ` 42) = ` 240 lakhs. Total estimated contract cost = ` 240 + ` 115 = ` 355 lakhs. Total contract price = ` 350 lakhs. Expected loss = ` 350 - ` 355 = ` 5 lakhs (Loss), recognized immediately as per AS 7.',
      },
    ],
  },
  {
    id: 'case-7',
    caseNumber: 7,
    title: 'Ace Limited: Capitalisation of Borrowing Costs on Equity Investments',
    applicableStandards: ['AS 16 (Borrowing Costs)'],
    scenarioParagraphs: [
      'Ace Limited borrowed ` 25 Lakhs from ABN Bank during the financial year 2023-24. Ace Limited used these funds to invest in Equity shares of Kay Limited.',
      'Kay Limited is implementing a new Project, so with these future prospects, Ace Limited invested ` 25 Lakhs in Kay Limited.',
      'As on 31st March, 2024, since the said project was not complete, the directors of Ace Limited capitalised the interest on loan amounting to ` 2 lakhs and thus added the amount of interest to the cost of Investments.',
      'Market value of these investments on 31st March, 2024 is ` 24 Lakhs.',
    ],
    questions: [
      {
        id: 'case7-q1',
        questionNumber: 1,
        questionText: 'Identify the correct statement, considering the above facts as per AS 16:',
        options: [
          {
            key: 'a',
            text: 'Interest paid is acquisition charge, hence directors of Ace Limited correctly added the amount of interest in cost of investment.',
          },
          {
            key: 'b',
            text: 'Since project is qualifying Asset, directors of Ace Limited correctly added the amount of interest in cost of investments.',
          },
          {
            key: 'c',
            text: 'Ace Limited invested in equity share which is not a qualifying asset, therefore directors are wrong to add the interest in cost of investments, rather it should be charged to profit and loss account.',
          },
          {
            key: 'd',
            text: 'Since project is qualifying asset, directors of Ace Limited should capitalise the interest amount to market value of investments, rather than cost of investments.',
          },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 16',
        reasoning:
          'As per AS 16 (Borrowing Costs), interest can be capitalised only if the asset is a qualifying asset. Investment in equity shares does not qualify as a qualifying asset for the investor (Ace Limited), even if the investee company is constructing a project. Therefore, interest of ` 2 lakhs must be charged to Profit & Loss.',
      },
    ],
  },
  {
    id: 'case-8',
    caseNumber: 8,
    title: "Nextspace Limited: Cash Flow Statement Classifications",
    applicableStandards: ['AS 3 (Cash Flow Statements)'],
    scenarioParagraphs: [
      "The following summary cash account has been extracted from the Nextspace Limited's accounting records:\n• Cash Balance as on 01-04-2023: ` 72,000\n• Cash Sales: ` 15,56,000\n• Trade Receivable: ` 7,40,000\n• Rent from Property held as investment: ` 64,000\n• Income tax refund: ` 25,000\n• Loan from Bank: ` 5,00,000\n• Issue of Shares: ` 2,50,000\n• Sale of Investment: ` 49,500\nTotal Inflow: ` 31,84,500",
      'Outflow of Cash:\n• Trade Payable: ` 19,60,000\n• Office and Selling Exp.: ` 1,20,000\n• Trade Commission: ` 40,500\n• Underwriting Commission: ` 25,000\n• Redemption of Preference shares: ` 8,00,000\n• Brokerage on Sale of Investment: ` 9,200\n• Interest on long term borrowings: ` 85,600\n• Payment for Overheads: ` 46,000\n• Purchases of Goodwill: ` 50,000\nTotal Outflow: ` (31,36,300)\nBalance as on 31-03-2024: ` 1,20,200',
    ],
    questions: [
      {
        id: 'case8-q1',
        questionNumber: 1,
        questionText: 'What would be the value of Cash Flow from Operating Activities?',
        options: [
          { key: 'a', text: '` 1,29,500' },
          { key: 'b', text: '` 1,54,500' },
          { key: 'c', text: '` 1,45,300' },
          { key: 'd', text: '` 4,04,000' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 3',
        reasoning:
          'Operating Cash Flow = Cash sales (` 15,56,000) + Trade receivables (` 7,40,000) + Tax refund (` 25,000) - [Trade payables (` 19,60,000) + Office/Selling (` 1,20,000) + Trade commission (` 40,500) + Overheads (` 46,000)] = ` 1,54,500.',
      },
      {
        id: 'case8-q2',
        questionNumber: 2,
        questionText: 'What would be the value of Cash Flow from Investing Activities?',
        options: [
          { key: 'a', text: '` 54,300' },
          { key: 'b', text: '` 1,04,300' },
          { key: 'c', text: '` 29,300' },
          { key: 'd', text: '` (500)' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 3',
        reasoning:
          'Investing Cash Flow = Rent from property held as investment (` 64,000) + Sale of investment (` 49,500) - Brokerage on sale (` 9,200) - Purchase of goodwill (` 50,000) = ` 54,300.',
      },
      {
        id: 'case8-q3',
        questionNumber: 3,
        questionText: 'What would be the value of Cash Flow from Financing Activities?',
        options: [
          { key: 'a', text: '` (50,000)' },
          { key: 'b', text: '` (1,35,600)' },
          { key: 'c', text: '` 54,300' },
          { key: 'd', text: '` (1,60,600)' },
        ],
        correctKey: 'd',
        marks: 2,
        accountingStandard: 'AS 3',
        reasoning:
          'Financing Cash Flow = Loan from bank (` 5,00,000) + Issue of shares (` 2,50,000) - Underwriting commission (` 25,000) - Redemption of preference shares (` 8,00,000) - Interest on long-term borrowings (` 85,600) = ` (1,60,600).',
      },
      {
        id: 'case8-q4',
        questionNumber: 4,
        questionText: "Which of the following would be considered as a 'Cash Flow item from an Investing Activities?",
        options: [
          { key: 'a', text: 'Underwriting Commission' },
          { key: 'b', text: 'Trade Commission' },
          { key: 'c', text: 'Purchase of Goodwill' },
          { key: 'd', text: 'Interest on Long Term Borrowings' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 3',
        reasoning:
          'Purchase of Goodwill represents an acquisition of a long-term intangible asset and is classified under Cash Flow from Investing Activities.',
      },
    ],
  },
  {
    id: 'case-9',
    caseNumber: 9,
    title: 'G Ltd.: Change in Method of Inventory Valuation',
    applicableStandards: ['AS 2 (Valuation of Inventories)', 'AS 1 (Disclosure of Accounting Policies)'],
    scenarioParagraphs: [
      'In the books of G Ltd., closing inventory as at 31.03.2024 amounts to ` 10,40,000 (on the basis of FIFO method).',
      'The company decides to change from FIFO method to weighted average method for ascertaining the cost of inventory for 31.3.2024. On the basis of weighted average method, closing inventory as on 31.03.2024 amounts to ` 8,80,000. Realisable value of the inventory as on 31.03.2024 amounts to ` 12,00,000.',
    ],
    questions: [
      {
        id: 'case9-q1',
        questionNumber: 1,
        questionText:
          'What will be the value of inventory in the books and what disclosure should be given in the financial statement on 31.3.2024?',
        options: [
          {
            key: 'a',
            text: 'The value of inventory will be ` 8,80,000 and the fact that the valuation method has changed to be disclosed in the financial statement.',
          },
          {
            key: 'b',
            text: 'The value of inventory will be ` 12,00,000, and full disclosure with the amount the valuation method has changed to be disclosed in the financial statement.',
          },
          {
            key: 'c',
            text: 'The value of inventory will be ` 12,00,000, and the fact that valuation method has changed to be disclosed in the financial statement.',
          },
          {
            key: 'd',
            text: 'The value of inventory will be ` 8,80,000, and full disclosure with the amount the valuation method has changed to be disclosed in the financial statement.',
          },
        ],
        correctKey: 'd',
        marks: 2,
        accountingStandard: 'AS 2 / AS 1',
        reasoning:
          'Inventory is valued at lower of cost (` 8,80,000 under weighted average) and NRV (` 12,00,000). As per AS 1 and AS 2, any change in accounting policy with a material financial effect must be disclosed along with the effect in the financial statements.',
      },
    ],
  },
  {
    id: 'case-10',
    caseNumber: 10,
    title: 'Gray Ltd.: Construction Contract Variation & Percentage of Completion',
    applicableStandards: ['AS 7 (Construction Contracts)'],
    scenarioParagraphs: [
      'Gray Ltd. is engaged in the business of constructing towers since 15 years. Alpha Ltd gave a contract to Gray Ltd. for construction of 2 towers.',
      'Contract price for 2 towers is agreed at ` 160 crore. (each tower has contract price of ` 80 crore). At the time of contract, Gray Ltd has estimated that the contract cost will be ` 141 crore. It is assumed that construction will be completed in 3 years.',
      'At the end of year 1, Gray Ltd has revised the construction cost to ` 150 crore.',
      'At the beginning of year 2, the customer has requested for a variation in the contract. Customer now wants construction of 3 towers instead of 2 towers. The term of the contract will not change, construction of all the towers will be completed simultaneously. As a result of this variation, contract price will increase by ` 80 crore and contract costs will increase by ` 75 crore.',
      'Gray Ltd has decided to measure the stage of completion on the basis of the proportion of contract costs incurred to the total estimated contract costs. Contract costs incurred at the end of each year is: Year 1: ` 35.25 crore. Year 2: ` 148.5 crore (including unused material of ` 2.25 crore). Year 3: Total Revised contract costs.',
    ],
    questions: [
      {
        id: 'case10-q1',
        questionNumber: 1,
        questionText:
          'What is the stage of completion of contract on the basis of proportion of contract costs incurred to the total estimated contract costs at the end of year 1 and Year 2 respectively?',
        options: [
          { key: 'a', text: 'Year 1: 23.5 % and Year 2: 66%' },
          { key: 'b', text: 'Year 1: 23.5 % and Year 2: 65%' },
          { key: 'c', text: 'Year 1: 25 % and Year 2: 66%' },
          { key: 'd', text: 'Year 1: 25 % and Year 2: 65%' },
        ],
        correctKey: 'b',
        marks: 2,
        accountingStandard: 'AS 7',
        reasoning:
          'Year 1: Cost = ` 35.25 cr / ` 150 cr = 23.5%. Year 2: Cumulative cost = ` 148.50 cr - ` 2.25 cr = ` 146.25 cr. Revised total cost = ` 150 + ` 75 = ` 225 cr. Stage of completion = 146.25 / 225 = 65%.',
      },
      {
        id: 'case10-q2',
        questionNumber: 2,
        questionText: 'What is the amount of the profit to be recognized at the end of Year 1?',
        options: [
          { key: 'a', text: '` 2.35 crore' },
          { key: 'b', text: '` 44.75 crore' },
          { key: 'c', text: '` 4.75 crore' },
          { key: 'd', text: '` 21 crore' },
        ],
        correctKey: 'a',
        marks: 2,
        accountingStandard: 'AS 7',
        reasoning:
          'Revenue recognized at end of Year 1 = ` 160 crore × 23.5% = ` 37.60 crore. Less cost incurred ` 35.25 crore = Profit of ` 2.35 crore.',
      },
      {
        id: 'case10-q3',
        questionNumber: 3,
        questionText: 'What is the amount of contract revenue recognized in each year of contract?',
        options: [
          { key: 'a', text: 'Year 1: ` 80 crore, Year 2: ` 80 crore and Year 3: ` 80 crore' },
          { key: 'b', text: 'Year 1: ` 40 crore, Year 2: ` 116 crore and Year 3: ` 84 crore' },
          { key: 'c', text: 'Year 1: ` 37.60 crore, Year 2: ` 118.40 crore and Year 3: ` 84 crore' },
          { key: 'd', text: 'Year 1: ` 37.60 crore, Year 2: ` 120.80 crore and Year 3: ` 81.60 crore' },
        ],
        correctKey: 'c',
        marks: 2,
        accountingStandard: 'AS 7',
        reasoning:
          'Year 1: ` 160 cr × 23.5% = ` 37.60 crore. Year 2: (` 240 cr × 65%) - ` 37.60 cr = ` 156.00 cr - ` 37.60 cr = ` 118.40 crore. Year 3: ` 240 cr - ` 37.60 cr - ` 118.40 cr = ` 84.00 crore.',
      },
    ],
  },
];
