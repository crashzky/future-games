import { variantProp } from './Header.props';

function getHeaderStyles(variant: variantProp): string {
	const COMMON_STYLES = 'justify-between sticky top-0 bg-black z-10 px-4 md:px-28 md:flex items-center ';

	switch(variant) {
		case 'hiddenMobile':
			return COMMON_STYLES + 'hidden';
		case 'showMobile':
			return COMMON_STYLES + 'flex';
	}
}

export {
	getHeaderStyles,
};
