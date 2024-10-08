import { useMemo } from "react"
import { format } from "date-fns"
import { observer } from "mobx-react"
import { useAuthContext } from "../../contexts/auth-context"

interface Props {
	message: MessageData
}

function MessageBubble (props: Props) {
	const { message } = props
	const authClass = useAuthContext()

	const isOwnMessage = useMemo(() => {
		return message.senderDetails.username === authClass.username
	}, [authClass.username, message.senderDetails.username])

	const messageTime = useMemo(() => {
		return format(new Date(message.updatedAt), "h:mm a")
	}, [message.updatedAt])

	return (
		<div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} my-2`}>
			<div
				className={`max-w-xs md:max-w-md lg:max-w-lg p-1.5 rounded-lg shadow ${
					isOwnMessage ? "bg-blue-500 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
				}`}
			>
				<div className="whitespace-pre-wrap break-words">{message.text}</div>
				<div className={`text-xs ${isOwnMessage ? "text-right" : "text-left"}`}>
					{messageTime}
				</div>
			</div>
		</div>
	)
}

export default observer(MessageBubble)
