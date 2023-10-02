import styled from "styled-components";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

// "Magic Number"
const RESULTS_PER_PAGE = 10;

/* 
Pagination component should receive the number of results - count
Create event handler for each button
Get current page from the URL - searchParams.get('page')
Get page count - count / number of results per page
*/
export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / RESULTS_PER_PAGE);

  function setPageParams(value) {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    setPageParams(next);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    setPageParams(prev);
  }

  // Do not return Pagination if only one page of results
  if (pageCount <= 1) return null;

  // return
  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * RESULTS_PER_PAGE + 1} </span>to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * RESULTS_PER_PAGE}{" "}
        </span>
        of <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span> Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <HiChevronRight /> <span> Next</span>
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
