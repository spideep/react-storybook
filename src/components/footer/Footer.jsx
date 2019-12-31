import React from 'react';
import FooterMenu from '../footermenu/FooterMenu';
import FooterBottom from '../footerbottom/Footerbottom';
import LocateUs from '../locateus/LocateUs';
import InboxLink from '../inboxlink/InboxLink';

class Footer extends React.Component {
	render() {
		return (
			<footer id="main-footer">
				<div id="footer-widgets" class="clearfix container">
					<FooterMenu></FooterMenu>
					<LocateUs></LocateUs>
					<InboxLink></InboxLink>
					<FooterBottom></FooterBottom>
				</div>
			</footer>
		)
	}
}

export default Footer;