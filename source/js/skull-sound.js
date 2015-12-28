function SkullSound(source, volume, loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    this.sound;
    this.finish=false;
    
    this.pause = function()
    {
        this.sound.pause();
    };
    
    this.start = function()
    {
        this.sound = new Audio(this.source);
        this.sound.loop = this.loop;
        this.sound.volume = clamp(this.volume, 0.0, 1.0);
        this.sound.play();
    };
    
    this.stop = function()
    {
        
    };
    
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    };
}