
export function Pagination({ pages, currentPage, setCurrentPage }) {
  let generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  let page = generatedPages.map((p) => {
    return (
      <div onClick={() => setCurrentPage(p)} key={p} className={currentPage === p ? 'page active' : 'page'}>
        {p}
      </div>
    );
  });

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {page}
      <button
        disabled={currentPage === generatedPages.length}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        <i className="bi bi-arrow-left"></i>
        التالي
      </button>
    </div>
  );
}
