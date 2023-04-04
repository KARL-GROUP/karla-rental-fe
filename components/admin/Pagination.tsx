const Pagination = ({ items, pageSize, currentPage, onPageChange }: any) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div className="flex justify-center ">
        <ul className="flex gap-10 items-center" >
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "border-2 border-[#00A5E7] text-[#00A5E7] px-4 py-2 rounded font-semibold" : "flex gap-4"
              }
            >
              <a onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   export default Pagination;