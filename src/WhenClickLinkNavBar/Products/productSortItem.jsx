export function ProductSortItem({setSortItem}) {

    function handleSort(e){
        setSortItem(e.target.id)
    }

  return (
    <div className="product-sort-item">
      <div className="form-groub">

        <input onChange={handleSort} type="radio" name="sort" id="noSort" />
        <label htmlFor="noSort" >
          بدون ترتيب
        </label>

      </div>
      <div className="form-groub">
        <input onChange={handleSort} id="low" type="radio" name="sort" />
        <label htmlFor="low">
          اقل سعر
        </label>
      </div>
      <div className="form-groub">
        <input onChange={handleSort} id="higt" type="radio" name="sort" />
        <label htmlFor="higt" >
          اعلي سعر
        </label>
      </div>
    </div>
  );
}
