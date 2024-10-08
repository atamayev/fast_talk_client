import { observer } from "mobx-react"
import PageHelmet from "../components/helmet/page-helmet"
import useRedirectUnknownUser from "../hooks/redirect/redirect-unknown-user"

function Home() {
	useRedirectUnknownUser()

	return (
		<>
			<PageHelmet pageTitle="/" />
			<div className="text-center text-black dark:text-white">
				No Chat Selected
			</div>
		</>
	)
}

export default observer(Home)
