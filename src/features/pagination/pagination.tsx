import cn from 'classnames';
import ReactPagination from 'rc-pagination/lib/Pagination';
import { ReactNode, useState } from 'react';

import { ChevronLeftURL } from '../../assets';

const defaultNumberPage = 1;
const total = 10;

interface RenderCustomButtonsParams {
  page: number;
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
  element: ReactNode;
  currentPageNumber: number;
}

const renderCustomButtons = ({ page, type, element, currentPageNumber }: RenderCustomButtonsParams) => {
  const isActive = page === currentPageNumber;
  const isPrevDisabled = currentPageNumber === defaultNumberPage;
  const isLastDisabled = currentPageNumber === total;
  const commonButtonsStyles = 'flex h-[34px] w-[34px] items-center justify-center rounded';

  switch (type) {
    case 'page':
      return (
        <button
          className={cn(
            commonButtonsStyles,
            isActive
              ? 'pagination-active-button text-washed-black bg-white'
              : 'pagination-inactive-button bg-dark-elf text-white-smoke',
          )}
        >
          {page}
        </button>
      );

    case 'prev':
      return (
        <button className={cn(commonButtonsStyles, 'mr-[5px]', isPrevDisabled ? 'bg-mortar-grey' : 'bg-white')}>
          <img
            src={ChevronLeftURL}
            alt="chevron left"
            className={cn('fill-night-sky', { 'opacity-60': isPrevDisabled })}
          />
        </button>
      );

    case 'next':
      return (
        <button className={cn(commonButtonsStyles, 'ml-[5px]', isLastDisabled ? 'bg-mortar-grey' : 'bg-white')}>
          <img
            src={ChevronLeftURL}
            alt="chevron left"
            className={cn('rotate-180 fill-night-sky', { 'opacity-60': isLastDisabled })}
          />
        </button>
      );

    case 'jump-prev':
    case 'jump-next':
      return (
        <button className={cn(commonButtonsStyles, 'pagination-inactive-button bg-dark-elf text-white-smoke')}>
          ...
        </button>
      );

    default:
      return element;
  }
};

export const Pagination = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(defaultNumberPage);
  const changePageNumber = (pageNumber: number) => setCurrentPageNumber(pageNumber);

  return (
    <ReactPagination
      showTitle={false}
      pageSize={1}
      total={total}
      current={currentPageNumber}
      onChange={changePageNumber}
      className="flex items-center gap-[10px]"
      itemRender={(page, type, element) => renderCustomButtons({ page, type, element, currentPageNumber })}
    />
  );
};
