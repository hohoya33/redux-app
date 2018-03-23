//선택한 책은 액션 생성자고 액션반환이 필요하다. 타입 프로퍼티는 오브젝트이다.
export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}