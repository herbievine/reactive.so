import React from 'react'
import '@/styles/globals.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type RootLayoutProps = React.PropsWithChildren<{}>

const RootLayout = ({children}: RootLayoutProps) => {
	return (
		<html lang='en'>
			<body>
				{children}
			</body>
		</html>
	)
}

export default RootLayout