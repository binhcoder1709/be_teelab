import { Body, Controller, Headers, HttpCode, Param, Post, UnauthorizedException } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentDto } from "../../dto/comment/comment.dto";

@Controller("/comment")
export class CommentController {
  constructor(private readonly commentService: CommentService) {
  }

  @Post("/create/:product_id")
  @HttpCode(201)
  async createCommentController(@Headers("authorization") header: string, @Body() data: CommentDto, @Param("product_id") productId: string) {
    const tokenSplit = header.split(" ")[1];
    if (!tokenSplit) {
      throw new UnauthorizedException("Token not found");
    }
    return await this.commentService.createCommentService(data, tokenSplit, productId);
  }
}