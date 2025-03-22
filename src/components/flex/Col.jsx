import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';

import alignItemsMap from '@/utilities/alignItemsMap';
import justifyContentMap from '@/utilities/justifyContentMap';

/**
 * A flexible col container component that arranges its children vertically.
 *
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the col
 * @param {string} [props.childrenHorizontalPosition] - Horizontal alignment of children ('left'|'center'|'right'|'between'|'around'|'evenly')
 * @param {string} [props.childrenVerticalPosition] - Vertical alignment of children ('top'|'center'|'bottom'|'stretch'|'baseline')
 * @param {string} [props.className] - Additional CSS class names to apply to the col
 *
 * @returns {JSX.Element} A div element with flex-col layout and specified alignment properties
 *
 * @example
 * <Col childrenHorizontalPosition="center" childrenVerticalPosition="center">
 *   <div>Centered content</div>
 * </Col>
 */
export const Col = memo(function Col({
	children,
	childrenHorizontalPosition,
	childrenVerticalPosition,
	className = '',
	...props
}) {
	const computedClassName = useMemo(
		() =>
			clsx(
				'flex flex-col',
				childrenVerticalPosition &&
					justifyContentMap[childrenVerticalPosition],
				childrenHorizontalPosition &&
					alignItemsMap[childrenHorizontalPosition],
				className && className,
			),
		[childrenHorizontalPosition, childrenVerticalPosition, className],
	);

	return (
		<div className={computedClassName} {...props}>
			{children}
		</div>
	);
});

Col.propTypes = {
	children: PropTypes.node,
	childrenHorizontalPosition: PropTypes.oneOf([
		'left',
		'center',
		'right',
		'between',
		'around',
		'evenly',
	]),
	childrenVerticalPosition: PropTypes.oneOf([
		'top',
		'center',
		'bottom',
		'stretch',
		'baseline',
	]),
	className: PropTypes.string,
};

Col.defaultProps = {
	alignItems: undefined,
	justifyContent: undefined,
	className: '',
};
