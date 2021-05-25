import Dropdown from "../../Dropdown/Dropdown";
import { STATUS_FILTERS, STATUS_TITLES } from "../HomeworksPanel.const";

export default function HomeworksPanelFilter({ filter, onFilterChange }) {
    return (
        <div className="HomeworksPanel-Filter">
            <label htmlFor="status-filter">Фильтр</label>
            <Dropdown
                value={filter}
                options={STATUS_FILTERS}
                titles={STATUS_TITLES}
                onChange={onFilterChange}
            />
        </div>
    );
}
