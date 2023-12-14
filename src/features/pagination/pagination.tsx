import cn from 'classnames';
import ReactPagination from 'rc-pagination/lib/Pagination';
import { ReactNode, useState } from 'react';

import { ChevronLeftURL } from 'assets';
import { BREAKPOINTS } from 'shared/constants';
import { useMediaQuery } from 'shared/hooks';

interface RenderCustomButtonsParams {
  page: number;
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
  element: ReactNode;
  currentPageNumber: number;
  total: number;
}

const renderCustomButtons = ({ page, type, element, currentPageNumber, total }: RenderCustomButtonsParams) => {
  const isActive = page === currentPageNumber;
  const isPrevDisabled = currentPageNumber === 1;
  const isLastDisabled = currentPageNumber === total;
  const commonButtonsStyles = 'flex h-[34px] w-[34px] items-center justify-center rounded duration-300';

  switch (type) {
    case 'page':
      return (
        <button
          className={cn(
            commonButtonsStyles,
            isActive
              ? 'pagination-active-button bg-white text-washed-black hover:bg-tangled-web'
              : 'pagination-inactive-button bg-dark-elf text-white-smoke hover:bg-night-black',
          )}
        >
          {page}
        </button>
      );

    case 'prev':
      return (
        <button
          className={cn(
            commonButtonsStyles,
            'mr-[5px]',
            isPrevDisabled ? 'bg-mortar-grey' : 'pagination-inactive-button bg-white hover:bg-tangled-web',
          )}
        >
          <img
            src={ChevronLeftURL}
            alt="chevron left"
            className={cn('fill-night-sky', { 'opacity-60': isPrevDisabled })}
          />
        </button>
      );

    case 'next':
      return (
        <button
          className={cn(
            commonButtonsStyles,
            'ml-[5px]',
            isLastDisabled ? 'bg-mortar-grey' : 'pagination-inactive-button bg-white hover:bg-tangled-web',
          )}
        >
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
        <button
          className={cn(
            commonButtonsStyles,
            'pagination-inactive-button bg-dark-elf text-white-smoke hover:bg-night-black',
          )}
        >
          ...
        </button>
      );

    default:
      return element;
  }
};

interface FetchMoreArgs {
  variables: {
    pageNumber: number;
  };
}

interface Props {
  total?: number | null;
  fetchMore: ({ variables }: FetchMoreArgs) => void;
}

export const Pagination = ({ total, fetchMore }: Props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const sm = useMediaQuery(BREAKPOINTS.sm);

  const changePageNumber = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
    fetchMore({ variables: { pageNumber } });
  };

  return (
    <div className="flex items-center justify-center">
      {total && (
        <ReactPagination
          showTitle={false}
          pageSize={1}
          showPrevNextJumpers={sm}
          showLessItems={!sm}
          total={total}
          current={currentPageNumber}
          onChange={changePageNumber}
          className="flex items-center gap-[10px]"
          itemRender={(page, type, element) => renderCustomButtons({ page, type, element, currentPageNumber, total })}
        />
      )}
    </div>
  );
};
