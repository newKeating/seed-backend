import { Resolvers } from "../../../types/resolvers";
import {
  CreateRegularUserMutationArgs,
  CreateRegularUserResponse
} from "../../../types/graph";
import User from "../../../entities/User";
import Interest from "../../../entities/Interest";
import { generateToken } from "../../../utils";
const resolvers: Resolvers = {
  Mutation: {
    createRegularUser: async (
      _,
      args: CreateRegularUserMutationArgs
    ): Promise<CreateRegularUserResponse> => {
      const {
        // firebaseId,
        email,
        password,
        name,
        phoneNumber,
        interests,
        // birthDate,
        sex
      } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "이메일이 이미 존재합니다",
            token: null
          };
        }
        const interestFields = interests.map(interest => {
          return {
            field: interest
          };
        });
        const interestsFromDB = await Interest.find({
          where: interestFields,
          relations: ["users"]
        });

        // console.log("interestsFromDB", interestsFromDB);

        const newUser = await User.create({
          // firebaseId,
          email,
          password,
          name,
          phoneNumber,
          // birthDate,
          sex
        }).save();
        console.log("newUser", newUser);
        await interestsFromDB.forEach(async interest => {
          await interest.users.push(newUser);
          await interest.save();
        });
        const token = generateToken(newUser.id);
        return {
          ok: true,
          error: null,
          token
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
