const DAILY = "daily";
const WEEKLY = "weekly";
const MONTHLY = "monthly";

const workh2 = document.getElementById("work-h2");
const workp = document.getElementById("work-p");
const playh2 = document.getElementById("play-h2");
const playp = document.getElementById("play-p");
const studyh2 = document.getElementById("study-h2");
const studyp = document.getElementById("study-p");
const exerciseh2 = document.getElementById("exercise-h2");
const exercisep = document.getElementById("exercise-p");
const socialh2 = document.getElementById("social-h2");
const socialp = document.getElementById("social-p");
const selfcareh2 = document.getElementById("selfcare-h2");
const selfcarep = document.getElementById("selfcare-p");

let state = DAILY;
changeValues(state);

const daily = document.getElementById("daily");
if (daily) {

    //const el = document.querySelector("#myId");
    const prev_color = daily.style.color;
const eventHandler = {
    handlers: {
        click(e) {
            // do something
            state = DAILY;
            changeValues(DAILY);
        },
        mouseover(e) {
            //console.log('hi hi ',prev_color);
            // do something different
            daily.setAttribute("style", "color:white;");
        },
        mouseout(e) {
            //console.log('hi hi hi ',prev_color);
            // do something different
            daily.setAttribute("style", "color:hsl(236, 100%, 87%);");
        },
        default(e) {
            console.log("unhandled event: %s", e.type);
        }
    },
    // called for each event on this element
    handleEvent(evt) {
        //console.log(evt)
        switch (evt.type) {
            case "click":
                this.handlers.click(evt);
                break;
            case "mouseover":
                // click and touchstart share click handler
                this.handlers.mouseover(evt);
                break;
            case "mouseout":
                this.handlers.mouseout(evt);
                break;
            default:
                this.handlers.default(evt);
        }
    }
}

Object.keys(eventHandler.handlers)
    .map(eventName => daily.addEventListener(eventName, eventHandler))

/*

  daily.addEventListener("mouseover", func(DAILY), false);
  daily.addEventListener("mouseout", func1(DAILY), false);
  daily.addEventListener(
    "click",
    (event) => {
      state = DAILY;
      changeValues(DAILY);
    },
    false
  );*/
}
const weekly = document.getElementById("weekly");
if (weekly) {
    const eventHandler = {
        handlers: {
            click(e) {
                // do something
                state = WEEKLY;
                changeValues(WEEKLY);
            },
            mouseover(e) {
                // do something different
                //console.log(e)
                weekly.setAttribute("style", "color:white;");
            },
            mouseout(e) {
                // do something different
                weekly.setAttribute("style", "color:hsl(236, 100%, 87%);");
            },
            default(e) {
                console.log("unhandled event: %s", e.type);
            }
        },
        // called for each event on this element
        handleEvent(evt) {
            switch (evt.type) {
                case "click":
                    this.handlers.click(evt);
                    break;
                case "mouseover":
                    // click and touchstart share click handler
                    this.handlers.mouseover(evt);
                    break;
                case "mouseout":
                    this.handlers.mouseout(evt);
                    break;
                default:
                    this.handlers.default(evt);
            }
        }
    }
    
    Object.keys(eventHandler.handlers)
        .map(eventName => weekly.addEventListener(eventName, eventHandler))
}
const monthly = document.getElementById("monthly");
if (monthly) {
    const eventHandler = {
        handlers: {
            click(e) {
                // do something
                state = MONTHLY;
                changeValues(MONTHLY);
            },
            mouseover(e) {
                // do something different
                monthly.setAttribute("style", "color:white;");
            },
            mouseout(e) {
                // do something different
                monthly.setAttribute("style", "color:hsl(236, 100%, 87%);");
            },
            default(e) {
                console.log("unhandled event: %s", e.type);
            }
        },
        // called for each event on this element
        handleEvent(evt) {
            switch (evt.type) {
                case "click":
                    this.handlers.click(evt);
                    break;
                case "mouseover":
                    // click and touchstart share click handler
                    this.handlers.mouseover(evt);
                    break;
                case "mouseout":
                    this.handlers.mouseout(evt);
                    break;
                default:
                    this.handlers.default(evt);
            }
        }
    }
    
    Object.keys(eventHandler.handlers)
        .map(eventName => monthly.addEventListener(eventName, eventHandler))
}

function changeValues(state) {
  const target = [DAILY, WEEKLY, MONTHLY];
  const targetel = document.getElementById(state);
  targetel.style.color = "white";
  target.map((item) => {
    if (item !== state) {
      const el = document.getElementById(item);
      el.style.color = "hsl(236, 100%, 87%)";
    }
  });

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    let vals;
    let previos_string = "Previous";
    if (state === "daily") {
      vals = element.timeframes.daily;
      previos_string = "Yesterday";
    }
    if (state === "weekly") {
      vals = element.timeframes.weekly;
      previos_string = "Last Week";
    }
    if (state === "monthly") {
      vals = element.timeframes.monthly;
      previos_string = "Last Month";
    }
    if (vals) {
      switch (element.title) {
        case "Work":
          workh2.textContent = `${vals.current}hrs`;
          workp.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;
        case "Play":
          playh2.textContent = `${vals.current}hrs`;
          playp.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;
        case "Study":
          studyh2.textContent = `${vals.current}hrs`;
          studyp.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;
        case "Exercise":
          exerciseh2.textContent = `${vals.current}hrs`;
          exercisep.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;
        case "Social":
          socialh2.textContent = `${vals.current}hrs`;
          socialp.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;
        case "Self Care":
          selfcareh2.textContent = `${vals.current}hrs`;
          selfcarep.textContent = `${previos_string} - ${vals.previous}hrs`;
          break;

        default:
          break;
      }
    }
  }
}
