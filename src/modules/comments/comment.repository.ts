import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Comment } from "../../entities/comment.entity";
import { UserRepository } from "../users/user.repository";
import { ProductRepository } from "../products/product.repository";

@Injectable()
export class CommentRepository {
  private commentRepos: Repository<Comment>;

  constructor(@Inject("DATA_SOURCE") private dataSource: DataSource, private readonly userRepos: UserRepository, private readonly productRepos: ProductRepository) {
    this.commentRepos = dataSource.getRepository(Comment);
  }

  async createOne(data: Partial<Comment>, userId: string, productId: string) {
    try {
      const user = await this.userRepos.findById(userId);
      const product = await this.productRepos.findById(productId);
      const newComment = new Comment();
      newComment.content = data.content;
      newComment.user = user;
      newComment.product = product;
      return await this.commentRepos.save(newComment);
    } catch (error) {
      throw new InternalServerErrorException("Internal server error");
    }
  }
}