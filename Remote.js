class Remote {
    onOffTelevision(television) {
        television.setStatus(!television.getStatus())
    }


    changeChannel(channnelName, television) {
        if (television.getStatus()) {
            let channelString = "";
            switch (channnelName) {
                case 1 :
                    channelString = "VTV1";
                    break
                case 2 :
                    channelString = "VTV2";
                    break
                case 3:
                    channelString = "VTV3"
                    break

            }
            television.setChannel(channelString)

        } else {
            console.log("Hay bat tivi len")
        }

    }

    upVolume(television) {
        if (television.getStatus()) {
            if (television.getVolume() >= 3) {
                console.log("MaxVolume")
                return
            }
            television.setVolume(television.getVolume() + 1)

        } else {
            console.log("Hay bat tivi len")
        }

    }

}

