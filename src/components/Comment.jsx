import styles from './Comments.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {useState} from "react";

export function Comment({ content, onDeleteComment } = props) {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => state + 1)
    }

    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/6819427?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel dos Santos</strong>
                            <time>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}