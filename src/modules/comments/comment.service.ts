import { Injectable } from "@nestjs/common";
import { CommentRepository } from "./comment.repository";
import { CommentDto } from "../../dto/comment/comment.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class CommentService {
  constructor(private readonly commentRepos: CommentRepository, private readonly jwtService: JwtService) {
  }

  async createCommentService(data: CommentDto, token: string, productId: string) {
    const payloadToken = this.jwtService.decode(token);
    return await this.commentRepos.createOne(data, payloadToken.user_id, productId);
  }
}