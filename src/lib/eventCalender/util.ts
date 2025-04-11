const getMonth=(_month:number, _year:number):any=>{
    const firstDayOfMonth=new Date(_year, _month, 1).getDay();
    let currentMonthCount=0-firstDayOfMonth
    const dayMatrix = new Array(6).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            return new Date(_year, _month, currentMonthCount)
        })
    })
    return dayMatrix;
}

export {getMonth}