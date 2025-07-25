export function SpecilSideBar({setSortSpecial}){
   // Hnadle Change
  function changeStateSortCategory(e) {
    setSortSpecial(e.target.id);
  }

  return (
    <div className="special-sort">
      <h2 className="title-sort">فلتره حسب السعر</h2>
      <div className="form-groub">
        <input
          onChange={changeStateSortCategory}
          type="radio"
          name="sort"
          id="all"
        />
        <label htmlFor="all">بدون فلتره</label>
      </div>
      <div className="form-groub">
        <input
          onChange={changeStateSortCategory}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low">ترتيب من الارخص الي الاغلي</label>
      </div>
      <div className="form-groub">
        <input
          onChange={changeStateSortCategory}
          type="radio"
          name="sort"
          id="higt"
        />
        <label htmlFor="higt">ترتيب من الاغلي الي الارخص</label>
      </div>
    </div>
  );
}