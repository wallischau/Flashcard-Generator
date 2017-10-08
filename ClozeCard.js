/* Constructor: cloze card */
/* Author: Wallis Chau     */
/* Date: 10/1/17           */

function ErrHandling(str) {
	this.str = str;
	console.log(str);
}

/* constructor: cloze card                                                    */
/* Description: define constructor. If cloze is not part of text, throw error */
function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) {
		pattern = new RegExp(cloze, 'g');
		if ((cloze === '') || (!pattern.test(text))) {
			throw new ErrHandling("invalid parameters");
		}
		else {
			this.cloze = cloze;
			this.fullText = text;
			this.partial = text.replace(pattern, '...'); 
		}
	}//instanceof
	else {
		return new ClozeCard(text, cloze);
	}
}


module.exports = ClozeCard;
