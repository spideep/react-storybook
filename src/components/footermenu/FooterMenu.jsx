import React from 'react';

class FooterMenu extends React.Component {
	render() {
		return (
			<div class="footer-widget">
				<div id="pages-2" class="footer-widget widget_pages">
					<h4 class="widgettitle">Páginas</h4>
					<ul>
						<li class="page_item page-item-21"><a href="http://www.fulltrac.com/alta-calidad/">Alta Calidad</a></li>
						<li class="page_item page-item-188"><a href="http://www.fulltrac.com/calzado-fulltrac-ahora/">CALZADO FULLTRAC</a></li>
						<li class="page_item page-item-23"><a href="http://www.fulltrac.com/el-mejor-servicio/">El Mejor Servicio</a></li>
						<li class="page_item page-item-74 page_item_has_children"><a href="http://www.fulltrac.com/productos/">Productos</a>
							<ul class="children">
								<li class="page_item page-item-87"><a href="http://www.fulltrac.com/productos/calzado-de-seguridad/">Calzado de Seguridad</a></li>
								<li class="page_item page-item-89"><a href="http://www.fulltrac.com/productos/calzado-industrial/">Calzado Industrial</a></li>
								<li class="page_item page-item-85"><a href="http://www.fulltrac.com/productos/ropa-de-vigilancia-y-seguridad/">Ropa de Vigilancia y Seguridad</a></li>
								<li class="page_item page-item-83"><a href="http://www.fulltrac.com/productos/ropa-industrial/">Ropa Industrial</a></li>
							</ul>
						</li>
						<li class="page_item page-item-17"><a href="http://www.fulltrac.com/somos-una-empresa-peruana/">Una empresa peruana</a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default FooterMenu;