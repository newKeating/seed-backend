import bcrypt from "bcrypt";
import { IsEmail, IsPhoneNumber } from "class-validator";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Unique
} from "typeorm";
import { Sex as SexType } from "../types/graph";
// import { Sex } from "../types/types";
import Interest from "./Interest";
import UserLike from "./UserLike";
import QuestionLike from "./QuestionLike";
import AnswerLike from "./AnswerLike";
import Payment from "./Payment";

const BCRYPT_ROUNDS = 10;

@Entity()
@Unique(["email"])
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text", nullable: true })
  firebaseId: string;

  @Column({ type: "text", nullable: true })
  facebookId: string;

  @Column({ type: "text" })
  @IsEmail()
  email: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", nullable: true })
  password: string;

  @Column({ type: "enum", enum: ["MALE", "FEMALE"] })
  sex: SexType;

  @Column({ type: "text" })
  @IsPhoneNumber("KR")
  phoneNumber: string;

  @Column({ type: "boolean", default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: "text", nullable: true })
  birthDate: string;

  @Column({ type: "text", nullable: true })
  profilePhoto: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "integer", default: 20 })
  mimimumCredit: number;

  @Column({ type: "boolean", default: false })
  deleted: boolean;

  @ManyToMany(type => Interest, interest => interest.users)
  interests: Interest[];

  @ManyToOne(type => UserLike, userLike => userLike.user)
  likes: UserLike[];

  @ManyToOne(type => UserLike, userLike => userLike.likedUser)
  myUserLikes: UserLike[];

  @ManyToOne(type => QuestionLike, questionLike => questionLike.user)
  myQuestionLikes: QuestionLike[];

  @ManyToOne(type => AnswerLike, answerLike => answerLike.user)
  myAnswerLikes: AnswerLike[];

  @OneToOne(type => Payment)
  @JoinColumn()
  payment: Payment;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  get age(): number {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    const age = today.getFullYear() - birthDate.getFullYear() + 1;
    return age;
  }

  get likeCount(): number {
    const count = this.likes.length;
    return count;
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }
}

export default User;
