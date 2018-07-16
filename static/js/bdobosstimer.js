// https://fullcalendar.io/docs
// http://ui.toast.com/tui-calendar
// -- https://nhnent.github.io/tui.calendar/latest/index.html

// Globals --------------------------------------------------------------------
var calendar = null;
var events = [];
var current_time = moment();
var image_path = 'static/images/';
var next_boss = [];
var utc_offset = -420; // GMT-0700
var database_base_url = 'https://bddatabase.net'; // 'https://bdocodex.com'
var somethinglovely_base_url = 'http://www.somethinglovely.net';

// msToTime -------------------------------------------------------------------
function msToTime(duration) {
    var seconds = parseInt((duration / 1000) % 60);
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //return hours + ":" + minutes + ":" + seconds;
    return hours + "h " + minutes + "m " + seconds + "s";
}

// checkTime ------------------------------------------------------------------
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// addEvents ------------------------------------------------------------------
function addEvents() {
    // Loop through raw events
    for (var i = 0; i < raw_events.length; i++) {
        // Init
        var color = boss_mapping[raw_events[i]['type']]['color'];
        var display_short = boss_mapping[raw_events[i]['type']]['display']['short'];
        // Previous week
        start = moment().utcOffset(utc_offset).startOf('week').subtract(7, 'days').add(raw_events[i]['start']);
        event = {
            'title': display_short,
            'start': start,
            'color': color,
        };
        events.push(event);
        // Current week
        start = moment().utcOffset(utc_offset).startOf('week').add(raw_events[i]['start']);
        event = {
            'title': display_short,
            'start': start,
            'color': color,
        };
        events.push(event);
        // Next week
        var start = moment().utcOffset(utc_offset).startOf('week').add(7, 'days').add(raw_events[i]['start']);
        event = {
            'title': display_short,
            'start': start,
            'color': color,
        };
        events.push(event);
    }
}

// setCalendar ----------------------------------------------------------------
function setCalendar() {
    calendar = $('#full-calendar-instance').fullCalendar({
        header: {
            // left: 'prev,next today',
            // center: 'title',
            // right: 'agendaDay,agendaWeek,month',
            left: '',
            center: '',
            right: ''
        },
        // height: 644,
        contentHeight: 595,
        // contentHeight: 1123,
        // aspectRatio: 2,
        events: events,
        defaultView: 'agendaWeek',
        nowIndicator: true,
        dayClick: function (date) {
            console.log('dayClick', date.format());
        },
        timezone: 'local', // 'America/Los Angeles','Europe/Amsterdam'
        ignoreTimezone: false,
        navLinks: false, // can click day/week names to navigate views
        editable: false,
        selectable: false,
        slotDuration: '01:00:00',
        // slotDuration: '00:30:00',
        defaultTimedEventDuration: '01:00:00',
        // defaultTimedEventDuration: '00:30:00',
        eventLimit: true, // allow "more" link when too many events
        // eventRender: function (event, el) {
        //     // render the timezone offset below the event title
        //     if (event.start.hasZone()) {
        //         el.find('.fc-title').after(
        //             $('<div class="tzo"/>').text(event.start.format('Z'))
        //         );
        //     }
        // },
        // columnHeaderHtml: function (mom) {
        //     if (mom.weekday() === 5) {
        //         return '<b>Friday!</b>';
        //     } else {
        //         return '<i>' + mom.format('LLL') + '</i>';
        //     }
        // }
        columnHeaderText: function (mom) {
            return mom.format('ddd');
        }
    });
}

// checkNextBoss --------------------------------------------------------------
function checkNextBoss() {
    for (var i = 0; i < raw_events.length; i++) {
        var start = moment().utcOffset(utc_offset).startOf('week').add(raw_events[i]['start']);
        var color = boss_mapping[raw_events[i]['type']]['color'];
        var display_full = boss_mapping[raw_events[i]['type']]['display']['full'];
        var image = image_path + boss_mapping[raw_events[i]['type']]['image'];

//        console.log('----- ----- -----');
//        console.log(display_short);
//        console.log('next_boss.length : ' + next_boss.length);
//        console.log('start    : ' + start.format('YYYY-MM-D hh:mm:ss A'));
//        if (next_boss.length > 0) {
//            console.log('old_time : ' + next_boss[0].time.format('YYYY-MM-D hh:mm:ss A'));
//            if (start.isSame(next_boss[0].time)) {
//                console.log('MATCHED');
//            } else {
//                console.log('NOT MATCHED');
//            }
//        }
//

        // (next_boss.length > 0 && start == next_boss[0].time)
        if ((next_boss.length === 0 && start > current_time) || (next_boss.length > 0 && start.isSame(next_boss[0].time))) {
            next_boss_entry = {
                name: display_full,
                time: start,
                image: image,
            };
            next_boss.push(next_boss_entry);
        }
    }

    console.log(next_boss);
    document.getElementById('next-boss-time').innerHTML = next_boss[0].time.local().format('dddd, MMMM Do YYYY @ hh:mm:ss A');
    document.getElementById("next-boss-image").src = next_boss[0].image;
    document.getElementById('next-boss-name').innerHTML = next_boss[0].name;
}

// startTime ------------------------------------------------------------------
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);

    var current_time = moment();
    document.getElementById('current-time').innerHTML = current_time.format('hh:mm:ss A');

    var next_boss_eta = msToTime(next_boss[0].time.diff(current_time));
    document.getElementById('next-boss-eta').innerHTML = next_boss_eta;

    t = setTimeout(function () {
        startTime()
    }, 500);
}

// Entry point ----------------------------------------------------------------
addEvents();
setCalendar();
checkNextBoss();
startTime();
