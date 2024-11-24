import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	RadioControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { selectedPostId } = attributes;

	const testimonials = useSelect((select) => {
		try {
			return select( 'core' ).getEntityRecords( 'postType', 'testimonial', {
				per_page: -1,
				_embed: true,
			} );
		} catch ( error ) {
			console.error( 'Error fetching testimonials:', error );
			return [];
		}
	}, []);

	// If there are no testimonials, display a message.
	if ( !testimonials || testimonials.length === 0 ) {
		return (
			<div { ...useBlockProps() }>
				<p>
					{ __( 'No testimonials found or there was an error fetching the testimonials.', 'why-qrolic-testimonial-v2' ) }
				</p>
			</div>
		);
	}

	// Create options for the RadioControl
	const testimonialOptions = testimonials.map( ( testimonial ) => ( {
		label: testimonial.title.rendered,
		value: testimonial.id.toString(),
		key: testimonial.id,
	} ) );

	// Main return statement for rendering the block UI.
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'why-qrolic-testimonial-v2' ) }>
					<RadioControl
						label={ __( 'Select Testimonial', 'why-qrolic-testimonial-v2' ) }
						selected={ selectedPostId?.toString() }
						options={ testimonialOptions }
						onChange={ ( value ) =>
							setAttributes( { selectedPostId: parseInt( value, 10 ) } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			{ selectedPostId ? (
				testimonials.map( ( testimonial ) => {
					if ( testimonial.id === selectedPostId ) {
						const clientPosition = testimonial.meta?.client_position || '';
						const clientQuotes = testimonial.meta?.client_quotes || '';
						const featuredMedia = testimonial._embedded?.[ 'wp:featuredmedia' ]?.[ 0 ];

						return (
							<div key={ testimonial.id } className="why-qrolic-testimonials__inner_block">
								{ clientQuotes && <p className='client-quotes'>{ clientQuotes }</p> }

								<div className="why-qrolic-testimonials__inner_block--content">
									{ featuredMedia && (
										<img
											src={ featuredMedia.source_url }
											alt={ featuredMedia.alt_text || 'Testimonial image' }
											className="testimonial-featured-image"
										/>
									) }

									<div className="why-qrolic-testimonials__inner_block--content-details">
										<h3>{ testimonial.title.rendered }</h3>
										{ clientPosition && <p className="subtitle">{ clientPosition }</p> }
									</div>
								</div>
							</div>
						);
					}
					return null;
				})
			) : (
				<p>{ __( 'No testimonial selected', 'why-qrolic-testimonial-v2' ) }</p>
			)}
		</div>
	);
}
