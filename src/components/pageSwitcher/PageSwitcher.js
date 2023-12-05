import { pageIds } from "../../constants/constants";
import './pageSwitcher.css'


const PageSwitcher = ({ currentPage, pagesAmount, setCurrentPage }) => {

    const handleSwitch = ({ target }) => {

        const newCurrentPage = target.id === pageIds.prev ? currentPage - 1 : currentPage + 1;

        setCurrentPage(newCurrentPage);
    }

    return (
        <div className="pageSwitcher">
            <button id={pageIds.prev} disabled={currentPage === 1} onClick={handleSwitch}>PREVIOUS</button>
            <span>Current page: {currentPage} from: {pagesAmount}</span>
            <button id={pageIds.next} disabled={currentPage >= pagesAmount} onClick={handleSwitch}>NEXT</button>
        </div>
    );
}

export default PageSwitcher;