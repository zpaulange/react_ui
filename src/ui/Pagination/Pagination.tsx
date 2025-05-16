import styles from "./pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPages(current: number, total: number) {
  const pages = [];

  if (total <= 4) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 2) {
      pages.push(1, 2, 3, '...', total);
    } else if (current >= total - 1) {
      pages.push(1, '...', total - 2, total - 1, total);
    } else {
      pages.push(1, '...', current, '...', total);
    }
  }

  return pages;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;
  const pages = getPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination_left}>
        <ul className={styles.pagination_left_list}>
          <li className={styles.pagination_left_item}>
            <a
              href="#"
              className={styles.pagination_left_link}
              onClick={e => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
            >
              <span>{'<'}</span>
            </a>
          </li>

          {pages.map((page, idx) => (
            <li key={idx} className={styles.pagination_left_item}>
              {page === '...' ? (
                <span className={styles.pagination_left_link}>...</span>
              ) : (
                <a
                  href="#"
                  className={`${styles.pagination_left_link} ${page === currentPage ? styles.btn_active : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    onPageChange(Number(page));
                  }}
                >
                  <span>{page}</span>
                </a>
              )}
            </li>
          ))}

          <li className={styles.pagination_left_item}>
            <a
              href="#"
              className={styles.pagination_left_link}
              onClick={e => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
            >
              <span>{'>'}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.pagination_right}></div>
    </div>
  );
}
