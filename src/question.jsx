const questions = [
  // Demographics (score-neutral)
  {
    id: 1,
    question: "Age",
    options: [
      { value: 1, text: "18-24", weight: 0 },
      { value: 2, text: "25-34", weight: 0 },
      { value: 3, text: "35-44", weight: 0 },
      { value: 4, text: "45-54", weight: 0 },
      { value: 5, text: "55+",   weight: 0 },
    ]
  },
  {
    id: 2,
    question: "Gender",
    options: [
      { value: 1, text: "Female",               weight: 0 },
      { value: 2, text: "Male",                 weight: 0 },
      { value: 3, text: "Unknown/Non-Binary",   weight: 0 },
    ]
  },
  {
    id: 3,
    question: "Country",
    options: [
      { value: 1, text: "United States",          weight: 0 },
      { value: 2, text: "Other / Another country",weight: 0 },
    ]
  },
  {
    id: 4,
    question: "If you live in the United States, which state or territory do you live in?",
    options: [
      { value: 1, text: "California",                 weight: 0 },
      { value: 2, text: "Texas",                      weight: 0 },
      { value: 3, text: "New York",                   weight: 0 },
      { value: 4, text: "Florida",                    weight: 0 },
      { value: 5, text: "Other US state/territory",   weight: 0 },
      { value: 6, text: "Prefer not to say",          weight: 0 },
    ]
  },

  // Work & health background
  {
    id: 5,
    question: "Are you self-employed?",
    options: [
      { value: 1, text: "Yes",     weight: 0 },
      { value: 2, text: "No",      weight: 0 },
      { value: 3, text: "Unknown", weight: 1 },
    ]
  },
  {
    id: 6,
    question: "Do you have a family history of mental illness?",
    options: [
      { value: 1, text: "Yes", weight: 1 },
      { value: 2, text: "No",  weight: 0 },
    ]
  },
  {
    id: 7,
    question: "Have you sought treatment for a mental health condition?",
    options: [
      { value: 1, text: "Yes", weight: 1 },
      { value: 2, text: "No",  weight: 0 },
    ]
  },
  {
    id: 8,
    question: "If you have a mental health condition, do you feel that it interferes with your work?",
    options: [
      { value: 1, text: "Never",   weight: 0 },
      { value: 2, text: "Rarely",  weight: 1 },
      { value: 3, text: "Sometimes", weight: 1 },
      { value: 4, text: "Often",   weight: 2 },
      { value: 5, text: "Unknown", weight: 1 },
    ]
  },

  // Company context
  {
    id: 9,
    question: "How many employees does your company or organization have?",
    options: [
      { value: 1, text: "1-5",             weight: 0 },
      { value: 2, text: "6-25",            weight: 0 },
      { value: 3, text: "26-100",          weight: 0 },
      { value: 4, text: "100-500",         weight: 0 },
      { value: 5, text: "500-1000",        weight: 0 },
      { value: 6, text: "More than 1000",  weight: 0 },
    ]
  },
  {
    id: 10,
    question: "Do you work remotely (outside of an office) at least 50% of the time?",
    options: [
      { value: 1, text: "Yes", weight: 0 },
      { value: 2, text: "No",  weight: 0 },
    ]
  },
  {
    id: 11,
    question: "Is your employer primarily a tech company/organization?",
    options: [
      { value: 1, text: "Yes", weight: 0 },
      { value: 2, text: "No",  weight: 0 },
    ]
  },

  // Employer policies & awareness
  {
    id: 12,
    question: "Does your employer provide mental health benefits?",
    options: [
      { value: 1, text: "Yes",        weight: 0 },
      { value: 2, text: "No",         weight: 2 },
      { value: 3, text: "Don't know", weight: 1 },
    ]
  },
  {
    id: 13,
    question: "Do you know the options for mental health care your employer provides?",
    options: [
      { value: 1, text: "Yes",       weight: 0 },
      { value: 2, text: "No",        weight: 2 },
      { value: 3, text: "Not sure",  weight: 1 },
    ]
  },
  {
    id: 14,
    question: "Has your employer ever discussed mental health as part of an employee wellness program?",
    options: [
      { value: 1, text: "Yes",        weight: 0 },
      { value: 2, text: "No",         weight: 1 },
      { value: 3, text: "Don't know", weight: 1 },
    ]
  },
  {
    id: 15,
    question: "Does your employer provide resources to learn more about mental health issues and how to seek help?",
    options: [
      { value: 1, text: "Yes",        weight: 0 },
      { value: 2, text: "No",         weight: 2 },
      { value: 3, text: "Don't know", weight: 1 },
    ]
  },
  {
    id: 16,
    question: "Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment resources?",
    options: [
      { value: 1, text: "Yes",        weight: 0 },
      { value: 2, text: "No",         weight: 2 },
      { value: 3, text: "Don't know", weight: 1 },
    ]
  },
  {
    id: 17,
    question: "How easy is it for you to take medical leave for a mental health condition?",
    options: [
      { value: 1, text: "Yes",        weight: 0 }, // interpreting 'Yes' = easy
      { value: 2, text: "No",         weight: 2 }, // 'No' = not easy
      { value: 3, text: "Don't know", weight: 1 },
    ]
  },

  // Stigma & willingness to discuss
  {
    id: 18,
    question: "Do you think that discussing a mental health issue with your employer would have negative consequences?",
    options: [
      { value: 1, text: "No",    weight: 0 },
      { value: 2, text: "Maybe", weight: 1 },
      { value: 3, text: "Yes",   weight: 2 },
    ]
  },
  {
    id: 19,
    question: "Do you think that discussing a physical health issue with your employer would have negative consequences?",
    options: [
      { value: 1, text: "No",         weight: 0 },
      { value: 2, text: "Don't know", weight: 1 },
      { value: 3, text: "Yes",        weight: 2 },
    ]
  },
  {
    id: 20,
    question: "Would you be willing to discuss a mental health issue with your coworkers?",
    options: [
      { value: 1, text: "Yes",            weight: 0 },
      { value: 2, text: "Some of them",   weight: 1 },
      { value: 3, text: "No",             weight: 2 },
    ]
  },
  {
    id: 21,
    question: "Would you be willing to discuss a mental health issue with your direct supervisor(s)?",
    options: [
      { value: 1, text: "Yes",            weight: 0 },
      { value: 2, text: "Some of them",   weight: 1 },
      { value: 3, text: "No",             weight: 2 },
    ]
  },
  {
    id: 22,
    question: "Would you bring up a mental health issue with a potential employer in an interview?",
    options: [
      { value: 1, text: "Yes",   weight: 0 },
      { value: 2, text: "Maybe", weight: 1 },
      { value: 3, text: "No",    weight: 1 },
    ]
  },
  {
    id: 23,
    question: "Would you bring up a physical health issue with a potential employer in an interview?",
    options: [
      { value: 1, text: "Yes",   weight: 0 },
      { value: 2, text: "Maybe", weight: 1 },
      { value: 3, text: "No",    weight: 1 },
    ]
  },
  {
    id: 24,
    question: "Do you feel that your employer takes mental health as seriously as physical health?",
    options: [
      { value: 1, text: "Yes",        weight: 0 },
      { value: 2, text: "Don't know", weight: 1 },
      { value: 3, text: "No",         weight: 2 },
    ]
  },
  {
    id: 25,
    question: "Have you heard of or observed negative consequences for coworkers with mental health conditions in your workplace?",
    options: [
      { value: 1, text: "No",  weight: 0 },
      { value: 2, text: "Yes", weight: 2 },
    ]
  },
];

export default questions;
