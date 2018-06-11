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
	'googlemapblock/google-map',
	{
		title: __( 'Google Map Block', 'googlemapblock' ),
		description: __( 'An advanced Gutenberg Block that allows you to build an interactive Google Map.', 'googlemapblock'),
		category: 'common',
		icon: 'location-alt',
		keywords: [
			__( 'Meta', 'googlemapblock' ),
			__( 'Map', 'googlemapblock' ),
			__( 'Google Maps', 'googlemapblock' ),
		],
		attributes: {
			text: {
				type: 'string',
				source: 'meta',
				meta: 'googlemapblock_gb_googlemap',
			},
		},
		edit: props => {
			const { attributes: { text }, className, setAttributes, isSelected } = props;
			return [
				isSelected && (
					<InspectorControls>
						<PanelBody>
							<TextControl
								label={ __( 'Google Map Block', 'googlemapblock' ) }
								value={ text }
								onChange={ text => setAttributes( { text } ) }
							/>
						</PanelBody>
					</InspectorControls>
				),
				<div className={ className } >
					<p>{ __( 'Check the meta yo!', 'googlemapblock' ) }</p>
				</div>
			];
		},
		save: props => {
			return (
				<p>{ __( 'Check the meta', 'googlemapblock' ) }</p>
			);
		},
	},
);
