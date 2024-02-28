import { ethers } from 'ethers';
import Rating from './Rating';
import { useState } from 'react';

const ITEMS_PER_PAGE = 10;

const Section = ({ title, items, togglePop }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = () => {
        return currentItems.map((item, index) => (
            <div className='card' key={index} onClick={() => togglePop(item)}>
                <div className='card__image' style={{ position: 'relative' }}>
                    <button
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleArrowClick('prev')}
                    >
                        &lt;
                    </button>
                    <img src={item.image} alt="Item" />
                    <button
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleArrowClick('next')}
                    >
                        &gt;
                    </button>
                </div>
                <div className='card__info'>
                    <h3>{item.name}</h3>
                    <Rating value={item.rating} />
                    <p>{ethers.utils.formatUnits(item.cost.toString(), 'ether')} ETH</p>
                </div>
            </div>
        ));
    };

    const handleArrowClick = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && indexOfLastItem < items.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginationItems = () => {
        return Array(Math.ceil(items.length / ITEMS_PER_PAGE)).fill().map((_, index) => (
            <li key={index}>
                <button onClick={() => handlePagination(index + 1)}>{index + 1}</button>
            </li>
        ));
    };

    return (
        <div className='cards__section'>
            <h3 id={title}>{title}</h3>
            <hr />
            <div className='cards'>
                {renderItems()}
            </div>
            <div className='pagination'>
                {items.length > ITEMS_PER_PAGE && (
                    <ul className='pagination__list'>
                        {paginationItems()}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Section;
