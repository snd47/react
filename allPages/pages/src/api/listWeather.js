export default function () {
    return fetch(
        'https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,TSLA,BIIB,NFLX&api_token=f1K85nPL4LfezzhbCIK5NK1AMKHKQv7e3JFJvLLvMIhRon4W4S06QEQ3Lgzo',
        {
            method: "GET"
        }
    ).then(function(res) {
        return res.json()
    })
}