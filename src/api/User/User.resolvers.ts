import User from "../../entities/User";

export default {
  User: {
    // age: async ({ id }) => {
    //   const birthDate = await prisma.user({ id }).birthDate();
    //   const age = getAge(birthDate);
    //   return age;
    // },
    interests: async ({ id }) => {
      const user = await User.findOne(id, { relations: ["interests"] });
      let interests;
      if (user && user.interests.length > 0) {
        interests = user.interests;
      }
      return interests;
    }
    // likes: ({ id }) => prisma.user({ id }).likes(),
    // likeCount: async ({ id }) => {
    //   const likes = await prisma.user({ id }).likes();
    //   return likes.length;
    // },
    // myUserLikes: ({ id }) => prisma.user({ id }).myUserLikes(),
    // myQuestionLikes: ({ id }) => prisma.user({ id }).myQuestionLikes(),
    // myAnswerLikes: ({ id }) => prisma.user({ id }).myAnswerLikes(),
    // createdQuestions: ({ id }) => Question.find({ "questioner.id": id }),
    // createdAnswers: ({ id }) => Answer.find({ "answerer.id": id }),
    // sentRequests: ({ id }) => Request.find({ "sender.id": id }),
    // receivedRequests: ({ id }) => Request.find({ "receiver.id": id }),
    // createdPosts: ({ id }) => prisma.user({ id }).createdPosts(),
    // createdComments: ({ id }) => prisma.user({ id }).createdComments(),
    // payment: ({ id }) => prisma.user({ id }).payment()
  }
};
