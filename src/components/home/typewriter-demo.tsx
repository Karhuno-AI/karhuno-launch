"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const phrases = [
  "Manufacturing companies with up to 3000 employees",
  "that announced energy savings initiatives",
  "last week",
]

export default function TypewriterDemo() {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const input = inputRef.current;
    if (input) {
      input.focus();
      const length = input.value.length;
      input.setSelectionRange(length, length); // cursor always at end
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animate = () => {
      // Если достигли конца всех фраз и завершили поиск
      if (phraseIndex >= phrases.length && !isSearching) {
        // Имитируем нажатие кнопки поиска
        setIsSearching(true)
        timeout = setTimeout(() => {
          setIsSearching(false)
          // Сбрасываем все индексы для нового цикла
          setText("")
          setPhraseIndex(0)
          setCharIndex(0)
        }, 2000)
        return
      }

      // Если еще печатаем текущую фразу
      if (phraseIndex < phrases.length && charIndex < phrases[phraseIndex].length) {
        setText((prev) => prev + phrases[phraseIndex][charIndex])
        setCharIndex((prev) => prev + 1)
        timeout = setTimeout(animate, 150) // Скорость печати
      }
      // Если закончили текущую фразу
      else if (phraseIndex < phrases.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + " ") // Добавляем пробел между фразами
          setPhraseIndex((prev) => prev + 1)
          setCharIndex(0)
          animate()
        }, 500) // Пауза между фразами
      }
    }

    timeout = setTimeout(animate, 500)
    return () => clearTimeout(timeout)
  }, [phraseIndex, charIndex, isSearching])

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-2 select-none">
        <Input value={text} ref={inputRef} onMouseDown={handleMouseDown} className="w-full bg-white dark:bg-black shadow-sm" size={0} placeholder="Type your search query..." readOnly />
        <Button
          className={`px-4 transition-all duration-300 ${
            isSearching ? "bg-purple-700 scale-95" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          <Search className={`w-4 h-4 ${isSearching ? "animate-ping" : ""}`} />
        </Button>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-200 text-center">Watch AI-powered search in action</div>
    </div>
  )
}

