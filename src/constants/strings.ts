export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Гарна робота!', 'Чудово', 'Так тримати!']
export const GAME_COPIED_MESSAGE = 'Гру скопійовано'
export const ABOUT_GAME_MESSAGE = 'Про гру'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Не достатньо літер'
export const WORD_NOT_FOUND_MESSAGE = 'Слово не знайдено'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Слово було ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Здогадка має містити літеру ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Статистика'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Нове слово через'
export const SHARE_TEXT = 'Поділитися'
export const TOTAL_TRIES_TEXT = 'Загальна кількість спроб'
export const SUCCESS_RATE_TEXT = 'Рейтинг'
export const CURRENT_STREAK_TEXT = 'Серія перемог'
export const BEST_STREAK_TEXT = 'Найбільна серія перемог'
