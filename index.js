const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use('/static', express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on("sent-message", message=>{
        if (message === "1"){
            socket.emit('chat-message', latest)
        }else if(message === "2"){
            socket.emit('chat-message',protect)
        }else if(message === "3"){
            socket.emit('chat-message',myth)
        }else {
            socket.emit('chat-message',wrongChoice);
            socket.emit('chat-message',menu);
        }
    });
});

http.listen(3000);

const latest = `
                <small><b>Latest numbers</b></small><br>
                <small>Data as reported by national authorities by 11:37 AM CET June 20, 2020</small><br>
                <small>Total (new) cases in last 24 hours</small>
                <p></p>
                <small><b>Nigeria</b></small><br>
                <small>19147 confirmed cases (667)</small><br>
                <small>487 deaths (12)</small><br>
                <p></p>
                <small><b>Global</b></small><br>
                <small>8506107 confirmed cases (120667)</small><br>
                <small>455231 deaths (4545)</small><br>
                <p></p>
                <small><b>Novel Coronavirus (COVID-19) Situation dashboard</b></small><br>
                <small>This interactive dashboard/map provides the latest global numbers and numbers by country of 
                COVID-19 cases on a daily basis.</small><br>
                <small><a href="https://covid19.who.int/">https://covid19.who.int/</a></small><br>
                <p></p>
                <small><b>For country numbers, find the latest situation reports here: </b></small><br>
                <small>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">
                    https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports
                </a>
                `;

const protect = `
                <small>Wash your hands frequently</small><p></p>
                <small>Avoid touching your eyes, mouth and nose</small><p></p>
                <small>Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze</small><p></p>
                <small>Avoid crowded places</small><p></p>
                <small>Stay at home if you feel unwell - even with a slight fever and cough</small><p></p>
                <small>If you have a fever, cough and difficulty breathing, seek medical care early - but call by phone first</small><p></p>
                <small>Stay aware of the latest information from WHO</small><p></p>
                <small><b>SHARE</b> this service with this link:</small><br>
                
                <small><a href="http://wa.me/41798931892?text=hi">http://wa.me/41798931892?text=hi</a></small>
                <p></p>
                `;

const myth = `
                <p><b>WHO Myth-busters</b></p><br>
                <small><b>There is a lot of false information around. These are the facts.</b></small>
                <p></p>
                <small>People of all ages CAN be infected by the coronavirus. Older people, and people with pre-existing
                 medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming 
                 severely ill with the virus</small>
                 <p></p>
                <small> The coronavirus CAN be transmitted in areas with hot and humid climates</small>
                <p></p>
                <small>The coronavirus CANNOT be transmitted through mosquito bites.</small>
                <p></p>
                <small> There is NO evidence that companion animals/pets such as dogs or cats can transmit the coronavirus.</small>
                <p></p>
                <small>Taking a hot bath DOES NOT prevent the coronavirus</small>
                <p></p>
                <small>Hand dryers are NOT effective in killing the coronavirus</small>
                <p></p>
                <small>Garlic is healthy but there is NO evidence from the current outbreak that eating garlic has 
                protected people from the coronavirus.</small>
                <p></p>
                <small>Antibiotics DO NOT work against viruses, antibiotics only work against bacteria.</small>
                <p></p>
                <small>Check the facts on the WHO website: </small><br>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">
                    https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters
</a>
                `;

const wrongChoice = `Invalid choice. Please select 1, 2 or 3`;

const menu = `<small style="font-weight: bold">What would you like to know about coronavirus?</small>
                <ol style="padding-left: 10px;">
                    <li><small> <span style="font-weight: bold">LATEST</span> Numbers & cases</small></li>
                    <li><small> <span style="font-weight: bold">PROTECT</span> Protecting yourself</small></li>
                    <li><small> <span style="font-weight: bold">MYTHS </span> Know the facts!</small></li>
                </ol>
                <small>Enter any of the numbers above</small>`;