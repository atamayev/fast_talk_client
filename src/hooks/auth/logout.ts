import { useCallback } from "react"
import useTypedNavigate from "../navigate/typed-navigate"
import { useAuthContext } from "../../contexts/auth-context"
import { useChatsContext } from "../../contexts/chat-context"
import { useApiClientContext } from "../../contexts/fast-talk-api-client-context"

export default function useLogout(): () => void {
	const authClass = useAuthContext()
	const chatsClass = useChatsContext()
	const fastTalkApiClient = useApiClientContext()
	const navigate = useTypedNavigate()

	return useCallback((): void => {
		chatsClass.logout()
		authClass.logout()
		fastTalkApiClient.logout()
		navigate("/login")
	}, [authClass, chatsClass, fastTalkApiClient, navigate])
}
