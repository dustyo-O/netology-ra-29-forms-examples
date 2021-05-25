import { useState } from 'react';
import { nanoid } from 'nanoid';
import { INITIAL_FORM, STATUSES, STATUS_FILTERS, STATUS_TITLES } from './HomeworksPanel.const';
import HomeworksPanelFilter from './Filter/Homeworks-Filter';
import HomeworksPanelForm from './Form/HomeworksPanel-Form';


export default function HomeworksPanel() {
    const [filter, setFilter] = useState(STATUS_FILTERS[0]);
    const [homeworks, setHomeworks] = useState([]);

    const onFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const onAddHomework = (form) => {
        setHomeworks(hw => [...hw, {
            id: nanoid(),
            title: form.title,
            status: form.status,
        }]);
    }

    const filteredHomeworks = filter === STATUS_FILTERS[0]
        ? homeworks : homeworks.filter(homework => homework.status === filter);

    return (
        <div className="HomeworksPanel">
            <HomeworksPanelFilter filter={filter} onFilterChange={onFilterChange} />
            <div className="HomeworksPanel-Panel">
                { filteredHomeworks.map((homework) => (
                    <div className="HomeworksPanel-Homework">
                        <span className="HomeworksPanel-HomeworkTitle">
                            {homework.title}
                        </span>
                        <span className="HomeworksPanel-HomeworkStatus">{STATUS_TITLES[homework.status]}</span>
                    </div>
                )) }
            </div>
            <HomeworksPanelForm onAddHomework={onAddHomework} />
        </div>
    );
}
