import { CloseButton } from "../CloseButton";
import { useState } from "react";


import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";



export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      soucer: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      soucer: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      soucer: thoughtImageUrl,
      alt: 'Imagem de um balao de pensamento'
    }
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }



  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)} />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400" >
        <p>Feito com ❤ por <a className="underline underline-offset-2" href="https://github.com/MarkesZks">Gabriel Marques</a></p>
      </footer>

    </div>
  )
}