import { WORDS } from '../../constants/wordlist'
import { BaseModal } from './BaseModal'
import { tomorrow } from '../../lib/words'
import Countdown from 'react-countdown'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string;
}

export const CorrectModal = ({ isOpen, handleClose, solution }: Props) => {
  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-left mb-2 text-gray-700 dark:text-gray-300">
        Вітаємо!
      </p>
      <p className="text-xs text-left mb-2 text-gray-700 dark:text-gray-300">
        {
          // @ts-ignore
          `${WORDS[solution]?.value.toUpperCase()} - ${WORDS[solution]?.text}`
        }
      </p>
      <p className="text-sm text-left mb-2 text-gray-700 dark:text-gray-300">
        Більше вгаданих слів — краща підготовка!
      </p>
      <p className="text-sm text-left mb-2 text-gray-700 dark:text-gray-300">
        Нове слово через {' '}
        <Countdown
          className="text-lg font-medium text-gray-900 dark:text-gray-100"
          date={tomorrow}
          daysInHours={true}
        />
      </p>
      <p className="text-sm text-left mb-2 text-gray-700 dark:text-gray-300">
        Не хочете чекати на нові знання? Завітайте на ….. , щоб дізнатись більше.
      </p>
    </BaseModal>
  )
}
