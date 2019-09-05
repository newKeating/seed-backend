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

const BCRYPT_ROUNDS = 10;

@Entity()
@Unique(["email"])
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text", nullable: true })
  facebookId: string;

  @Column({ type: "text" })
  @IsEmail()
  email: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", nullable: true })
  password: string;

  @Column({ type: "boolean", default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn() updatedAt: string;

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
