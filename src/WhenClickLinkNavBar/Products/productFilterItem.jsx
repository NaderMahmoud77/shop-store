export function ProductFilterItem({filterItem , setFilterItem}) {


    function handleFilter(e){
        setFilterItem(e.target.id)
    }

  return (
    <div className="product-filter-item">
      <div className="form-groub">
        <input onChange={handleFilter} type="radio" name="filter" id="all" />
        <label className="filter-item-lable" htmlFor="all">
          بدون فلتره
        </label>
      </div>

      <div className="form-groub">
        <input onChange={handleFilter} type="radio" name="filter" id="laptop" />
        <label className="filter-item-lable" htmlFor="laptop">
          لابتوب
        </label>
      </div>

      <div className="form-groub">
        <input onChange={handleFilter} type="radio" name="filter" id="phone" />
        <label className="filter-item-lable" htmlFor="phone">
          موبايل
        </label>
      </div>
    </div>
  );
}
