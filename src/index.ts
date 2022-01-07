const fs = require('fs');
const path = require('path');

/** Image Common */
export class ImageCommon {
	public stream = null;
	public ReadStream() {

	}
	public WriteStream() {

	}
}

export interface IImageZenParams {
	/** png */
	PNG?: {
		optipng: {
			[key: string]: any
		},
		pngquant: {
			[key: string]: any
		}
	};
	/** jepg */
	JEPG?: {
		mozjpeg: {
			[key: string]: any
		},
		jepgtran: {
			[key: string]: any
		}
	}
	/** gif */
	GIF?: {
		gifsicle: {
			[key: string]: any
		}
	}
	/** webp */
	WEBP?: {
		cwebp: {
			[key: string]: any
		}
	}
	/** file extension */
	extension: string;
	/** optimization level */
	optimizationLevel: EOptimizationLevel;
	[key: string]: any
}
/** Image Zen */
export class ImageZen extends ImageCommon {
	private options = null;
	constructor(props: IImageZenParams){
		super();
	}
	
}

enum EOptimizationLevel {

}
enum EImages {
	GIF = '.gif',
	JPG = '.jpg',
	JEPG = '.jepg',
	PNG = '.png'
}