function isWeekend(date){
    const weekend = date.format('dddd');
    return weekend === 'Saturday' || weekend === 'Sunday';
}

export default isWeekend;