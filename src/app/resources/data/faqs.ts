type FAQQuestion = {
  question: string;
  answer: string;
  extra?: string[];
};

type FAQCategory = {
  category: string;
  questions: FAQQuestion[];
};

export const faqs: FAQCategory[] = [
  {
    category: "Incentives",
    questions: [
      {
        question: "Q: Can I change my incentive?",
        answer:
          "No, you cannot change your incentive since students are given the option to select their incentive at the start at the semester.",
      },
      {
        question: "Q: When will my incentive be disbursed",
        answer:
          "As long as you are eligible, incentives are disbursed in the first week of each month.",
      },
      {
        question: "Q: I lost my Meal Card! Can I get a new one?",
        answer:
          "Yes, you can receive ONE (1) replacement card from the PSP Office.",
      },
      {
        question: "Q: Do my funds roll over?",
        answer:
          "No, funds expire at the end of each month. Please refer to the eligibility email since dates differ between months. Please use or redeem your funds before the expiration date.",
      },
    ],
  },
  {
    category: "Requirements",
    questions: [
      {
        question:
          "Q: If I can't schedule a meeting with my Promise Counselor by the deadline date, can I meet with someone else and still have it count?",
        answer:
          "No. Please see your assigned PSP Counselor. If you are required to meet with your counselor this month but are unable to, please schedule for the following month and attend a PEO instead.",
      },
      {
        question: "Q: When are requirements due?",
        answer:
          "Requirement are due at the end of each month but may differ due to scheduled breaks & holidays. Please refer to the student handbook to see when the monthly deadlines are for your support level.",
      },
    ],
  },
  {
    category: "Contact Information",
    questions: [
      {
        question: "Q: Can I meet with someone to discuss my PSP requirements?",
        answer: "• Yes, you can!",
          extra: [
            "• Mikayla (Program Services Coordinator) Calendly Link: ",
            "https://calendly.com/mikaylabalan/30min",
            "• Annalise (Retention Specialist) Calendly Link:",
            "https://calendly.com/harlowannalise-smccd/30min-check-in"
          ]
      },
      {
        question: "Q: Where can I find you?",
        answer: "• Building 19, Room 207",
        extra: [
          "• Monday-Thursday 8:30am-4:30pm | Friday 8:30am-1:30pm",
          "• Email: skylinepromise@my.smccd.edu",
          "• Phone: 650-738-7190"
        ]
      }
    ],
  },
];
