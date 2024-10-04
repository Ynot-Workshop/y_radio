window.addEventListener('DOMContentLoaded', function () {
    function SlideUp() {
        document.getElementById("container").style.display = "block";
        document.getElementById("radio-container").animate({ bottom: "6vh" }, 250).onfinish = function () {
            document.getElementById("radio-container").style.bottom = "6vh";
        };
    };

    function SlideDown() {
        document.getElementById("radio-container").animate({ bottom: "-110vh" }, 400).onfinish = function () {
            document.getElementById("container").style.display = "none";
            document.getElementById("radio-container").style.bottom = "-56vh";
        };
    };

    window.addEventListener('message', function (event) {
        if (event.data.type == "open") {
            SlideUp();
        }

        if (event.data.type == "close") {
            SlideDown();
        }
    });

    fetch(`https://${GetParentResourceName()}/getButtonLocales`, {
        method: 'POST',
    }).then(response => response.json()).then(buttons => {
        for (const button in buttons) {
            tippy(`#${button}`, {
                content: buttons[button],
            });
        }
    });

    document.onkeyup = function (data) {
        if (data.key == "Escape") {
            fetch(`https://${GetParentResourceName()}/escape`, {
                method: 'POST',
                body: JSON.stringify({})
            });
            SlideDown();
        } else if (data.key == "Enter") {
            fetch(`https://${GetParentResourceName()}/joinRadio`, {
                method: 'POST',
                body: JSON.stringify({
                    channel: document.getElementById("channel").value
                })
            });
        }
    };

    document.getElementById('toggleClicks').addEventListener('click', function (e) {
        e.preventDefault();
        fetch(`https://${GetParentResourceName()}/toggleClicks`, {
            method: 'POST',
        });
    });

    document.getElementById('channel').addEventListener('input', function (e) {
        const value = e.target.value;
        const regex = /^\d{0,3}(\.\d{0,2})?$/;

        if (!regex.test(value)) {
          e.target.value = value.slice(0, -1);
        }
      });

    document.getElementById('submit').addEventListener('click', function (e) {
        e.preventDefault();
        fetch(`https://${GetParentResourceName()}/joinRadio`, {
            method: 'POST',
            body: JSON.stringify({
                channel: document.getElementById("channel").value
            })
        });
    });

    document.getElementById('disconnect').addEventListener('click', function (e) {
        e.preventDefault();

        fetch(`https://${GetParentResourceName()}/leaveChannel`, {
            method: 'POST'
        });
    });

    document.getElementById('volumeUp').addEventListener('click', function (e) {
        e.preventDefault();

        fetch(`https://${GetParentResourceName()}/volumeUp`, {
            method: 'POST',
            body: JSON.stringify({
                channel: document.getElementById("channel").value
            })
        });
    });

    document.getElementById('volumeDown').addEventListener('click', function (e) {
        e.preventDefault();

        fetch(`https://${GetParentResourceName()}/volumeDown`, {
            method: 'POST',
            body: JSON.stringify({
                channel: document.getElementById("channel").value
            })
        });
    });

    document.getElementById('decreaseradiochannel').addEventListener('click', function (e) {
        e.preventDefault();

        fetch(`https://${GetParentResourceName()}/decreaseradiochannel`, {
            method: 'POST',
            body: JSON.stringify({
                channel: document.getElementById("channel").value
            })
        }).then(response => response.json()).then(newChannel => {
            document.getElementById("channel").value = newChannel;
        });
    });

    document.getElementById('increaseradiochannel').addEventListener('click', function (e) {
        e.preventDefault();

        fetch(`https://${GetParentResourceName()}/increaseradiochannel`, {
            method: 'POST',
            body: JSON.stringify({
                channel: document.getElementById("channel").value
            })
        }).then(response => response.json()).then(newChannel => {
            document.getElementById("channel").value = newChannel;
        });
    });

    document.getElementById('powerButton').addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementsByClassName("channel")[0].style.display = "none";
        fetch(`https://${GetParentResourceName()}/powerButton`, {
            method: 'POST',
        }).then(response => response.json()).then(data => {
            if (data == "on") {
                document.getElementsByClassName("channel")[0].style.display = "block";
            } else {
                document.getElementsByClassName("channel")[0].style.display = "none";
            }
        });
    });
});