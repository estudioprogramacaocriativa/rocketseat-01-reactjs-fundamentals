import { format, formatDistanceToNow } from 'date-fns'
import { Comment } from './Comment.jsx';
import { useState } from 'react';

import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt } = props) {
    const [comments, setComments] = useState([
        'Post very good bro'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment) {
        const newCommentsList = comments.filter(item => item !== comment)

        setComments(newCommentsList)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo e obrigatorio')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.cover}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <div className={styles.button}>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </div>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}