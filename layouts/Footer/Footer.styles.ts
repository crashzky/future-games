import { variantProp } from './Footer.props';

function getFooterStyles(variant: variantProp): string {
	const COMMON_STYLES = 'mt-11 md:bg-black md:px-9 justify-between ';

	switch(variant) {
		case 'showMobile':
			return COMMON_STYLES + 'block md:hidden';
		case 'showDesktop':
			return COMMON_STYLES + 'hidden md:flex';
		case 'showAll':
			return COMMON_STYLES + 'md:flex';
	}
}

export default getFooterStyles;
