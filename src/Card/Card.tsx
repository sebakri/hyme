import { Component } from "solid-js"

interface Props {
    heading : string
    badge : string
}

const Card: Component<Props> = (props) => {
  return (
    <div class='shadow-gray-400 shadow grid grid-cols-[min-content,1fr,min-content] gap-1 p-6 rounded-md'>
        <div class="col-span-3 flex flex-col border-b-blue-400 border-b-4 w-50 justify-center pb-1">
            <span class="text-xl mr-auto">{props.heading}<span class="text-sm mx-4 px-1.5 py-0.5 bg-gray-400 text-white rounded-lg mr-auto">{props.badge}</span></span>
        </div>
        <span>💡</span>
        <span>Lights</span>
        <span class="text-right">2</span>
        <span>🥵</span>
        <span>Heating</span>
        <span class="text-right">2</span>
    </div>
  )
}

export default Card
