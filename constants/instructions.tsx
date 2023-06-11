export type InstructionType = {
  title: string;
  description: string;
};

export const submitInstructions: Array<InstructionType> = [
  {
    title: "Fill in the problem description",
    description:
      "Provide a clear and concise description of the problem you are facing in your everyday life. Be specific and provide any relevant details that can help others understand the issue.",
  },
  {
    title: "Enter your email",
    description:
      "Provide your email address to submit the problem. This will allow us to contact you regarding the status or resolution of your problem statement.",
  },
  {
    title: "Suggest a solution ( Optional )",
    description:
      "If you have any ideas or suggestions on how the problem can be solved using technology, you can provide them in this optional field. ",
  },
  {
    title: "Submit the problem",
    description:
      "Click the 'Submit' button to share your problem statement with the community. Once submitted, it will be visible to other users who are looking for project ideas or problem statements to solve. ",
  },
];

export const solveInstructions: Array<InstructionType> = [
  {
    title: "Browse problem statements",
    description:
      "View all the problem statements submitted by users. Browse through the list to find a problem that interests you or aligns with your skills or interests.",
  },
  {
    title: "Choose a problem",
    description:
      "Select a problem that you would like to work on. If a problem is already marked as 'In Progress' it means someone else is already working on it. You can choose to work on the same problem or select a different one based on your preference.",
  },
  {
    title: "Share your solution",
    description:
      "Once you have completed working on the problem and have a solution, you can share it with the community. Provide a link or any relevant information about your solution in the portal against the specific problem statement.",
  },
  {
    title: "Notify the problem poster",
    description:
      "After sharing your solution, the user who posted the problem will receive an email notification informing them that their problem has been solved. This helps them stay updated on the progress and resolution of their submitted problem.",
  },
  {
    title: "Mark the problem as 'Closed' (Submitter only)",
    description:
      "Only the user who submitted the problem can mark it as 'Closed' after reviewing and accepting a solution. This step indicates that the problem has been resolved and no further contributions are needed.",
  },
];
