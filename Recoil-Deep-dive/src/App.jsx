import { messagingAtom, networkAtom, notificationAtom, jobsAtom, totalNotificationSelector } from "./atoms"
import { RecoilRoot, useRecoilValue } from "recoil"
import React from "react"


function App() {
  
	return <RecoilRoot>
		<MainApp/>
	</RecoilRoot>
}

function MainApp() {
	const networkNotificationCount = useRecoilValue(networkAtom);
	const jobsAtomCount = useRecoilValue(jobsAtom);
	const notificationAtomCount = useRecoilValue(notificationAtom);
	const messagingAtomCount = useRecoilValue(messagingAtom);
	const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
		<button>Home</button>
		<button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
		<button>Jobs({jobsAtomCount})</button>
		<button>Messaging({messagingAtomCount})</button>
		<button>Notification({notificationAtomCount})</button>
		<button>Me ({totalNotificationCount})</button>

	</div>
  )
}

export default App;	
