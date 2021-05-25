import { useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import { INITIAL_FORM, STATUSES, STATUS_TITLES } from "../HomeworksPanel.const";

export default function HomeworksPanelForm({ onAddHomework }) {
    const [form, setForm] = useState(INITIAL_FORM);

    const onFormSubmit = (e) => {
        e.preventDefault();

        onAddHomework(form);

        setForm(INITIAL_FORM);
    }

    const onFieldChange = (e) => {
        const { name: fieldName, type } = e.target;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;

        setForm(prev => ({ ...prev, [fieldName]: value }));
    };

    const onDropdownChange = (value) => {
        setForm(prev => ({ ...prev, status: value }));
    }

    return (
        <form className="HomeworksPanel-Form" onSubmit={onFormSubmit}>
            <div className="HomeworksPanel-FormField">
                <label htmlFor="title">Имя Фамилия</label>
                <input
                    onChange={onFieldChange}
                    id="title"
                    name="title"
                    className="HomeworksPanel-FormFieldControl"
                    value={form.title}
                />
                <Dropdown
                    value={form.status}
                    options={STATUSES}
                    titles={STATUS_TITLES}
                    onChange={onDropdownChange}
                />
            </div>
        </form>
    );
}
