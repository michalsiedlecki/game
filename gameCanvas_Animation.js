export { AnimationType as default}

class AnimationType{
    construction(akvOptionsIn){
        const kvDefaults = {
            strURL: null,
            context: null,
            nCurrentFrame: 0,
            nRate: 60
        };
        //Object.assign shallow
        this.akvOptions = Object.assign({}, kvDefaults, kvOptionsIn);
        this.Frames = [];
        this.Image = new Image();
        this.Image.src = this.kvOptions.strURL;
    }
    appendFrame(x, y){
        this.vFrames.push({x, y});
    }
    getNumFrames(){
        return this.vFrames.length;
    }
    getInterval(){
        return this.kvOptions.nRate;
    }
    setCurrentFrameIndex(anIndex){
        this.kvOptionsnCurrentFrame = anIndex;
    }
    getCurrentFrameIndex(){
        return this.kvOptions.nCurrentFrame;
    }

    draw(x, y, nWidth, nHight, bFlipH){
        const { kvOptions: { context: aContext, nCurrentFrame: anCurrentFrame} } = this,
        aFrame = this.vFrames[anCurrentFrame];
        if (bFlipH){
            aContext.save();
            aContext.scale(-1, 1);
            aContext.translate(-nWidth + 1, 0);

            aContext.drawImage(this.Image, aFrame.x, aFrame.y, nWidth, nHight, -x, y, nWidth, nHight);
            aContext.restore();
        }else{
            aContext.drawImage(this.Image, aFrame.x, aFrame.y, nWidth, nHight, x, y, nWidth, nHight );
        }
    }
}