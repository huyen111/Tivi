class Tivi {
    channel
    volume
    status

    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }
    setChannel(channel){
        this.channel = channel
    }
    setVolume(volume){
        this.volume = volume
    }
    setStatus(status){
        this.status = status
        if(this.status){
            console.log("Tivi dang bat")
        }
        else{
            console.log("Ti vi dang tat")
        }
    }

    getChannel(){
        return this.channel
    }

    getVolume() {
        return this.volume
    }
    getStatus(){// Check trang thai cua remote

        return this.status
    }



}