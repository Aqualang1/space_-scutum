import { pageIds } from "../../constants/constants";

const PageSwitcher = ({ currentPage, pagesAmount, setCurrentPage }) => {

    const handleSwitch = ({ target }) => {

        const newCurrentPage = target.id === pageIds.prev ? currentPage - 1 : currentPage + 1;

        setCurrentPage(newCurrentPage);
    }

    return (
        <>
            <button id={pageIds.prev} disabled={currentPage === 1} onClick={handleSwitch}>PREVIOUS</button>
            <span>{currentPage}/{pagesAmount}</span>
            <button id={pageIds.next} disabled={currentPage === pagesAmount} onClick={handleSwitch}>NEXT</button>
        </>
    );
}

export default PageSwitcher;