function esBisisesto(anio){
    if(anio % 400 === 0){
        return true
    }
    if(anio === 4){
        return true;
    }
    return false;
}
export default esBisisesto;