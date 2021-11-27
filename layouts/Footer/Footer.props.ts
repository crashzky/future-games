interface Props {
	variant: variantProp;
}

type variantProp = 'showMobile' | 'showDesktop' | 'showAll';

export default Props;

export type {
	variantProp,
};
