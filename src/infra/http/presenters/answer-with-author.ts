import { AnswerWithAuthor } from "@/domain/forum/enterprise/entities/value-objects/answer-with-author";

export class AnswerWithAuthorPresenter {
  static toHTTP(answerWithAuthor: AnswerWithAuthor) {
    return{
      answerId: answerWithAuthor.answerId.toString(),
      content: answerWithAuthor.content,
      authorId: answerWithAuthor.authorId.toString(),
      author: answerWithAuthor.author,
      createdAt: answerWithAuthor.createdAt,
      updatedAt: answerWithAuthor.updatedAt,
    }
  }
}