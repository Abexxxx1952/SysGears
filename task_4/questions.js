export const questions = new Map([
  [
    "Start",
    {
      question: "What is your marital status?",
      answers: ["Single/Not Married", "Married", "Divorced", "Widower/Widower"],
      relatedQuestions: new Map([
        [
          "Single/Not Married",
          {
            question: "Are you currently in a serious relationship?",
            answers: ["Yes", "Not"],
            relatedQuestions: new Map([
              [
                "Yes",
                {
                  question: "Do you live with your partner?",
                  answers: ["Yes", "Not"],
                  relatedQuestions: new Map([
                    [
                      "Yes",
                      {
                        question: "How do you distribute shared finances?",
                        answers: [
                          "Joint budget for everything",
                          "Everyone pays their own expenses",
                          "There is a common fund for common goals",
                          "I find it difficult to answer",
                        ],
                        relatedQuestions: null,
                      },
                    ],
                  ]),
                },
              ],
              [
                "Not",
                {
                  question:
                    "Do you plan to actively seek a partner in the coming year?",
                  answers: ["Yes", "Not", "I find it difficult to answer"],
                  relatedQuestions: null,
                },
              ],
            ]),
          },
        ],

        [
          "Married",
          {
            question: "How long have you been married?",
            answers: [
              "Less than 1 year",
              "1-5 years",
              "5-10 years",
              "More than 10 years",
            ],
            relatedQuestions: new Map([
              [
                "Less than 1 year",
                {
                  question: "Have you celebrated your first anniversary yet?",
                  answers: [
                    "Yes, we had a party",
                    "They celebrated modestly",
                    "Not yet, but we are planning to",
                    "Didn't pay attention",
                  ],
                  relatedQuestions: null,
                },
              ],
              [
                "1-5 years",
                {
                  question:
                    "How often do you and your spouse spend time alone (dates, vacations without the kids)?",
                  answers: [
                    "Regularly, once a week/month",
                    "Rarely, due to work/business",
                    "Almost never",
                    "We don't have children, we are always together",
                  ],
                  relatedQuestions: null,
                },
              ],
              [
                "5-10 years",
                {
                  question:
                    "How often do you and your spouse spend time alone (dates, vacations without the kids)?",
                  answers: [
                    "Regularly, once a week/month",
                    "Rarely, due to work/business",
                    "Almost never",
                    "We don't have children, we are always together",
                  ],
                  relatedQuestions: null,
                },
              ],
              [
                "More than 10 years",
                {
                  question:
                    "What, in your opinion, is the main guarantee of a long and happy relationship?",
                  answers: [
                    "Mutual respect and trust",
                    "Ability to negotiate and compromise",
                    "Shared goals and development",
                    "Romance and attention to each other",
                  ],
                  relatedQuestions: null,
                },
              ],
            ]),
          },
        ],

        [
          "Divorced",
          {
            question: "How much time has passed since the divorce?",
            answers: ["Less than a year", "1-3 years", "More than 3 years"],
            relatedQuestions: new Map([
              [
                "Less than a year",
                {
                  question:
                    "What were the most difficult emotions you had to deal with after your divorce?",
                  answers: [
                    "Loneliness",
                    "Feelings of guilt or failure",
                    "Anger or resentment towards your partner",
                    "Anxiety and uncertainty about the future",
                  ],
                  relatedQuestions: null,
                  requiredQuestion: {
                    question: "Do you maintain contact with your ex-spouse?",
                    answers: [
                      "Yes, we remained friends",
                      "Only if necessary (for example, because of children)",
                      "No, we stopped communicating completely",
                    ],
                    relatedQuestions: null,
                  },
                },
              ],
              [
                "1-3 years",
                {
                  question: "Do you maintain contact with your ex-spouse?",
                  answers: [
                    "Yes, we remained friends",
                    "Only if necessary (for example, because of children)",
                    "No, we stopped communicating completely",
                  ],
                  relatedQuestions: null,
                },
              ],
              [
                "More than 3 years",
                {
                  question:
                    "How has your attitude towards marriage changed after this experience?",
                  answers: [
                    "I began to treat it more consciously and seriously",
                    "I stopped seeing the point in it",
                    "I treat him calmly, without illusions",
                    "I still believe in marriage and am looking for a new relationship",
                  ],
                  relatedQuestions: null,
                  requiredQuestion: {
                    question: "Do you maintain contact with your ex-spouse?",
                    answers: [
                      "Yes, we remained friends",
                      "Only if necessary (for example, because of children)",
                      "No, we stopped communicating completely",
                    ],
                    relatedQuestions: null,
                  },
                },
              ],
            ]),
          },
        ],

        [
          "Widower/Widower",
          {
            question: "Are you ready to discuss this topic?",
            answers: ["Yes", "Not"],
            relatedQuestions: new Map([
              [
                "Yes",
                {
                  question: "What helped you most cope with the loss?",
                  answers: [
                    "Support from family and friends",
                    "Work and distraction",
                    "Professional help (psychologist)",
                    "Time",
                    "Faith/spirituality",
                  ],
                  relatedQuestions: null,
                },
              ],
            ]),
          },
        ],
      ]),
    },
  ],
]);
