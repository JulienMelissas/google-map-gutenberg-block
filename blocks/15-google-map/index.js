/**
 * Block dependencies
 */
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType, InspectorControls } = wp.blocks;
const { TextControl, PanelBody } = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
	'jsforwpblocks/google-map',
	{
		title: __( 'Example - Google Map Block', 'jsforwpblocks' ),
		description: __( 'An example of a advanced block to build a Google Map.', 'jsforwpblocks'),
		category: 'common',
		icon: 'location-alt',
		keywords: [
			__( 'Meta', 'jsforwpblocks' ),
			__( 'Map', 'jsforwpblocks' ),
			__( 'Google Maps', 'jsforwpblocks' ),
		],
		attributes: {
			text: {
				type: 'string',
				source: 'meta',
				meta: 'jsforwpblocks_gb_googlemap',
			},
		},
		edit: props => {
			const { attributes: { text }, className, setAttributes, isSelected } = props;
			return [
				isSelected && (
					<InspectorControls>
						<PanelBody>
							<TextControl
								label={ __( 'Google Map Block', 'jsforwpblocks' ) }
								value={ text }
								onChange={ text => setAttributes( { text } ) }
							/>
						</PanelBody>
					</InspectorControls>
				),
				<div className={ className } >
					<p>{ __( 'Check the meta bitch!', 'jsforwpblocks' ) }</p>
				</div>
			];
		},
		save: props => {
			return (
				<p>{ __( 'Check the meta', 'jsforwpblocks' ) }</p>
			);
		},
	},
);
