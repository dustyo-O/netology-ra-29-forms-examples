export const STATUS_TITLES = {
    all: 'Все',
    new: 'Новая',
    waiting: 'Ожидает проверки',
    'need-corrrections': 'Требует доработки',
    approved: 'Зачет',
    failed: 'Незачет',
};

export const STATUSES = ['new', 'waiting', 'need-corrrections', 'approved', 'failed'];
export const STATUS_FILTERS = ['all', ...STATUSES];

export const INITIAL_FORM = { title: '', status: STATUSES[0] };
