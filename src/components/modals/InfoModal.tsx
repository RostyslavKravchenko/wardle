import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Вітаємо у грі WARDLE" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-xs text-left mb-2 text-gray-700 dark:text-gray-300">
      У вас є 6 спроб вгадати унікальне слово з 5-ти букв.
      </p>
      <p className="text-xs text-left mb-2 text-gray-500 dark:text-gray-300">
        Але лише одна спроба підготуватися до військових дій, які можуть початися незабаром.
      </p>
      <p className="text-xs text-left mb-2 text-gray-500 dark:text-gray-300">
        Тому у WARDLE слово дня — завжди ключова частина рекомендацій, які покликані тренувати вас і підготувати до можливих надзвичайних ситуацій.
      </p>
      <p className="text-xs text-left mb-2 text-gray-500 dark:text-gray-300">
        Вгадуйте слово — отримайте знання.
      </p>
      <p className="text-xs text-left mb-2 text-gray-500 dark:text-gray-300">
        Решта правил — як в оригінальному Wordle.
        Кожна вгадана літера, що стоїть на своєму місці, підсвітиться зеленим.
        Жовтим підсвітиться літера, що є в цьому слові, але стоїть не на своєму місці.
        Сірим підсвітиться літера, якої немає в цьому слові
      </p>
      <p className="text-xs text-left mb-4 text-gray-500 dark:text-gray-300">
        Грайте та поширюйте важливі знання серед українців!
      </p>

      <div className="border border-b-1 mb-4 border-gray-500 dark:border-gray-300"/>

      <p className="text-sm text-left mb-4 font-bold text-gray-500 dark:text-gray-300">
        Приклади
      </p>

      <div className="flex justify-flex-start mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-left text-gray-500 dark:text-gray-300">
        Літера <b>Б</b> є в слові і вона на правильному місці
      </p>

      <div className="flex justify-flex-start mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-left text-gray-500 dark:text-gray-300">
        Літера <b>А</b> є в слові, але вона на іншому місці
      </p>

      <div className="flex justify-flex-start mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-left text-gray-500 dark:text-gray-300">
        Літери <b>С</b> зовсім немає у слові
      </p>
    </BaseModal>
  )
}
