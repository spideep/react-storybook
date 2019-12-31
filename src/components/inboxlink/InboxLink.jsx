import React from 'react';

class InboxLink extends React.Component {
	render() {
		return (
			<div class="footer-widget last">
				<div id="text-4" class="footer-widget widget_text">
					<h4 class="widgettitle">Acceso a Correo</h4>
					<div class="textwidget">
						<a
							style={{ color: '#000', textShadow: 'none' }}
							href="https://slmp-550-122.slc.westdc.net:2096/cpsess6758340310/webmail/paper_lantern/index.html?mailclient=roundcube"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img style={{ width: 30 + 'px', verticalAlign: 'middle' }} alt="Entrar aquí" src="http://www.fulltrac.com/wp-content/themes/Nimble-1.0/images/contact.png" /> Entrar aquí
						</a>
					</div>
				</div>
			</div>
		)
	}
}
export default InboxLink;