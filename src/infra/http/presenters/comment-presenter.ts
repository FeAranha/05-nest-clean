import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Comment } from '@/domain/forum/enterprise/entities/comment'

interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date | null
}

export class CommentPresenter {
  static toHTTP(comment: Comment<CommentProps>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }
  }
}
