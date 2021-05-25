import { useRef, useState } from "react";

const LEVELS_TITLES = {
    juniour: 'Младший разработчик',
    middle: 'Разработчик',
    senior: 'Старший разработчик',
};

const LEVELS = ['juniour', 'middle', 'senior'];
const LANGUAGES = ['javascript', 'typescript', 'coffescript', 'node.js', 'ecmascript'];

const INITIAL_FORM = {
    login: '',
    password: '',
    agree: false,
    level: LEVELS[0],
    language: LANGUAGES[0],
    avatar: '',
};

export default function RegisterForm() {
    const [form, setForm] = useState(INITIAL_FORM);

    const avatarRef = useRef(null);

    const onFieldChange = (e) => {
        const { name: fieldName, type } = e.target;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;

        setForm(prev => ({ ...prev, [fieldName]: value }));
    };

    const onAvatarUpload = (e) => {
        console.log(e);

        console.log(avatarRef);

        const file = avatarRef.current && avatarRef.current.files && avatarRef.current.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(event) {
            const avatar = event.target.result;

            setForm(prev => ({ ...prev, avatar }));
        }

        reader.readAsDataURL(file);
    };

    const onSubmit = (e) => {
        console.log('onSubmit');

        console.log(form);
        e.preventDefault();
    };

    const onReset = () => {
        setForm(INITIAL_FORM);
    }

    return (
        <form className="RegisterForm" onSubmit={onSubmit} onReset={onReset}>
            <img className="RegisterForm-Avatar" src={form.avatar} />
            <div className="RegisterForm-Field">
                <label htmlFor="login">Аватарка</label>
                <input
                    onChange={onAvatarUpload}
                    ref={avatarRef}
                    id="avatar"
                    name="avatar"
                    className="RegisterForm-Control"
                    type="file"
                />
            </div>
            <div className="RegisterForm-Field">
                <label htmlFor="login">Логин</label>
                <input
                    onChange={onFieldChange}
                    id="login"
                    name="login"
                    className="RegisterForm-Control"
                    value={form.login}
                />
            </div>
            <div className="RegisterForm-Field">
                <label htmlFor="password">Пароль</label>
                <input
                    onChange={onFieldChange}
                    id="password"
                    name="password"
                    type="password"
                    className="RegisterForm-Control"
                    value={form.password}
                />
            </div>
            <div className="RegisterForm-Field">
                <label>Мой уровень</label>
                {
                    LEVELS.map(level => (
                        <div key={level}>
                            <label htmlFor={`level-${LEVELS_TITLES[level]}`}>
                                {LEVELS_TITLES[level]}
                            </label>
                            <input
                                id={`level-${LEVELS_TITLES[level]}`}
                                onChange={onFieldChange}
                                name="level"
                                type="radio"
                                className="RegisterForm-Control"
                                checked={form.level === level}
                                value={level}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="RegisterForm-Field">
                <label htmlFor="language">Язык программирования</label>
                <select
                    className="RegisterForm-Control"
                    name="language"
                    id="language"
                    value={form.language}
                    onChange={onFieldChange}
                    >
                {
                    LANGUAGES.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))
                }
                </select>
            </div>
            <div className="RegisterForm-Field">
                <label htmlFor="comment">Комментарий</label>
                <textarea
                    onChange={onFieldChange}
                    id="comment"
                    name="comment"
                    className="RegisterForm-Control"
                    value={form.comment}
                />
            </div>
            <div className="RegisterForm-Field">
                <label htmlFor="agree">Согласен получать рассылку и всякий спам и счета на оплату и так далее</label>
                <input
                    onChange={onFieldChange}
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="RegisterForm-Control"
                    checked={form.agree}
                />
            </div>
            <button>Отправить</button>
            <button type="reset">Обнулить</button>
        </form>
    );
}
