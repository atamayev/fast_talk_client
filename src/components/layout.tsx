import { useMemo } from "react"
import { observer } from "mobx-react"
import { useLocation } from "react-router-dom"
import { useAuthContext } from "../contexts/auth-context"
import ChatListSidebar from "./chat-list-sidebar/chat-list-sidebar"

interface Props {
	children: React.ReactNode
}

function Layout(props: Props) {
	const { children } = props
	const location = useLocation()
	const authClass = useAuthContext()

	const layoutClasses = useMemo(() => {
		if (location.pathname === "/login" || location.pathname === "/register") {
			return "flex-1 w-full overflow-y-auto px-14 py-6 mt-14"
		}
		return "flex-1 w-full overflow-y-auto my-1 ml-72"
	}, [location.pathname])

	return (
		<div className="dark:bg-neutral-900 flex h-screen">
			{authClass.isLoggedIn && (
				<ChatListSidebar />
			)}
			<div className={layoutClasses}>
				{children}
			</div>
		</div>
	)
}

export default observer(Layout)
