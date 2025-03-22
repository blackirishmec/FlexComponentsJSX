import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';

import alignItemsMap from '@/utilities/alignItemsMap';
import justifyContentMap from '@/utilities/justifyContentMap';

/**
 * A flexible row container component that arranges its children horizontally.
 *
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the row
 * @param {string} [props.childrenHorizontalPosition] - Horizontal alignment of children ('left'|'center'|'right'|'between'|'around'|'evenly')
 * @param {string} [props.childrenVerticalPosition] - Vertical alignment of children ('top'|'center'|'bottom'|'stretch'|'baseline')
 * @param {string} [props.className] - Additional CSS class names to apply to the row
 *
 * @returns {JSX.Element} A div element with flex-row layout and specified alignment properties
 *
 * @example
 * <Row childrenHorizontalPosition="center" childrenVerticalPosition="center">
 *   <div>Centered content</div>
 * </Row>
 */
export const Row = memo(function Row({
	children,
	childrenHorizontalPosition,
	childrenVerticalPosition,
	className: propClassName = '',
	...props
}) {
	const alignItemsClassName = useMemo(
		() =>
			childrenVerticalPosition && alignItemsMap[childrenVerticalPosition],
		[childrenVerticalPosition],
	);

	const justifyContentClassName = useMemo(
		() =>
			childrenHorizontalPosition &&
			justifyContentMap[childrenHorizontalPosition],
		[childrenHorizontalPosition],
	);

	const className = useMemo(
		() =>
			clsx(
				'flex flex-row',
				justifyContentClassName !== undefined &&
					justifyContentClassName,
				alignItemsClassName !== undefined && alignItemsClassName,
				propClassName && propClassName,
			),
		[alignItemsClassName, justifyContentClassName, propClassName],
	);

	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
});

Row.propTypes = {
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
