export { PlayerType as default };

class PlayerType {
    constructor(akvOptionsIn){
        const kvDefaults = {
            x: 0,
            y: 0,
            nWidth: 0,
            nHeight: 0,
            bFlipH: false
        }
        this.kvOptions = Object.assign({}, kvDefaults, akvOptionsIn);
        this.hAnimation = null;
        this.hAnimationCurrent = null;
    }

    setAnimation(aAnimation) {
        if (this.nAnimation) {
            clearInterval(this.hAnimation);
            this.hAnimation = null;
        
        }
        this.hAnimationCurrent = aAnimation;
        const anNumFrames = aAnimation.getNumFrames();

        if(1< anNumFrames){
            this.hAnimation = setInterval(() => {
                aAnimation.setCurrentFrameIndex((aAnimation.getCurrentFrameIndex() + 1 ) % anNumFrames)
            }, aAnimation.getInterval());
        
        }else {
            aAnimation.setCurrentFrameIndex(0);
        }
    }
    draw(){
        if (!this.nAnimationCurrent){
            return;
        }
        const { x, y, nWidth, nHeight, bFlipH } = this.kvOptions;
        this.hAnimationCurrent.draw( x, y, nWidth, nHeight, bFlipH);
    }
}