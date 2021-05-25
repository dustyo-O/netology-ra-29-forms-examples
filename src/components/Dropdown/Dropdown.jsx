export default function Dropdown({ value, options, titles, onChange }) {
    const onSelectChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <select
            className="HomeworksPanel-FormFieldControl"
            value={value}
            onChange={onSelectChange}
            >
                {
                    options.map(option => (
                        <option
                            key={option}
                            value={option}>
                                {titles[option]}
                            </option>
                    ))
                }
        </select>
    );
}
